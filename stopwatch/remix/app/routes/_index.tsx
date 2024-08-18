import type { MetaFunction } from '@remix-run/node';
import Stopwatch from '~/components/Stopwatch';

export const meta: MetaFunction = () => {
  return [
    { title: 'Stopwatch' },
    { name: 'description', content: 'Stopwatch app built with Remix' },
  ];
};

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-5xl text-balance font-extrabold tracking-tight text-white">
        Stopwatch
      </h1>
      <div className="mt-10">
        <Stopwatch />
      </div>
    </main>
  );
}
