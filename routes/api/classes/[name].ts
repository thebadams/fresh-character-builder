import { Handlers } from "$fresh/server.ts";
import IResults from "../../../types/IResults.ts";

export const handler: Handlers<IResults> = {
  GET(_req, ctx) {
    const { name } = ctx.params;
    const data = `The ${name} Class`;
    return new Response(JSON.stringify({ results: data }));
  },
};
