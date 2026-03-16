import { client } from "./client";

export async function getBlogs(){

  const query = `*[_type=="blog"] | order(publishedAt desc){
    _id,
    title,
    metadata,
    "slug": slug.current,
    "mainImage": mainImage.asset->url
  }`;

  return client.fetch(query);
}