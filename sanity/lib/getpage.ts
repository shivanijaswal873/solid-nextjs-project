import { client } from "./client";

export async function getPage(slug: string) {

  const query = `*[_type=="page" && slug.current==$slug][0]{
    title,
    sections[]{
      ...,
      _type,

      heroImageLight{asset->{url}},
      heroImageDark{asset->{url}},

      imageLight{asset->{url}},
      imageDark{asset->{url}},
      secondImageLight{asset->{url}},
      secondImageDark{asset->{url}},

      dottedLight{asset->{url}},
      dottedDark{asset->{url}},

      items[]{
        ...,
        logo{asset->{url}}
      },

      features[]{
        title,
        description,
        icon{asset->{url}}
      },

      tabs[]{
        id,
        tabTitle,
        title,
        desc1,
        desc2,
        image{asset->{url}},
        imageDark{asset->{url}}
      }
    }
  }`;

  return client.fetch(query, { slug });
}