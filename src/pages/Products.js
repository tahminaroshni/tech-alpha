import { useSelector } from "react-redux";
import Card from "../components/Card";

const Products = () => {
  const { items: products, status } = useSelector(state => state.products);

  return (
    <div className="products-section py-10 container mx-auto">
      <h2
        className="section-title space-font text-center mb-10 text-2xl 2xl:text-4xl font-medium">Browse New Products
      </h2>
      <div className="products md:px-10 container mx-auto grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center gap-5">
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