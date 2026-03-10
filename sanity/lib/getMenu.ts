import { client } from "./client";

export async function getMenu() {
  const query = `*[_type == "menu"] | order(_createdAt asc){
    title,
    path,
    submenu[]{
      title,
      path
    }
  }`;

  return await client.fetch(query);
}