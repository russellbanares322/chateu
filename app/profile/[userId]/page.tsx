import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";

type ProfileProps = {
  params: Promise<{
    userId: string;
  }>;
};

export default async function Profile({ params }: ProfileProps) {
  const { userId } = await params;

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white rounded-xl max-w-[700px] w-full mx-5 relative">
        <div className="bg-gray/15 w-full h-16 rounded-tl-xl rounded-tr-xl absolute" />
        <div className="p-5 mt-4">
          {/* Image and name of user*/}
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="bg-gray h-16 w-16 rounded-full border-[3px] border-solid border-white" />
              <p className="text-lg font-semibold">FullName - {userId}</p>
            </div>
            {/* Extra action buttons */}
            <div className="mt-1">
              <Button
                size="sm"
                className="border border-solid bg-white hover:bg-gray/10 text-black font-semibold"
              >
                <Link2 className="text-black" />
                Copy link
              </Button>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="mx-5 pb-2">
          <p>Content</p>
        </div>
      </div>
    </div>
  );
}
