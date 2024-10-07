
### Code 01 : Conversion de `Greeting` en TypeScript

#### Code d'origine :
```javascript
import React from 'react'; 
const Greeting = ({ name }) => { 
  return <div>Hello, {name} !</div>;
};
export default Greeting;
```

#### Code TypeScript :
```typescript
import React from 'react';

// Définir une interface pour les props
interface Props {
  name: string;
}

// Le composant fonctionnel avec le type Props
const Greeting: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

---

### Code 02 : Conversion de `Counter` en TypeScript

#### Code d'origine :
```javascript
import React, { Component } from 'react'; 
class Counter extends Component { 
  state = { count: 0 }; 
  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 
  render() { 
    return (
      <div>
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    );
  }
} 
export default Counter;
```

#### Code TypeScript :
```typescript
import React, { Component } from 'react';

// Définir une interface pour l'état
interface State {
  count: number;
}

// Le composant Counter avec des types pour les props et l'état
class Counter extends Component<{}, State> {
  // Initialisation de l'état avec un type explicite
  state: State = {
    count: 0
  };

  // La méthode increment, annotée comme void car elle ne retourne rien
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```
