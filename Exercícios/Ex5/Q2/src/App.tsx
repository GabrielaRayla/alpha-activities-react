import { useEffect, useState } from "react";

interface Cart {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export const App = () => {
  const [cartProducts, setCartProducts] = useState<Cart[]>([]);

  const balance = 80;
  let totalPrice = 0;

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      if (response.ok) {
        const data = await response.json();
        setCartProducts(data);
        return data;
      }
      throw "Houve um erro";
    } catch (error) {
      console.log(error);
    }
  }

  function removeProduct(id: number) {
    const newList = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newList);
    console.log(newList);
  }

  const list = cartProducts.map((product) => {
    totalPrice += product.price;
    return (
      <li key={product.id}>
        {product.title}{" "}
        <button onClick={() => removeProduct(product.id)}>remover</button>
      </li>
    );
  });

  return (
    <>
      <h1>Meu carrinho</h1>
      {balance < totalPrice && <p>Saldo insuficiente</p>}
      <ul>{list}</ul>
    </>
  );
};
