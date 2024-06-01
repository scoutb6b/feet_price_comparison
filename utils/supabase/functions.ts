import { supabase } from "./client";

export const getAll = async () => {
  let { data: prices, error } = await supabase
    .from('prices')
    .select('*')
            
  return prices;
  

};
