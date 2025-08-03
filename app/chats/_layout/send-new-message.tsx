import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

export default function SendNewMessage() {
  // Implement convex
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-md p-6 rounded-md">
        <h1 className="font-semibold">
          Looks like you don't have any message yet.
        </h1>
        <div className="flex items-center justify-center w-full gap-2 mt-5">
          <input
            className="border rounded-md placeholder:text-sm py-1 px-3"
            placeholder="Enter user id or group id..."
          />
          <Button size="sm">
            Send Message <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
