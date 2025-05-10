import { createServerFileRoute } from "@tanstack/react-start/server";

export const Serverroute = createServerFileRoute().methods({
  GET: () => "hello",
});
