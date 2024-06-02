"use client";

import Items from "@/app/components/Items";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useCallback, useEffect, useState } from "react";
import {
  // getPricestAll,
  // getProductsAll,
  getProductsAndPriceAll,
} from "../../utils/supabase/functions";

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
  // const [prices, setPrices] = useState<any>([]);
  // const [products, setProducts] = useState<any>([]);
  const [pricesAndProducts, setPricesAndProducts] = useState<any>([]);
  useEffect(() => {
    // const getPrices = async () => {
    //   const price = await getPricestAll();
    //   setPrices(price);
    //   console.log(price);
    // };
    // const getProducts = async () => {
    //   const products = await getProductsAll();
    //   setProducts(products);
    //   console.log(products);
    // };
    const getPricesProducts = async () => {
      const pricesProducts = await getProductsAndPriceAll();
      setPricesAndProducts(pricesProducts);
      console.log(pricesProducts);
    };
    getPricesProducts();

    // getPrices();
    // getProducts();
  }, []);
  console.log(pricesAndProducts);

  return (
    <>
      {/* 一旦sessionはtrueにしとくあとでfalseへ */}
      {"" ? (
        <p>ログインをしてください</p>
      ) : (
        <div>
          <div className="flex justify-center items-cente gap-4 pt-8"></div>
          <Items pricesAndProducts={pricesAndProducts} />
        </div>
      )}
    </>
  );
};

export default Home;
