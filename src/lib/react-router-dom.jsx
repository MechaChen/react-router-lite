import { useState, useEffect } from "react";

export function Route({ path, component: Component }) {
  const [curPath, setCurPath] = useState(window.location.pathname);

  useEffect(() => {
    const updatePath = () => {
      setCurPath(window.location.pathname);
    };

    window.addEventListener("client-side-routing", updatePath);
    window.addEventListener("popstate", updatePath);
  }, []);

  return path === curPath && <Component />;
}

export function Link({ to, children }) {
  const clientRouting = (e) => {
    e.preventDefault();

    window.history.pushState({}, "", to);

    const routeEvent = new PopStateEvent("client-side-routing");
    window.dispatchEvent(routeEvent);
  };

  return (
    <a href={to} onClick={clientRouting}>
      {children}
    </a>
  );
}
