import { wait } from "./helpers";
import { createClient } from "@sanity/client";

export const sanity = {
  client: createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: true,
    apiVersion: "2023-08-01",
    token: process.env.SANITY_TOKEN,
  }),

  getMenus: async function () {
    const query = `*[_type == "settings"]`;
    const result = await this.client.fetch(query, {
      filterResponse: true,
      cache: "force-cache",
    });
    return result;
  },

  getSettings: async function () {
    const query = `*[_type == "settings"] {
      social[] {
        "src": asset->url,    
        link    
      },
      menus[] {
        name_en,     
        name_uk,     
        _key, 
        items[] {
          name_en,     
          name_uk,
          url,
          _key        
        }
      },
      regions
    }`;
    const result = await this.client.fetch(query, {
      filterResponse: true,
      cache: "force-cache",
    });
    return result;
  },
};
