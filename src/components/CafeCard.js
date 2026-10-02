import Link from "next/link";

export default function CafeCard({ cafe }) {
  return (
    <div className="flex flex-col gap-1 border rounded-xl p-5 transition hover:shadow-md hover:scale-105">
      <Link
        href={`/cafe/${cafe.slug}`}
        className="text-lg font-semibold hover:underline"
      >
        {cafe.name}
      </Link>
      <p className="text-sm text-zinc-600">{cafe.address}</p>
    </div>
  );
}
