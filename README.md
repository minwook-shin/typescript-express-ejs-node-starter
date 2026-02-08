# Modern TypeScript + Express + EJS + HTMX Starter (2026 Edition)

A lightweight, fast, and type-safe server-side rendering (SSR) starter kit modernized for 2026.

## Features

- **Runtime**: Node.js (LTS) + pnpm
- **Language**: TypeScript 5.x (Strict Mode, ESM)
- **Framework**: Express.js + EJS
- **Interactivity**: HTMX (No complex build steps for frontend)
- **Validation**: Zod (Runtime schema validation)
- **Tooling**: Vitest, ESLint (Flat Config), Prettier, tsx

# Pre-reqs
- [Node.js](https://nodejs.org/en/) (LTS)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

# Getting started

- Install dependencies
```
pnpm install
```
- Build and run the project
```
pnpm build
npm start
```

Finally, navigate to `http://localhost:3000` and you should see the template being served and rendered locally!

# Deploying the app

### Build the app

- execute `npm run build` from a terminal window

## Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.
The `test` and `views` folders remain top level as expected. 

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/public**           | Static assets that will be used client side                                                   |
| **src**/server.ts        | Entry point to your express app                                                               |
| **test**                 | Contains your tests. Seperate from source because there is a different build process.         |
| **views**                | Views define how your app renders on the client. In this case we're using EJS                 |
| package.json             | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                          |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:


| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Does the same as 'npm run serve'. Can be invoked with `npm start`                                 |
| `build`                   | Full build. Runs ALL build tasks (`build-sass`, `build-ts`, `tslint`, `copy-static-assets`)       |
| `serve`                   | Runs node on `dist/server.js` which is the apps entry point                                       |
| `test`                    | Runs tests using Jest test runner                                                                 |

# Hackathon Starter Project
A majority of this quick start's content was inspired or adapted from Sahat's excellent [Hackathon Starter project](https://github.com/sahat/hackathon-starter).
