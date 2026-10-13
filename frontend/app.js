const API_URL = "https://connectorapp.onrender.com"
function loadNearby(){
  fetch(`${API}/api/nearby`)
  .then(r=>r.json())
  .then(users=>{
    document.getElementById('userList').innerHTML = users.map(u=>`
      <div class="card">
        <span class="value">${u.value}% Match</span>
        <b>${u.name}</b><br>
        ${u.job} - ${u.distance}<br>
        <small>Skills: ${u.skills}</small><br>
        <small>Needs: ${u.need}</small><br><br>
        <button onclick="alert('Connect request sent to ${u.name}')">Connect 🤝</button>
        <span>${u.online ? '🟢 Online' : '⚪ Offline'}</span>
      </div>
    `).join('');
  });
}
function showRegister(){ document.getElementById('registerBox').style.display='block'; }
function register(){
  const data = {
    name: document.getElementById('name').value,
    job: document.getElementById('job').value,
    skills: document.getElementById('skills').value,
    need: document.getElementById('need').value,
  };
  fetch(`${API}/api/register`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) })
  .then(r=>r.json()).then(()=>{ alert('Added!'); loadNearby(); });
}
loadNearby();