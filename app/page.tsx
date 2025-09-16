import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main>
        <div className="flex flex-col items-center gap-8">
          <Button variant="outline">Get Started</Button>
        </div>
      </main>
    </div>
  );
}
