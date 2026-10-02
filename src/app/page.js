import { getCafes } from "@/lib/cafes";
import CafeCard from "@/components/CafeCard";

export default function Home() {
  const cafes = getCafes();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Cafe Finder</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cafes.map((cafe) => (
          <CafeCard key={cafe.id} cafe={cafe} />
        ))}
      </div>
    </main>
  );
}
