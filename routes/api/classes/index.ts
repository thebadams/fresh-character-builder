import { Handlers } from "$fresh/server.ts";
import IResults from "../../../types/IResults.ts";

export const handler: Handlers<IResults> = {
  GET(_req, _ctx) {
    const data = "All Classes";
    return new Response(JSON.stringify({ results: data }));
  },
};
