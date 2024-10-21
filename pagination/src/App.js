import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=100`);
      const data = await res.json();
      if (data && data.products) {
        setProduct(data.products);
      } else {
        throw new Error("Failed to fetch products data");
      }
    } catch (error) {
      console.log("Error", +error.message);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= product.length / 10 &&
      selectedPage != page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {product.length > 0 && (
        <div className="product">
          {product.slice(page * 10 - 10, page * 10).map((item) => {
            return (
              <span key={item.id} className="products__single">
                <img src={item.thumbnail} alt="product img" />
                <span>{item.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {product.length > 0 && (
        <div className="Pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            {" "}
            ◀️
          </span>
          {[...Array(product.length / 10)].map((_, i) => {
            return (
              <span
                onClick={() => selectPageHandler(i + 1)}
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < product.length / 10 ? "" : "pagination__disable"}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
