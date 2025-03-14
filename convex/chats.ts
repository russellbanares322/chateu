import { v } from "convex/values";
import { query } from "./_generated/server";

export const chats = query({
    args: {chatSessionId: v.string()},
    handler: async() => {}

})