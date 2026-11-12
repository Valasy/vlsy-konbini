import ProductCard from "./components/ProductCard";

function App() {
  return (
    <main>
      <h1>VLSY Konbini</h1>
      <p>Compara precios y compra de forma inteligente.</p>

      <ProductCard title="Producto A" />
      <ProductCard title="Producto B" />
    </main>
  );
}

export default App;