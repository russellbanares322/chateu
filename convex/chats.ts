import { v } from "convex/values";
import { query } from "./_generated/server";

export const chats = query({
    args: { chatSessionId: v.string() },
    handler: async (ctx, args) => {
        console.log(ctx)
        const chatDatas = await ctx.db.query("chats").filter((q) => q.eq(q.field("chatSessionId"), args.chatSessionId)).order("desc")

        return chatDatas
    }
})

