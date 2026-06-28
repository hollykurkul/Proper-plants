import PlantItem from "./PlantItem";

export default function Plants({ plants, onAddToCart }) {
  return (
    <section className="plants-section">
      <h2>Available Plants</h2>
      <div className="plants-grid">
        {plants.map((plant) => (
          <PlantItem key={plant.id} plant={plant} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
