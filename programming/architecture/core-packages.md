Notes on what a core/common package used across multiple projects inside a FE monorepo could look like.

#### Core
- lives in own package
- Includes
    - Domain Types
    - API Calls
    - React Query Hooks / Redux Helpers
    - Reusable Providers / Services
        - Analytics
        - CRM Integrations
        - Snackbar?

- Should we be able to import ui library? NO
- Try to avoid JSX

#### Domain Types
    - API Type defined by BE
    - POST versions should be OMIT

    type base = { id: number, location: LocationDetails }
    type getbase = base & {foo: string }
    type postbase = base & { bar: string }
   
    <T extends base>(app: T) => app.id > -1

#### API Calls
    - Dynamic URL for API
