import { z } from "zod";

// define a schema for the summary
export const summarySchema = z.array(
    z.object({
        title: z.string().describe("title for the summary"),
        description: z.string().describe("description for the summary"),
    })
);