import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import compression from 'compression';
import morgan from 'morgan';
import { z } from 'zod';

// ESM __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine Setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Zod Validation Middleware
const validate = (schema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ errors: err.errors });
    }
    next(err);
  }
};

// Example Zod Schema
const HomeQuerySchema = z.object({
  query: z.object({
    name: z.string().min(1).optional(),
  }),
});

// Routes
app.get('/', validate(HomeQuerySchema), (req: Request, res: Response) => {
  const name = (req.query.name as string) || 'World';
  
  // HTMX Partial Render Check
  if (req.headers['hx-request']) {
    return res.send(`<h1 class="title">Hello, ${name}! (via HTMX)</h1>`);
  }
  
  res.render('home', {
    title: 'Modern Starter',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});