import React, { Component } from "react";

// Définir une interface pour l'état
interface State {
  count: number;
}

// Le composant Counter avec des types pour les props et l'état
class Counter extends Component<{}, State> {
  // Initialisation de l'état avec un type explicite
  state: State = {
    count: 0,
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
