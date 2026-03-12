import { client } from "./client";

export async function getIntegration() {

  const query = `*[_type=="integration"][0]{

    title,
    subtitle,
    description,

    dottedLight{
      asset->{url}
    },

    dottedDark{
      asset->{url}
    },

    items[]{
      type,
      dotColor,
      dotSize,
      logo{
        asset->{url}
      }
    }

  }`;

  return await client.fetch(query);
}