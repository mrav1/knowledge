## Hello world
```
ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('root')
);
```
## JSX - Syntax extension to JavaScript
```
const element = <h1>Hello world!</h1>;
```
## Expressions inside JSX
```
const name = 'Ravi M'; 
const element = ( // Wrap in brackets when multi-line
     <h1>
       Hello, {name}
     <h1>
);
```
#### Warning:
Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
For example, class becomes className in JSX, and tabindex becomes tabIndex.

## Function and Class Components
Simplest way to create a component is Javascript function
```
function Welcome(props){
  return <h1>Welcome, {props.name}</h1>
}
```
Class syntax
```
class Welcome extends React.Component {
    render(){
      return <h1>Welcome, {this.props.name}</h1>;
    }
}
```
#### Always start component names with a capital letter.
React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires Welcome to be in scope

#### All React components must act like pure functions with respect to their props.
Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

## Adding Local State to a Class
```
class Clock extends React.Component {

   constructor(props){
      super(props)
      this.state = {date: new Date()};
   }
   
   render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
}
```
## Lifecycle Method
```
componentDidMount(){}
componentWillUnmount(){}
```
## Using State Correctly
1. Do Not Modify State Directly, like: `Do Not Modify State Directly`, Instead, use `setState():` ie., `this.setState({comment: 'Hello'});`
2. State Updates May Be Asynchronous
```
this.setState((state, props) => ({ // it has previous state and current props as arguments
  counter: state.counter + props.increment
}));
```
3. State Updates are Merged
The merging is shallow, so `this.setState({comments})` leaves `this.state.posts` intact, but completely replaces `this.state.comments`.

## Handling Events
Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:
- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.
```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
## Stateful LoginControl example
