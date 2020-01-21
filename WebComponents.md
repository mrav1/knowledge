# Web Components 
- `CustomElementsRegistry` is the controller of the customer elements, this object allows you to register a custom element on page and return information on what custom components are registered.

- Method to register `CustomElementRegistry.define()`, it accepts selector string, component class and extends object
```customElements.define('word-count', WordCount, { extends: 'p' });```
### Simple component
```
class HowtoTooltip extends HTMLElement{
  
  constructor(){
    super();
    
    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
  }
  
  connectedCallback(){
    if(!this.hasAttribute('role')){
      this.setAttribute('role', 'tooltip');
    }
    
    if(!this.hasAttribute('tabindex')){
      this.setAttribute('tabindex', -1);
    }
    this._hide();
    
    this._target = document.querySelector('[aria-describedby=' + this.id + ']');
    if (!this._target)
      return;
    
    this._target.addEventListener('focus', this._show);
    this._target.addEventListener('blur', this._hide);
    this._target.addEventListener('mouseenter', this._show);
    this._target.addEventListener('mouseleave', this._hide);
  }
  
  disconnectedCallback(){
    if (!this._target)
      return;
    
      this._target.removeEventListener('focus', this._show);
    this._target.removeEventListener('blur', this._hide);
    this._target.removeEventListener('mouseenter', this._show);
    this._target.removeEventListener('mouseleave', this._hide);
    this._target = null;
  }

  _show() {
    this.hidden = false;
  }

  _hide() {
    this.hidden = true;
  }
}

window.customElements.define('howto-tooltip', HowtoTooltip);
```

### Usage
```
<div class="text">
   <label for="name">Your name:</label>
   <input id="name" aria-describedby="tp1"/>
   <howto-tooltip id="tp1">Ideally your name is Batman</howto-tooltip>
   <br>
   <label for="cheese">Favourite type of cheese: </label>
   <input id="cheese" aria-describedby="tp2"/>
   <howto-tooltip id="tp2">Help I am trapped inside a tooltip message</howto-tooltip>
</div>
```
