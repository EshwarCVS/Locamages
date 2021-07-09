Module has 

- Create React (Single Page) App
- Add Routing and Core Pagess
- Split into Core Components
- UI Components + CSS Styling

Portals in React is in the end a concept that allows us to project or render a React component in a different place than it normally would be rendered

useState() before - this allowed us to register state which then is managed inside of a component. When state is changed, the component re-renders (or to be precise: It is re-evaluated and might lead to a re-rendering of the DOM).

useEffect() does something different: It allows you to register some logic (i.e. a JS function) which will be executed when certain dependencies - which you define - change.
However, React does not track these dependencies behind the scenes. Instead, useEffect() re-evaluates the dependency values whenever the component in which you use useEffect() is re-evaluated (i.e. whenever the component's props or state changed).
If the component is re-evaluated and the dependencies did NOT change, the logic in useEffect() won't run again.
Important: The useEffect() logic re-runs AFTER the component (including its JSX code) was re-evaluated. That means, that the first execution of the useEffect() logic (when a component mounts for the first time) will ALWAYS happen AFTER the component rendered for the first time.