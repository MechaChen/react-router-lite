# React Router Lite

This is a lightweight self-implemented React Router that realize the client-side navigation in order to understand how it works.

&nbsp;

## Learning points
- Route component
- Link component
- PopStateEvent

&nbsp;

## `<Route />`

- has `path` and `component` props
- render if `window.location.pathname` matches `path`
- register a function to window to listen to event with the same name passed to `PopStateEvent`
- register to `popstate` event with the same function to behave like route history

&nbsp;

## `<Link />`
- has `to` prop, decide what path to navigate to
- forbidden the `<a />` default navigation behavior to prevent page refresh
- trigger `PopStateEvent` which we can assign customized event name