import { client } from "./client";

export async function getFeaturesTabs() {

  const query = `*[_type == "featuresTabSection"][0]{
    
    tabs[]{
      id,
      tabTitle,
      title,
      desc1,
      desc2,

      image{
        asset->{url}
      },

      imageDark{
        asset->{url}
      }
    }

  }`;

  return await client.fetch(query);
}