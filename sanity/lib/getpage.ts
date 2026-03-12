import { client } from "./client";

export async function getPage(slug: string) {

  const query = `*[_type == "page" && slug.current == $slug][0]{
    title,
    sections[]{
      ...,
      _type,


      heroImageLight{
        asset->{url}
      },
      heroImageDark{
        asset->{url}
      },

   
      brands[]{
        href,
        image{
          asset->{url}
        },
        imageDark{
          asset->{url}
        }
      },

    
      dottedLight{
        asset->{url}
      },
      dottedDark{
        asset->{url}
      },

      items[]{
        ...,
        logo{
          asset->{url}
        }
      }

    }
  }`;

  const data = await client.fetch(query, { slug });

  return data;
}