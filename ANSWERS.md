- What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
  - Checking PropTypes allows developers to prevent bugs in the app by ensuring that a proper type of prop will be passed to the assigned component. If code is refactored and the wrong type of prop is passed to a component, the console will throw an error. The typechecking occurs inside the child component and compares the props that are passed from its parent component.

- Describe a life-cycle in React.
  - Components have a birth/mount phase, an update phase, and a death/unmount phase. A component mounts to the DOM after render() is called. Updating usually happens anytime state is changed, which then calls render() again. And a component unmount when it is no longer rendered on the DOM. A developer can affect what happens during these phases by utilizing the functions componentDidMount(), componentDidUpdate(), and componentWillUnmount().

- Explain the details of a Higher Order Component.
  - A Higher Order Component is a component that accepts other components as parameters and builds out functionality for those components. A HOC is not itself rendered to the screen; rather, it is a functional component that returns a component. One use case is for conditionally rendering a presentational component to the browser depending on different circumstances. 
  
- What are three different ways to style components in React? Explain some of the benefits of each.
  - Components can be styled using: vanilla or pre-processed CSS, a library like reactstrap, or Styled Components. Vanilla or pre-processed CSS allows you to keep your concerns separated into different files, and gives you ease of control in terms of customization and simple inheriting. A library allows you to get styles quickly rendered, which might be good for rapid prototyping. Styled components let you keep CSS inside the JavaScript, and the style for each component lives inside that component's file.
