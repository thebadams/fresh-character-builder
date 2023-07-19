import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";
export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh Character Builder</title>
      </Head>
      <div>
        <div class={tw`block text-center`}>Fresh Character Builder</div>
        <div class={tw`space-y-2`}>
          <p class={tw`block bg-red-100 text-center`}>
            <a href="/archmage">Archmage</a>
          </p>
          <p class={tw`block bg-red-100 text-center`}>
            Dungeons and Dragons 5E
          </p>
          <p class={tw`block bg-red-100 text-center`}>Forbidden Lands</p>
        </div>
      </div>
    </>
  );
}
