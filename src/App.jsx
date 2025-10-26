import { Route, Link } from "./lib/react-router-dom";
import "./App.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  );
}

function Page1() {
  return <h1>Page1</h1>;
}

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      {` | `}
      <Link to="/page-1">Page1</Link>
      <Route path="/" component={Home} />
      <Route path="/page-1" component={Page1} />
    </>
  );
}

export default App;
