import { client } from "./client";

export async function getAbout() {

  const query = `*[_type == "aboutSection"][0]{
    
    badge,
    heading,
    highlightText,
    description,

    imageLight{
      asset->{url}
    },

    imageDark{
      asset->{url}
    },

    points[],

    secondTitle,
    secondHeading,
    secondHighlight,
    secondDescription,

    secondImageLight{
      asset->{url}
    },

    secondImageDark{
      asset->{url}
    },

    buttonText,
    buttonLink
  }`;

  return await client.fetch(query);
}