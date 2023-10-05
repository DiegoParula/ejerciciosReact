import React from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import "./Products.css";
import useCart from "../hooks/useCart";

//me quede en 1:27:13
const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map(
          (
            product //slice para que solo muestre 10 articulos
          ) => {
            const isProductInCart = checkProductInCart(product);
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>
                    {product.title} - ${product.price}
                  </strong>
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: isProductInCart ? "red" : "#09f",
                    }}
                    onClick={() =>
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }
                  >
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
};

export default Products;
