export default function Sidebar() {
  const sampleData = new Array(10).fill("").map((_, index) => ({
    id: index,
    name: `User ${index + 1}`,
  }));

  // Map real data
  return (
    <div className="py-14 pl-2">
      <h1 className="text-white mb-5 ml-1">CHATEU</h1>
      <ul className="space-y-3 w-full">
        {sampleData?.map((user) => (
          <li
            key={user.id}
            className="text-white cursor-pointer hover:bg-slate-400 py-1 px-2 rounded-md"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
