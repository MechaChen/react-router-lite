import { Route, Link, BrowserRouter, Routes } from "./lib/react-router-dom";
import "./App.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  );
}

function ProductPage() {
  return (
    <div>
      <h1>Product</h1>
      <p>This is the product page</p>
    </div>
  );
}

function ProductDetailPage() {
  return (
    <div>
      <h1>Product Detail</h1>
      <p>This is the product detail page</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {` | `}
        <Link to="/product">Product</Link>
        {` | `}
        <Link to="/product/123">Product Detail</Link>
      </nav>
      <Routes>
        <Route path="/product/123" component={ProductDetailPage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
