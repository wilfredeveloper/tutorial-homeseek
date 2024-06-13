import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';


export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').notNull().unique(),
  phoneNumber: text('phone_number').notNull().unique(),
})