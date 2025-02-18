# Drizzle Kit

## Commands

### Schema Management

```bash
npx drizzle-kit generate  # Generate SQL migration files from schema changes
npx drizzle-kit migrate   # Run generated migrations against your database
npx drizzle-kit push      # Push schema changes directly to database
npx drizzle-kit pull      # Convert existing DB schema to Drizzle schema
```

### Development Tools

```bash
npx drizzle-kit studio   # Launch DB GUI for browsing/editing
npx drizzle-kit check    # Detect conflicts in migration files
npx drizzle-kit up       # Upgrade existing migration snapshots
```

## Quick Tips

- Use `generate` + `migrate` for production deployments
- Use `push` for rapid development/testing
- Use `pull` when working with existing databases
- Run `check` before merging migration changes
- Use `studio` for visual DB management

## Example Config

```ts
// drizzle.config.ts
export default defineConfig({
  schema: './src/db/schema.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

# Supabase Type Generation

## Installation

- Install Supabase CLI:
  ```bash
  npm i supabase@">=1.8.1" --save-dev
  ```

## Setup

- Login to Supabase:
  ```bash
  npx supabase login
  ```
- Initialize project:
  ```bash
  npx supabase init
  ```

## Generating Types

- Generate types for remote project:
  ```bash
  npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > database.types.ts
  ```
- Generate types for local development:
  ```bash
  npx supabase gen types typescript --local > database.types.ts
  ```

## Implementation

- Import types in your project:

  ```typescript
  import { createClient } from '@supabase/supabase-js';
  import { Database } from './database.types';
  ```

- Create typed client:
  ```typescript
  const supabase = createClient<Database>(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );
  ```

## Type Helpers

- Use shorthand table types:

  ```typescript
  import { Tables } from './database.types';
  let record: Tables<'table_name'>;
  ```

- Override view types using type-fest:

  ```typescript
  import { MergeDeep } from 'type-fest';
  ```

- Get nested query types:
  ```typescript
  import { QueryData } from '@supabase/supabase-js';
  type NestedData = QueryData<typeof queryReference>;
  ```
