/* Desenvolva sua lógica aqui ... */

import { products, categories } from "./productsData.js";
import { theme } from "./theme.js";
import { renderAlbums, renderByGender } from "./render.js";
import { filterByGender, filterByRange } from "./filter.js";




renderByGender(categories)
renderAlbums(products)
filterByGender(products)
filterByRange(products, categories)
theme()