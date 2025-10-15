async function chargerCitation() {
  const res = await fetch('https://zenquotes.io/api/random');
  const data = await res.json();
  document.getElementById('citation').innerText = `${data[0].q} — ${data[0].a}`;
}

document.getElementById('nouvelle').addEventListener('click', chargerCitation);
window.onload = chargerCitation;
