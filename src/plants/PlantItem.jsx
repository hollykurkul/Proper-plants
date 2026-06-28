import { useTheme } from "../ThemeContext";

export default function PlantItem({ plant, onAddToCart }) {
  const { name, image } = plant;
  const { theme } = useTheme();

  return (
    <div
      className="plant-card"
      style={{ backgroundColor: theme.cardBg, color: theme.text }}
    >
      <div className="plant-image" style={{ fontSize: "3rem" }}>
        {image}
      </div>
      <h3>{name}</h3>
      <button
        onClick={() => onAddToCart(plant)}
        style={{ backgroundColor: theme.accent, color: theme.background }}
      >
        Add to cart
      </button>
    </div>
  );
}
