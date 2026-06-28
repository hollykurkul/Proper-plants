import CartItem from "./CartItem";

export default function Cart({ cart, onUpdateQuantity }) {
  return (
    <section className="cart-section">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Pick out some plants!</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </div>
      )}
    </section>
  );
}
