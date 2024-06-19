interface EditProps {
  params: { id: number };
}
interface Product {
  id: string;
  product_name: string;
}

interface Store {
  id: string;
  store_name: string;
}

interface Price {
  id: string;
  product_id: string;
  store_id: string;
  price: number;
  products: Product;
  stores: Store;
}
const getEdit = async (id: number) => {
  const res = await fetch(`${process.env.API_URL}/price/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.products as Price[];
};

const Editpage = async ({ params }: EditProps) => {
  const id = params.id;

  const AllProducts = await getEdit(id);

  return (
    <div>
      <div className="pt-6">
        <h1 className="font-bold text-center p-4 bg-slate-300 rounded-xl text-2xl">
          {AllProducts[0].product.product_name}
        </h1>
      </div>
      <div className="mt-8">
        <div className="flex justify-around text-lg font-semibold bg-gray-300 border-b-2 border-gray-800">
          <h4>店名</h4>
          <h4>価格</h4>
        </div>
        {AllProducts.map((item) => {
          return (
            <div
              className="flex justify-around text-lg font-semibold bg-gray-300 border-b-2 border-gray-800"
              key={item.store_id}
            >
              <h4>{item.store.store_name}</h4>
              <h4>{item.price}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Editpage;
