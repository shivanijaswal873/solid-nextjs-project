import { client } from "./client";

export async function getIntegration() {

  const query = `*[_type == "integration"][0]{
    title,
    subtitle,
    description,

    brands[]{
      logo{
        asset->{
          url
        }
      }
    }
  }`;

  return await client.fetch(query);
}