import React, { useEffect, useState } from 'react';
import './style.css';

const LoadMoreButton = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
        console.log(products);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please Wait.</div>;
  }

  return (
    <div className='load-more-container'>
      <div className='product-container'>
        {products && products.length ? (
          products.map((item, index) => {
            return (
              <div key={index} className='product'>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            );
          })
        ) : (
          <div>No Value</div>
        )}
      </div>
      <div className='button-container'>
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton && <div>You have reached to 100 products</div>}
      </div>
    </div>
  );
};

export default LoadMoreButton;
