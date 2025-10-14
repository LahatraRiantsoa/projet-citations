const citation = [
  "Le succès est la somme de petits efforts répétés jour après jour.",
  "Apprendre sans réfléchir est vain. Réfléchir sans apprendre est dangereux.",
  "La simplicité est la sophistication suprême.",
  "La meilleure façon de prédire l’avenir, c’est de le créer."
];

function citationAleatoire() {
  const index = Math.floor(Math.random() * citation.length);
  return citation[index];
}

module.exports = citationAleatoire;
