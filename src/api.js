async function getCitation() {
  const res = await fetch('https://zenquotes.io/api/random');
  const data = await res.json();
  return `${data[0].q} — ${data[0].a}`;
}

module.exports = getCitation;
