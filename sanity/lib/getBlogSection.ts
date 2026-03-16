import { client } from "./client";

export async function getBlogSection() {
  const query = `*[_type=="blogSection"][0]{
    title,
    subtitle,
    description
  }`;

  return client.fetch(query);
}