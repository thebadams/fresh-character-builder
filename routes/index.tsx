import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Fresh Character Builder</title>
      </Head>
      <div>
        <div class="text-4xl text-center">Fresh Character Builder</div>
        <p class="block bg-red-100 text-center">13th Age</p>
        <p class="block bg-yellow-100 text-center">Dungeons and Dragons 5E</p>
        <p class="block bg-green-100 text-center">Forbidden Lands</p>
      </div>
    </>
  );
}
