type ProfileProps = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function Profile({ params }: ProfileProps) {
  const { userId } = await params;

  // Display image of user and details
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white rounded-xl max-w-[500px] w-full mx-5 relative">
        <div className="bg-gray/15 w-full h-16 rounded-tl-xl rounded-tr-xl absolute" />
        <div className="p-5 mt-4">
          {/* Image and name of user */}
          <div className="space-y-2">
            <div className="bg-gray h-16 w-16 rounded-full border-[3px] border-solid border-white" />
            <p className="text-lg font-semibold">FullName</p>
          </div>
        </div>
      </div>
    </div>
  );
}
