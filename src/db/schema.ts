import { integer, pgTable, serial, text, uuid } from 'drizzle-orm/pg-core';
import { authUsers } from 'drizzle-orm/supabase';

export const profileTable = pgTable('profile', {
  id: uuid('id')
    .primaryKey()
    .references(() => authUsers.id, { onDelete: 'cascade' }),
  firstName: text('first_name'),
  lastName: text('last_name'),
  bggName: text('bgg_name'),
}).enableRLS();

export const userListTable = pgTable('user_lists', {
  id: serial('id').primaryKey(),
  profileId: uuid('profile_id')
    .notNull()
    .references(() => profileTable.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
});

export const listItemTable = pgTable('list_items', {
  id: serial('id').primaryKey(),
  listId: integer('user_list_id')
    .notNull()
    .references(() => userListTable.id, { onDelete: 'cascade' }),
  title: integer('title').notNull(),
});
