import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { tagRouter } from "./routers/tag";
import { noteRouter } from "./routers/note";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  tag: tagRouter,
  note: noteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
