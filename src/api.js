async function getCitation() {
  const res = await fetch('https://zenquotes.io/api/random');
  if (!res.ok) throw new Error('Erreur API: ' + res.status);
  const data = await res.json();
  return `${data[0].q} — ${data[0].a}`;
}
module.exports = getCitation;