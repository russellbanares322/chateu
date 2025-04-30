type ProfileProps = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function Profile({ params }: ProfileProps) {
  // Implement viewing of user profile
  const { userId } = await params;

  return <div>{userId}</div>;
}
