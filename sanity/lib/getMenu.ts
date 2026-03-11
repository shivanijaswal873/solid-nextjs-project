import { client } from "./client";

export async function getMenu() {

  const query = `*[_type == "menu"] | order(id asc){
    id,
    title,
    path,
    newTab,

    submenu[]{
      id,
      title,
      path,
      newTab
    },

    logoLight{
      asset->{
        url
      }
    },

    logoDark{
      asset->{
        url
      }
    },

    githubLink,
    buttonText,
    buttonLink
  }`;

  return await client.fetch(query);
}