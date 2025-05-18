import { useState } from 'react'
import './App.css'

function Home() {
  return <div>Home</div>
}

function Page1() {
  return <div>Page1</div>
}

function Route({ path, component: Component }) {
  const [curPath] = useState(window.location.pathname);

  return curPath === path ? <Component /> : null;
}

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/page-1" component={Page1} />
    </>
  )
}

export default App
