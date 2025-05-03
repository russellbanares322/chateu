type ProfileProps = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function Profile({ params }: ProfileProps) {
  const { userId } = await params;

  // Display image of user and details
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-3 rounded-md">User Profile {userId}</div>
    </div>
  );
}
