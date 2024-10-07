import React from "react";

// Définir une interface pour les props
interface Props {
  name: string;
}

// Le composant fonctionnel avec le type Props
const Greeting: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
