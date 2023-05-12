import Error from "next/error";
import { notFound } from "next/navigation";

const games = [
  "chrono-horizon",
  "aggro-culture"
]

export default function Page({ params }: { params: { slug: string } }) {
  if (games.indexOf(params.slug) === -1) {
    notFound();
  }
  else {
    return <div>
      <h1>{params.slug}</h1>
    </div>
  }
}