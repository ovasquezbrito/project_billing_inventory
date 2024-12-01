import { pgTable, varchar, uuid, timestamp, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid().defaultRandom().primaryKey(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  is_verified: boolean().notNull().default(false),
  role: varchar({ length: 10 }).notNull().default("user"),
  created_at: timestamp().defaultNow(),
  updated_at: timestamp().defaultNow(),
});
