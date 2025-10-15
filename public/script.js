
async function chargerCitation() {
  const res = await fetch('http://localhost:3000/api/quote');
  const data = await res.json();
  document.getElementById('citation').innerText = `${data[0].q} — ${data[0].a}`;
}

document.getElementById('nouvelle').addEventListener('click', chargerCitation);
window.onload = chargerCitation;
