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
