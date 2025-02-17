import Link from "next/link";

export default function Sidebar() {
  const sampleData = new Array(10).fill("").map((_, index) => ({
    chatId: String(index + 1),
    id: index,
    name: `User ${index + 1}`,
  }));

  // Map real data
  return (
    <div className="py-14 pl-2">
      <h1 className="text-white mb-5 ml-1">CHATEU</h1>
      <ul className="space-y-3 w-full">
        {sampleData?.map((user) => (
          <Link key={user.id} href={`/chats/${user.chatId}`}>
            <li className="text-white cursor-pointer hover:bg-slate-400 py-1 px-2 rounded-md">
              {user.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
