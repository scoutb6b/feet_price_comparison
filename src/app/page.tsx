"use client";

import Items from "@/app/components/Items";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useCallback, useEffect, useState } from "react";
import { getAll } from "../../utils/supabase/functions";

interface Product {
  id: string;
  product_name: string;
  user_id: string;
}

interface Store {
  id: string;
  store_name: string;
}

interface Price {
  id: string;
  price: number;
  product_id: string;
  store_id: string;
  products: Product;
  stores: Store;
}
const Home = () => {
  const [prices, setPrices] = useState<any>([]);
  useEffect(() => {
    const getPrices = async () => {
      const price = await getAll();
      setPrices(price);
      console.log(price);
    };
    getPrices();
  }, []);

  return (
    <>
      {/* 一旦sessionはtrueにしとくあとでfalseへ */}
      {"" ? (
        <p>ログインをしてください</p>
      ) : (
        <div>
          <div className="flex justify-center items-cente gap-4 pt-8"></div>
          <Items />
        </div>
      )}
    </>
  );
};

export default Home;
