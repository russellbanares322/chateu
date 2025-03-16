import { v } from "convex/values";
import { query } from "./_generated/server";

export const chats = query({
    args: { chatSessionId: v.string() },
    handler: async (ctx, args) => {
        const chatDatas = await ctx.db.query("chats").filter((q) => q.eq(q.field("chatSessionId"), args.chatSessionId)).order("desc")
      
        return chatDatas
    }
})