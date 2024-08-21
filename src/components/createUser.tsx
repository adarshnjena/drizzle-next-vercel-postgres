"use client";
import { NewUser } from "../app/api/users/route";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function CreateUser() {
  const router = useRouter();
  const [data, setData] = useState<NewUser>({
    name: "",
    email: "",
    image: "",
    password: "",
  });
  async function createUser() {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res.json());
    router.refresh();
  }

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="mb-4 bg-slate-800 text-white p-2"
      />
      <input
        type="text"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="mb-4 bg-slate-800 text-white p-2"
      />
      <input
        type="text"
        placeholder="Image"
        value={data.image}
        onChange={(e) => setData({ ...data, image: e.target.value })}
        className="mb-4 bg-slate-800 text-white p-2"
      />
      <input
        type="text"
        placeholder="Password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        className="mb-4 bg-slate-800 text-white p-2"
      />
      <button
        onClick={createUser}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create User
      </button>
    </div>
  );
}
