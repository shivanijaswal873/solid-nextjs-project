import { client } from "./client";

export async function getCTA() {

  const query = `*[_type == "ctaSection"][0]{
    
    title,
    description,
    buttonText,
    buttonLink,

    image{
      asset->{url}
    },

    arrowLight{
      asset->{url}
    },

    arrowDark{
      asset->{url}
    }

  }`;

  return await client.fetch(query);
}