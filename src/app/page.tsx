"use server";
import CreateUser from "@/components/createUser";
import { db } from "@/db/connect";
import { users } from "@/db/schema";

type User = typeof users.$inferSelect;

async function fetchUsers() {
  try {
    const data: User[] = await db.select().from(users);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Home() {
  const users: User[] = await fetchUsers();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-3xl font-bold">Create and View Users</h1>
      <CreateUser />
      <div className="flex flex-col">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col bg-slate-800 text-white p-2"
          >
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Image: {user.image}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
