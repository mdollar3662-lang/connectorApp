require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let users = [
  {name: "Rahul", job: "Developer", distance: "200m", value: 85, need: "Designer"},
  {name: "Priya", job: "Designer", distance: "500m", value: 90, need: "Developer"},
  {name: "Aman", job: "Video Editor", distance: "300m", value: 80, need: "Script Writer"}
];

app.get('/', (req,res)=>{
  res.send('Connector App Backend Running ✅');
});

app.get('/api/nearby', (req,res)=>{
  res.json(users);
});

// YE NAYA - Phone se Add karne ke liye
app.post('/api/register', (req,res)=>{
  const {name, job, skills, need} = req.body;
  users.push({name, job, distance: "10m", value: 95, need, skills});
  console.log('New user added:', name);
  res.json({success: true, users});
});

// YE CHANGE - 0.0.0.0 taaki phone se connect ho
const PORT = 3000;
app.listen(PORT, '0.0.0.0', ()=>{
  console.log(`Backend http://172.16.50.69:${PORT} pe chal raha hai`);
  console.log(`Backend http://localhost:${PORT} pe bhi chal raha hai`);
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Backend http://localhost:3000 pe chal raha hai');
});