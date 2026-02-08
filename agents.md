📋 Project Modernization Specifications: TypeScript-Express-EJS Starter 2026

1. Overview (Context)

Current State: Legacy starter kit based on TypeScript + Express + EJS, written in 2018.

Goal: Completely refactor the project structure and dependencies to align with 2026 web standards and developer experience (DX). Core Philosophy: “Build a lightweight, fast, and type-safe modern server-side rendering (SSR) environment.”

2. Tech Stack Modernization Requirements

Instruct the AI to replace and upgrade the following libraries:

Runtime & Package Manager: Use Node.js (LTS version), configure with pnpm. Language: TypeScript 5.x or higher (Strict mode enabled).

Module System: Full transition from CommonJS (require) to **ES Modules (import/export)**.

Fast Frontend Interaction: Include HTMX library by default to overcome EJS limitations.

Validation: Add a request schema validation layer (Request Body/Query) using Zod. Tools:

ESLint + Prettier (using Flat Config approach)

tsx (for development mode execution)

Vitest (for unit testing environment setup)

3. Core Prompt to Provide to AI (The Prompt)

"I'm refactoring an 8-year-old typescript-express-ejs-starter to meet 2026 standards. Rework package.json and the basic server.ts structure following these rules."

ESM Only: All code uses the .ts extension and employs the ESM module format.

HTMX Integration: Include a CDN or local script in the base layout to enable direct use of HTMX within EJS templates. Type Safety: Define types for all Express Request/Response objects. Specifically, demonstrate middleware using Zod to validate data before controller entry.

Modern Tools: Use `tsx --watch` instead of nodemon. Write scripts using pnpm commands.

README Update: Summarize the installation and execution methods as of 2026.

-

📋 Project Modernization Spec: TypeScript-Express-EJS Starter 2026

1. 개요 (Context)

기존 상태: 2018년에 작성된 TypeScript + Express + EJS 기반의 구형 스타터 킷.

목표: 2026년 웹 표준 및 개발자 경험(DX)에 맞춰 프로젝트 구조와 의존성을 전면 리팩토링함.

핵심 철학: "가볍고, 빠르며, 타입 안정성이 보장되는 모던 서버 사이드 렌더링(SSR) 환경 구축".

2. 기술 스택 현대화 요구사항 (Tech Stack)

AI에게 다음 라이브러리로 교체 및 업그레이드를 지시하세요:

Runtime & Package Manager: Node.js (LTS 버전) 사용, pnpm 기반 설정.

Language: TypeScript 5.x 이상 (Strict 모드 활성화).

Module System: CommonJS(require)에서 **ES Modules (import/export)**로 완전 전환.

Fast Frontend Interaction: EJS의 한계를 극복하기 위해 HTMX 라이브러리 기본 포함.

Validation: Zod를 사용하여 요청(Request Body/Query) 스키마 검증 레이어 추가.

Tooling:

ESLint + Prettier (Flat Config 방식 적용)

tsx (개발 모드 실행용)

Vitest (Unit Test 환경 구축)

3. AI에게 전달할 핵심 프롬프트 (The Prompt)

"나는 8년 된 typescript-express-ejs-starter를 2026년 기준으로 리팩토링하려고 해. 아래 규칙을 지켜서 package.json과 기본 server.ts 구조를 다시 짜줘."

ESM 전용: 모든 코드는 .ts 확장자를 사용하며 ESM 모듈 방식을 사용한다.

HTMX 통합: EJS 템플릿 내에서 HTMX를 바로 쓸 수 있도록 기본 레이아웃에 CDN 혹은 로컬 스크립트를 포함한다.

타입 안정성: 모든 Express Request/Response에 타입을 정의하고, 특히 Zod를 이용해 컨트롤러 진입 전 데이터를 검증하는 미들웨어를 예시로 보여준다.

최신 도구: nodemon 대신 tsx --watch를 사용하고, pnpm 명령어로 구성된 스크립트를 작성한다.

README 업데이트: 2026년 기준의 설치 및 실행 방법을 요약해서 작성한다.