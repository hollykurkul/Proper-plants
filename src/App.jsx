import { useState } from "react";
import PLANTS from "./data";
import Plants from "./plants/Plants";
import Cart from "./cart/Cart";
import { useTheme } from "./ThemeContext";

export default function App() {
  const [cart, setCart] = useState([]);
  const { theme, toggleTheme } = useTheme();

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (plantId, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === plantId
            ? { ...item, quantity: item.quantity + change }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <header style={{ textAlign: "center", padding: "2rem 0" }}>
        <h1>Proper Plants</h1>
        <p>
          Welcome to Proper Plants, a thriving local nursery for your
          landscaping needs!
        </p>
        <button
          onClick={toggleTheme}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "0.8rem",
            padding: "0.4rem 0.8rem",
            backgroundColor: theme.accent,
            color: theme.background,
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Toggle Theme
        </button>
      </header>

      <main style={{ display: "flex", gap: "2rem", padding: "0 2rem" }}>
        <Plants plants={PLANTS} onAddToCart={addToCart} />
        <Cart cart={cart} onUpdateQuantity={updateQuantity} />
      </main>
    </div>
  );
}
