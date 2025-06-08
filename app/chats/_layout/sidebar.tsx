"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const sampleData = new Array(10).fill("").map((_, index) => ({
    chatId: String(index + 1),
    id: index + 1,
    name: `User ${index + 1}`,
  }));

  return (
    <div className="py-14 pl-2">
      <h1 className="text-white mb-5 ml-1 outline-black">CHATEU</h1>
      <ul className="space-y-10  w-full">
        {sampleData?.map((user) => (
          <Link key={user.id} href={`/chats/${user.chatId}`}>
            <li
              className={cn(
                "text-white cursor-pointer mb-1 py-1 px-2 rounded-md",
                pathname.includes(String(user.id))
                  ? "bg-blue-500"
                  : "bg-none hover:bg-slate-300 hover:text-black",
              )}
            >
              {user.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
