import { useEffect, useState } from 'react'
import './App.css'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  )
}

function Page1() {
  return <h1>Page1</h1>
}

function Route({ path, component: Component }) {
  const [curPath, setCurPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleClientSideNavigate = () => {
      setCurPath(window.location.pathname);
    }

    window.addEventListener('client-side-navigate', handleClientSideNavigate);
    window.addEventListener('popstate', handleClientSideNavigate);
  }, []);

  return curPath === path ? <Component /> : null;
}

function Link({ to, children }) {
  const clientSideNavigate = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', to);

    const event = new PopStateEvent('client-side-navigate');
    window.dispatchEvent(event);
  }

  return <a href={to} onClick={clientSideNavigate}>{children}</a>
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
  )
}

export default App
