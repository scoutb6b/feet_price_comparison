import { supabase } from "./client";

// export const getPricestAll = async () => {
//   let { data: prices, error } = await supabase
//     .from('prices')
//     .select('*')
            
//   return prices;
// };

// export const getProductsAll = async () => {
//   let { data: products, error } = await supabase
//     .from('products')
//     .select('*')
            
//   return products;
// };

export const getProductsAndPriceAll = async () => {
  
  let { data: prices, error } = await supabase
    .from('prices')
    .select(`
      *,
      products (
        *
      )
  `)
  return prices;
};
