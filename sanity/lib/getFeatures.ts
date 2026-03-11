import { client } from "./client";

export async function getFeatures() {

  const query = `*[_type == "featureSection"][0]{
    title,
    subtitle,
    description,

    features[]{
      title,
      description,
      icon{
        asset->{
          url
        }
      }
    }
  }`;

  return await client.fetch(query);
}