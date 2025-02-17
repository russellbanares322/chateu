export default function Sidebar() {
  const sampleData = new Array(10).fill("").map((_, index) => ({
    id: index,
    name: `User ${index + 1}`,
  }));

  // Map real data
  return (
    <div className="p-10">
      <h1 className="text-white mb-5">CHATEU</h1>
      <ul className="space-y-5">
        {sampleData?.map((user) => (
          <li key={user.id} className="text-white cursor-pointer">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
