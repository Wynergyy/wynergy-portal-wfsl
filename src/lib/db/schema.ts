import { z } from "zod";

export const testRecordSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1)
});

export type TestRecord = z.infer<typeof testRecordSchema>;
