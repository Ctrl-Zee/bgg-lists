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
