import { Handlers } from "$fresh/server.ts";
import IResults from "../../../types/IResults.ts";

interface ClassBody {
  name: string;
}
export const handler: Handlers<IResults> = {
  GET: (_req, _ctx) => {
    const data = "All Classes";
    return new Response(JSON.stringify({ results: data }));
  },
  POST: async (req, _ctx) => {
    const payload = await req.json() as ClassBody;

    const payloadData = payload.name;

    const data = `Class ${payloadData} Created`;

    return new Response(JSON.stringify({
      results: data,
    }));
  },
};
