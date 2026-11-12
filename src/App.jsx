import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1 className="product-card__title" >VLSY Konbini</h1>
        <p>Compara precios y compra de forma inteligente.</p>
      </header>
      <section className="product-grid">
        <ProductCard title="Producto A" />
        <ProductCard title="Producto B" />
      </section>
    </main>
  );
}

export default App;