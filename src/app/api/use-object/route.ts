import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { summarySchema } from "./schema";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const context = await req.json();

    const result = await streamObject({
        model: openai("gpt-4o"),
        schema: summarySchema,
        prompt:
            `Generate 10 summary points for this context:` + context,
        mode: "json"
    });

    return result.toTextStreamResponse();
}