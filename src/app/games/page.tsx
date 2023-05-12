//import { query } from "@/utils/database";

export default async function Page() {
  //const games = await query("SELECT * FROM games") as any;
  return <>
    <h1>Games</h1>
    
  </>

  /*
  {games.map((game: any) => (
      <li key={game.id}>
        <a href={`/games/${game.slug}`}>{game.name}</a>
      </li>
    ))}*/
}