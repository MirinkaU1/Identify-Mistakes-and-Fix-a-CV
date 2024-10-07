
### Code 01 : Conversion de `Greeting` en TypeScript

#### Code d'origine :
```javascript
import React from 'react'; 
const Greeting = ({ name }) => { 
  return <div>Hello, {name} !</div>;
};
export default Greeting;
```

#### Étapes de conversion :
1. **Ajouter des types pour les props** : Nous allons utiliser l'interface `Props` pour définir le type du `name`.
2. **Annoter le type du composant** : Dans un composant fonctionnel, nous indiquons à TypeScript que `Greeting` reçoit des props de type `Props`.

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

### Explication :
- Nous avons créé une interface `Props` pour définir le type des props du composant.
- `Greeting` est annoté avec `React.FC<Props>` (Functional Component) pour indiquer à TypeScript que ce composant utilise les props de type `Props`.

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

#### Étapes de conversion :
1. **Ajouter des types pour l'état** : Nous devons définir l'interface pour l'état du composant, qui inclut `count`.
2. **Annoter le type de `Component`** : Nous allons indiquer à TypeScript que `Counter` est une classe qui hérite de `Component`, et ajouter des types pour les props (même si nous n'avons pas de props ici) et l'état.
3. **Définir les types des méthodes** : TypeScript va inférer les types pour la méthode `increment`, mais il est bon de l'annoter explicitement.

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

### Explication :
- Nous avons défini une interface `State` pour l'état, spécifiant que `count` est un `number`.
- Nous avons ajouté `<{}, State>` à la déclaration de la classe `Counter`, où `{}` signifie qu'il n'y a pas de props et `State` est utilisé pour le type de l'état.
- La méthode `increment` est annotée comme `(): void`, car elle ne retourne rien.
