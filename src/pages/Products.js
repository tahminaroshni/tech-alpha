import { useSelector } from "react-redux";
import Card from "../components/Card";

const Products = () => {
  const { items: products, status } = useSelector(state => state.products);

  return (
    <div className="products-section py-10 container mx-auto">
      <h2 className="section-title space-font text-center mb-10 text-2xl font-medium">Browse New Products</h2>
      <div className="products  container mx-auto grid grid-cols-3 justify-center gap-5">
        {
          status && <p className="col-span-full text-center">{status}</p>
        }
        {
          products.map(product => <Card product={product} key={product.id} />)
        }
      </div>
    </div>
  );
};

export default Products;