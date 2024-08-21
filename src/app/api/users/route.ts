import { db } from "@/db/connect";
import { users } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export type NewUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export async function GET() {
  const data: User[] = await db.select().from(users);
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request: NextRequest) {
  const newUser: NewUser = await request.json();
  const user = await db.insert(users).values(newUser).returning();
  return NextResponse.json(user, { status: 201 });
}
