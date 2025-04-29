type ProfileProps = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function Profile({ params }: ProfileProps) {
  const { userId } = await params;

  return <div>{userId}</div>;
}
