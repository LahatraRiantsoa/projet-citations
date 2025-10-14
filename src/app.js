const citations = [
  "Le succes est la somme de petits efforts repetes jour apres jour.",
  "Apprendre sans reflechir est vain. Reflechir sans apprendre est dangereux.",
  "La simplicite est la sophistication supreme.",
  "La meilleure façon de prédire l’avenir, c’est de le creer."
];

function citationAleatoire() {
  const index = Math.floor(Math.random() * citations.length);
  return citations[index];
}

module.exports = citationAleatoire;
