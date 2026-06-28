import { useTheme } from "../ThemeContext";

export default function CartItem({ item, onUpdateQuantity }) {
  const { id, name, image, quantity } = item;
  const { theme } = useTheme();

  return (
    <div
      className="cart-item-row"
      style={{ backgroundColor: theme.cardBg, color: theme.text }}
    >
      <span style={{ fontSize: "1.5rem" }}>{image}</span>
      <span>{name}</span>

      <div className="cart-item-controls">
        <button
          onClick={() => onUpdateQuantity(id, -1)}
          style={{ backgroundColor: theme.accent, color: theme.background }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => onUpdateQuantity(id, 1)}
          style={{ backgroundColor: theme.accent, color: theme.background }}
        >
          +
        </button>
      </div>
    </div>
  );
}
