import ProductItem from "./ProductItem";
import PulseLoader from "react-spinners/PulseLoader";
import { useSelector } from "react-redux";

function ProductGallery() {
  const { productsData, loading } = useSelector((state) => state.Products);

  console.log("productsData is", productsData);

  if (loading) {
    return (
      <div className="loading">
        <PulseLoader loading={loading} size={10} color={"#828aef"} />
      </div>
    );
  }

  return (
    <div className="productGallery">
      {productsData?.map((product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </div>
  );
}

export default ProductGallery;
