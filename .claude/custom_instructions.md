# Custom Instructions for tn-fe-template

## Primary Reference Document

**IMPORTANT**: Before making any code changes or suggestions, you MUST read and follow the guidelines in `docs/AGENT-GUIDE.md`. This is the authoritative guide for this codebase.

## Quick Start Rules

1. **Always consult** `docs/AGENT-GUIDE.md` first for:
   - Project structure and file organization
   - Code style guidelines and conventions
   - Common tasks and implementation patterns
   - TypeScript and React best practices
   - API integration patterns (REST & GraphQL)
   - State management with Zustand
   - Form validation with Zod + React Hook Form

2. **Follow the established patterns** shown in `docs/AGENT-GUIDE.md`:
   - Use the `@/` import alias for all internal imports
   - Follow file naming conventions (PascalCase for components, camelCase for utilities)
   - Maintain the folder structure: components, pages, hooks, api, store, utils, config
   - Use TypeScript strictly - never use `any`
   - Create co-located files (component + schema + test)

3. **Key architectural decisions**:
   - **Forms**: Always use React Hook Form + Zod validation
   - **Global State**: Use Zustand slices (see existing examples in `src/store/slices/`)
   - **API Calls**: Use `apiClient` (Axios) or `apolloClient` (Apollo GraphQL)
   - **Routing**: Use React Router v7 with route constants from `src/config/routes.config.ts`
   - **UI Components**: Use shadcn/ui components from `src/components/ui/`
   - **Authentication**: JWT-based with interceptors already configured

4. **Before creating new code**:
   - Check if similar code exists in the codebase
   - Look for existing utilities, hooks, or components to reuse
   - Follow the examples in `docs/AGENT-GUIDE.md` for the specific task
   - Maintain consistency with existing code style

5. **Documentation expectations**:
   - Document complex business logic with JSDoc
   - Add inline comments for non-obvious decisions
   - Don't document self-explanatory code
   - Keep comments concise and meaningful

## Implementation Checklist

When implementing features, follow this order:

1. ✅ Read relevant sections of `docs/AGENT-GUIDE.md`
2. ✅ Check existing code for similar patterns
3. ✅ Define TypeScript types/interfaces first
4. ✅ Follow the file structure conventions
5. ✅ Use existing utilities and configurations
6. ✅ Implement error handling
7. ✅ Add validation where needed (Zod schemas for forms)
8. ✅ Test the implementation

## AI Rules from AGENT-GUIDE.md

### Code Generation
- Always use TypeScript with explicit types - never use `any`
- Follow existing file structure and naming conventions
- Use `@/` import alias for all internal imports
- Include proper error handling for all API calls
- Validate user input with Zod schemas
- Use existing utility functions before creating new ones

### Component Creation
- Create functional components with TypeScript types
- Extract complex logic into custom hooks
- Use shadcn/ui components for UI elements
- Follow component organization: component + schema + test
- Keep components focused on single responsibility

### State Management
- Use Zustand for global state (auth, theme, app-wide data)
- Use local state (useState) for component-specific UI state
- Use React Query/Apollo for server state
- Never duplicate state between global and local
- Keep state as close to where it's used as possible

### API Integration
- Always use configured `apiClient` (axios) or `apolloClient`
- Define TypeScript types for all request/response data
- Create service files in `src/api/rest/services/` for REST
- Create query/mutation files in `src/api/graphql/` for GraphQL
- Wrap API calls in custom hooks for reusability

## Important Files to Know

- `docs/AGENT-GUIDE.md` - **Primary reference** (read this first!)
- `src/config/env.ts` - Environment configuration with Zod validation
- `src/lib/axios.ts` - REST API client with JWT interceptors
- `src/lib/apollo.ts` - GraphQL client with auth link
- `src/store/store.ts` - Root Zustand store
- `src/config/routes.config.ts` - Route path constants
- `src/routes/routes.tsx` - Route definitions

## Common Tasks Reference

For detailed examples and step-by-step instructions, refer to the corresponding sections in `docs/AGENT-GUIDE.md`:

- **Adding a new API endpoint** → See Task 1 in AGENT-GUIDE.md
- **Adding a GraphQL query** → See Task 2 in AGENT-GUIDE.md
- **Creating a form** → See Task 3 in AGENT-GUIDE.md
- **Adding Zustand state** → See Task 4 in AGENT-GUIDE.md
- **Creating custom hooks** → See Task 5 in AGENT-GUIDE.md
- **Adding new routes** → See Task 6 in AGENT-GUIDE.md
- **Adding env variables** → See Task 7 in AGENT-GUIDE.md

---

**Remember**: `docs/AGENT-GUIDE.md` is your source of truth. When in doubt, consult it first!
