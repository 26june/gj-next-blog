import { sql } from "@vercel/postgres";
import short from "short-uuid";

export async function saveComments(
  username: string,
  content: string,
  slug: string
) {
  const uuid = short.generate();

  await sql`INSERT INTO comments (id, slug, username, content) VALUES (${uuid}, ${slug}, ${username}, ${content})`;
}
