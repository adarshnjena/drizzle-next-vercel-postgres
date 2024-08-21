import { db } from "@/db/connect";
import { users } from "@/db/schema";

export type NewUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export async function GET() {
  const data: User[] = await db.select().from(users);
  return new Response(JSON.stringify(data), { status: 200 });
}
