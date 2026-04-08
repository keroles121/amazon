import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setSelectedCategory } from "../Redux/appslice";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.appReducer.searchTerm);
  const selectedCategory = useSelector((state) => state.appReducer.selectedCategory);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchTerm === "" || product.title.toLowerCase().startsWith(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => dispatch(setSelectedCategory(category))}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="ss:grid ss:grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div className="flex flex-col" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  className="w-[300px] h-[200px] object-contain pb-2 hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </Link>
              <h2 className="dark:text-white limited-line line-clamp-1 text-center w-[250px] text-red-500 mx-auto pb-2">
                {product.title}
              </h2>
              <h2 className="dark:text-white hidden limited-line line-clamp-1 text-center w-[250px] text-red-500 mx-auto pb-2">
                {product.description}
              </h2>
              <p className="dark:text-gray-300 text-center pb-2 text-blue-500 font-bold">
                ${product.price.toFixed(2)}
              </p>

              <button
                onClick={() => {
                  const productToAdd = {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                    description: product.description,
                    quantity: 1,
                  };
                  dispatch(addToCart(productToAdd));
                }}
                className="dark:hover:bg-slate-400 dark:text-black dark:bg-yellow-500 bg-indigo-600 w-[200px] mx-auto text-white px-3 py-1 rounded hover:bg-indigo-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 mb-4">
            No products found{searchTerm ? ` for "${searchTerm}"` : ""}.
          </p>
          <p className="text-gray-400">Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
