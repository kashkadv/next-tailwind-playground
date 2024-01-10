import { getLanguageKey } from "@/translations/headers";
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
      regions,
      footer
    }`;
    const result = await this.client.fetch(query, {
      filterResponse: true,
      cache: "force-cache",
      next: { revalidate: 1 },
    });
    return result;
  },

  getCategoryActiveProducts: async function (category) {
    const _key = getLanguageKey();

    const query = `*[_type == "product" && category._ref == $category && published == true] | order(articul desc){
    "title": title[_key == $_key][0].value,
    slug,
    image,
    base_price,
    sizes,
    stock,
    category->{
      "title": title[_key == $_key][0].value,
      "slug": slug.current,        
      "productTitle": product_title[_key == $_key][0].value        
    }
  }`;
    const params = { category, _key };

    const result = await this.client.fetch(query, params, {
      filterResponse: true,
      next: { revalidate: 1 },
    });
    return result;
  },

  getCategoryBySlug: async function (slug) {
    const _key = getLanguageKey();

    const query = `*[_type == "category" && slug.current == $slug && published] {
    _id,
    "seo": seo[_key==$_key][0].value,
    "title": title[_key == $_key][0].value,
    "productTitle": product_title[_key == $_key][0].value,
    "description": description[_key == $_key][0].value,
    "slug": slug.current,
    "posterIsSet": poster.asset,
    "backgroundIsSet": background.asset,
    "poster": {
      "src": poster.asset->url,
      "alt": poster.caption,
      "width": poster.asset->metadata.dimensions.width,
      "height": poster.asset->metadata.dimensions.height,
      "blurDataURL": poster.asset->metadata.lqip
    },
    "background": {
      "src": background.asset->url,
      "alt": background.caption,
      "width": background.asset->metadata.dimensions.width,
      "height": background.asset->metadata.dimensions.height,
      "blurDataURL": background.asset->metadata.lqip
    }
  }`;
    const params = { slug, _key };

    const result = await this.client.fetch(query, params, {
      filterResponse: true,
      next: { revalidate: 1 },
    });
    return result;
  },
  getCategoryActiveProducts: async function (category) {
    const _key = getLanguageKey();

    const query = `*[_type == "product" && category._ref == $category && published == true] | order(articul desc){
      "title": title[_key == $_key][0].value,
      slug,
      image,
      base_price,
      sizes,
      stock,
      category->{
        "title": title[_key == $_key][0].value,
        "slug": slug.current,        
        "productTitle": product_title[_key == $_key][0].value        
      }
    }`;
    const params = { category, _key };

    const result = await this.client.fetch(query, params, {
      filterResponse: true,
      next: { revalidate: 60 },
    });

    return result;
  },
  getProductBySlug: async function (slug) {
    const _key = getLanguageKey();

    const query = `*[_type == "product" && slug == $slug] {
      "title": title[_key == $_key][0].value,
      _id,
      image,
      gallery,
      articul,
      base_price,
      sizes,
      category->{
        "title": title[_key == $_key][0].value,
        "slug": slug.current,        
        "productTitle": product_title[_key == $_key][0].value        
      }
    }`;
    const params = { slug, _key };
    const result = await this.client.fetch(query, params, {
      filterResponse: true,
      next: { revalidate: 1800 },
    });
    return result;
  },
};
