# tn-fe-template

> Production-ready React template for immediate use. Fork it, customize it, and start building your next project in minutes.

Live: [https://technerf-fe-template.netlify.app/](https://technerf-fe-template.netlify.app/)

## Why Use This Template?

This is a **fork-ready template** designed to get you from zero to production-ready in minutes. It includes:

- **Vite** - Lightning-fast development server and build tool
- **React 19** - Latest React with hooks and concurrent features
- **TypeScript** - Full type safety with strict mode enabled
- **Tailwind CSS v4** - Latest utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components built with Radix UI
- **Dark Mode** - Built-in theme switching
- **Authentication** - JWT-based auth with REST & GraphQL support
- **Forms** - React Hook Form + Zod validation
- **State Management** - Zustand for simple, efficient state
- **API Integration** - Axios (REST) + Apollo Client (GraphQL)
- **Routing** - React Router v7 with protected routes
- **Well-Documented** - Comprehensive guides and examples
- **AI-Friendly** - Built-in Claude Code support with custom rules

## AI-First Development

This template is **optimized for AI-assisted development** with built-in support for Claude Code:

- **`.claude/` Configuration** - Pre-configured custom instructions and rules that help Claude understand your project structure, coding conventions, and best practices
- **`docs/AI-GUIDE.md`** - Comprehensive 500+ line guide specifically written for AI agents to understand the entire codebase architecture
- **Consistent Patterns** - Predictable file structure and naming conventions that AI can easily navigate and extend
- **Full Type Safety** - Complete TypeScript coverage helps AI understand types and generate correct code
- **Clear Documentation** - Every pattern, convention, and architectural decision is documented for both humans and AI

**Using Claude Code?** Just open this project and start coding. Claude will automatically understand your project structure, follow your coding conventions, and suggest changes that align with your architecture. No additional configuration needed!

## Getting Started

### 1. Fork This Repository

Click the "Fork" button at the top right of this page to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-PROJECT-NAME.git
cd YOUR-PROJECT-NAME
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Configure Environment

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your settings
```

Edit `.env.local`:

```bash
VITE_API_BASE_URL=http://localhost:4000/api
VITE_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
VITE_APP_NAME=MyAwesomeApp
```

### 5. Start Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 6. Customize for Your Project

After forking, you'll want to:

1. **Update `package.json`**:
   - Change `name` from `"tn-fe-template"` to your project name
   - Update `version`, `description`, and `author`

2. **Update this README**:
   - Replace the title and description
   - Add your project-specific documentation

3. **Configure theme colors** in `src/assets/styles/global.css`

4. **Remove or customize** example pages in `src/pages/`

5. **Set up your Git remote**:
   ```bash
   git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-PROJECT-NAME.git
   ```

### Available Scripts

```bash
pnpm dev              # Start development server
pnpm build            # Build for production (TypeScript check + Vite build)
pnpm preview          # Preview production build
pnpm lint             # Run ESLint
pnpm test             # Run tests in watch mode
pnpm test:ui          # Run tests with UI
pnpm test:run         # Run tests once
pnpm test:coverage    # Run tests with coverage report
```

## Project Structure

```
tn-fe-template/
├── .claude/                 # Claude Code configuration
│   └── custom_instructions.md  # Custom rules for AI assistance
├── docs/                    # Documentation for AI agents
│   └── AI-GUIDE.md         # Primary AI agent reference
├── src/
│   ├── api/                # API layer
│   │   ├── rest/          # Axios REST services
│   │   └── graphql/       # Apollo GraphQL queries/mutations
│   ├── assets/            # Static assets and global styles
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── layout/       # Layout components
│   │   ├── forms/        # Form components
│   │   └── common/       # Reusable common components
│   ├── config/           # Configuration files
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Third-party library configs
│   ├── pages/            # Page components
│   ├── routes/           # Routing configuration
│   ├── store/            # Zustand state management
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Root component
│   └── main.tsx          # Application entry point
├── .env.example          # Environment variables template
├── package.json
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.ts        # Vite configuration
```

## Key Technologies

### Frontend
- **[React 19](https://react.dev/)** - UI library with hooks and concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript superset
- **[Vite](https://vite.dev/)** - Lightning-fast build tool and dev server
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components built with Radix UI
- **[Lucide React](https://lucide.dev/guide/packages/lucide-react)** - Beautiful & consistent icon library

### State & Forms
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with easy validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### API & Data
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client with interceptors
- **[Apollo Client](https://www.apollographql.com/docs/react/)** - Comprehensive GraphQL client
- **[React Router v7](https://reactrouter.com/)** - Declarative routing for React
- **[GraphQL](https://graphql.org/)** - Query language for APIs

### Developer Tools
- **[ESLint](https://eslint.org/)** - Pluggable linting utility
- **[Prettier](https://prettier.io/)** - Opinionated code formatter
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript support for ESLint

## Common Tasks

### Adding a New Page

1. Create page component in `src/pages/`
2. Add route constant in `src/config/routes.config.ts`
3. Add route definition in `src/routes/routes.tsx`

### Creating a Form

1. Create form schema with Zod in `src/components/forms/[FormName]/FormName.schema.ts`
2. Create form component using React Hook Form in `FormName.tsx`
3. Use shadcn/ui components for inputs

### Adding an API Endpoint

**REST:**
1. Create service in `src/api/rest/services/[resource].service.ts`
2. Use `apiClient` from `src/lib/axios.ts`

**GraphQL:**
1. Define query/mutation in `src/api/graphql/queries/` or `mutations/`
2. Use with `useQuery` or `useMutation` from Apollo Client

### Managing State

**Global State (Zustand):**
1. Create slice in `src/store/slices/[domain].slice.ts`
2. Add to root store in `src/store/store.ts`

**Local State:**
- Use `useState` for component-specific state
- Use `useReducer` for complex component state

## Authentication

This template includes JWT-based authentication that works with both REST and GraphQL APIs.

**Login Flow:**
1. User submits credentials via `LoginForm`
2. `useAuth` hook calls `authService.login()`
3. Token stored in localStorage
4. User redirected to dashboard
5. Axios/Apollo interceptors add token to requests

**Protected Routes:**
- Wrap routes with `<ProtectedRoute />` in `src/routes/routes.tsx`
- Unauthenticated users are redirected to `/login`

## Developer Experience

This template is optimized for modern development workflows:

- **Clear Structure**: Predictable file organization
- **Type Safety**: Full TypeScript coverage
- **Documentation**: Comprehensive developer guide in `docs/AI-GUIDE.md`
- **Patterns**: Consistent code patterns throughout
- **Examples**: Working examples for common tasks

**Getting Started**: Check `docs/AI-GUIDE.md` for detailed guidance on common tasks.

## What's Included Out of the Box

### Example Pages
- **Home** (`/`) - Landing page with navigation
- **Login** (`/login`) - Authentication form with validation
- **Register** (`/register`) - User registration form
- **Dashboard** (`/dashboard`) - Protected route example
- **404 Page** - Custom not found page

### Pre-configured Features
- JWT authentication flow (login/logout/token refresh)
- Form validation with Zod schemas
- API services for both REST and GraphQL
- Global state management with Zustand
- Protected route wrapper
- Dark mode toggle
- Responsive navigation

### Developer Experience
- TypeScript strict mode enabled
- ESLint with React and TypeScript rules
- Prettier for code formatting
- Path aliases (`@/` for `src/`)
- Hot Module Replacement (HMR)
- Comprehensive test suite with Vitest

## Testing

This template includes a comprehensive testing setup using **Vitest** and **React Testing Library**.

### Running Tests

```bash
# Run tests in watch mode
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests once
pnpm test:run

# Run tests with coverage report
pnpm test:coverage
```

### Test Coverage

The template includes tests for:
- ✅ **LoginForm** - Form validation, user input, error handling
- ✅ **RegisterForm** - Registration flow, password validation, terms acceptance
- ✅ **Header** - Navigation, authentication states
- ✅ **Home Page** - Content rendering, links, features display

### Writing Tests

Tests are co-located with components:
```
src/
├── components/
│   └── forms/
│       └── LoginForm/
│           ├── LoginForm.tsx
│           ├── LoginForm.test.tsx    ← Test file
│           └── LoginForm.schema.ts
```

Example test:
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
```

## Customization Guide

### Changing Theme Colors

Edit the `@theme` block in `src/assets/styles/global.css`:

```css
@theme {
  --color-primary: hsl(0 0% 9%);
  --color-background: hsl(0 0% 100%);
  /* ... customize other colors ... */
}
```

### Adding shadcn/ui Components

This template uses shadcn/ui. Add more components as needed:

```bash
npx shadcn@latest add [component-name]
```

Examples:
```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add table
```

### Renaming Your Project

1. Update `package.json`:
   ```json
   {
     "name": "your-project-name",
     "description": "Your project description"
   }
   ```

2. Update `.env.local`:
   ```bash
   VITE_APP_NAME=YourAppName
   ```

3. Update this `README.md` with your project details

## Troubleshooting

### Build fails with Tailwind errors

Make sure you're using the correct versions:
- Tailwind CSS v4.x (configured in the template)
- Node.js 18 or higher

### Environment variables not working

- File must be named `.env.local` (not just `.env`)
- All variables must start with `VITE_`
- Restart dev server after changing env variables

### Import path errors

Use the `@/` alias for cleaner imports:
```typescript
// Good
import { Button } from '@/components/ui/button'

// Avoid
import { Button } from '../../../components/ui/button'
```

## Best Practices

1. **Use TypeScript strictly** - Avoid `any`, use proper types
2. **Follow the folder structure** - Keep files organized
3. **Use absolute imports** - Always use `@/` alias
4. **Extract reusable logic** - Create custom hooks
5. **Validate forms** - Use Zod schemas
6. **Handle errors** - Implement proper error handling
7. **Keep components small** - Break down large components

## Next Steps After Forking

1. Connect to your backend API by updating environment variables
2. Remove or customize the example pages
3. Add your project-specific pages and components
4. Customize the theme colors and branding
5. Update the authentication logic for your backend
6. Add additional shadcn/ui components as needed
7. Set up your deployment pipeline (Vercel, Netlify, etc.)

## Need Help?

- **Documentation**: Check `docs/AI-GUIDE.md` for comprehensive guidance
- **Common Tasks**: See sections above for examples
- **Code Examples**: Every feature includes working examples in the codebase

## License

MIT License - feel free to use this template for any project, commercial or personal!

---

**Ready to build something amazing?** Fork this template and start coding!
