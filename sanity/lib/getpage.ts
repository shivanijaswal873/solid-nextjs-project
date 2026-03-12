import { client } from "./client";

export async function getPage(slug: string) {

  const query = `*[_type=="page" && slug.current==$slug][0]{
    title,
    sections[]{
      ...,
      _type,

      heroImageLight{asset->{url}},
      heroImageDark{asset->{url}},

      brands[]{
        href,
        image{asset->{url}},
        imageDark{asset->{url}}
      },

      features[]{
        title,
        description,
        icon{
          asset->{url}
        }
      },

      dottedLight{asset->{url}},
      dottedDark{asset->{url}},

      items[]{
        ...,
        logo{
          asset->{url}
        }
      }
    }
  }`;

  return client.fetch(query,{slug});
}