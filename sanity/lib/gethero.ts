import { client } from "./client";

export async function getHero() {

  const query = `*[_type == "hero"][0]{
    badge,
    title,
    highlightText,
    description,
    placeholder,
    buttonText,
    bottomText,

    heroImageLight{
      asset->{url}
    },

    heroImageDark{
      asset->{url}
    }
  }`;

  return await client.fetch(query);
}