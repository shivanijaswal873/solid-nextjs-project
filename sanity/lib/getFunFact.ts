import { client } from "./client";

export async function getFunFact() {

  const query = `*[_type == "funFactSection"][0]{
    
    title,
    description,

    leftImage{
      asset->{url}
    },

    rightImage{
      asset->{url}
    },

    dottedLight{
      asset->{url}
    },

    dottedDark{
      asset->{url}
    },

    facts[]{
      number,
      label
    }

  }`;

  return await client.fetch(query);
}