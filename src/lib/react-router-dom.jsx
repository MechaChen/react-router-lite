import {
  useState,
  useEffect,
  useContext,
  createContext,
  Children,
} from "react";

const RouterContext = createContext();

export function BrowserRouter({ children }) {
  const [curPath, setCurPath] = useState(window.location.pathname);

  useEffect(() => {
    const updatePath = () => {
      setCurPath(window.location.pathname);
    };

    window.addEventListener("client-side-routing", updatePath);
    window.addEventListener("popstate", updatePath);
  }, []);

  return (
    <RouterContext value={{ curPath, isHashRouter: false }}>
      {children}
    </RouterContext>
  );
}

export function HashRouter({ children }) {
  const [curPath, setCurPath] = useState(window.location.hash.slice(1) || "/");

  useEffect(() => {
    const updatePath = () => {
      setCurPath(window.location.hash.slice(1) || "/");
    };

    window.addEventListener("hashchange", updatePath);

    return () => {
      window.removeEventListener("hashchange", updatePath);
    };
  }, []);

  return (
    <RouterContext value={{ curPath, isHashRouter: true }}>
      {children}
    </RouterContext>
  );
}

export function Routes({ children }) {
  const { curPath } = useContext(RouterContext);

  let childToRender = null;
  Children.map(children, (child) => {
    if (childToRender) return;

    const { path, component: Component } = child.props;
    if (curPath.startsWith(path)) {
      console.log({ curPath, path });
      childToRender = <Component />;
    }
  });

  return childToRender;
}

export function Route({ path, component: Component }) {
  return { path, Component };
}

export function Link({ to, children }) {
  const { isHashRouter } = useContext(RouterContext);

  const clientRouting = (e) => {
    e.preventDefault();

    if (isHashRouter) {
      // Hash routing
      window.location.hash = to;
    } else {
      // Browser routing
      window.history.pushState({}, "", to);
      const routeEvent = new PopStateEvent("client-side-routing");
      window.dispatchEvent(routeEvent);
    }
  };

  const href = isHashRouter ? `#${to}` : to;

  return (
    <a href={href} onClick={clientRouting}>
      {children}
    </a>
  );
}
