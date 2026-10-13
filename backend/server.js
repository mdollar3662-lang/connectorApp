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
 res.json([
    { id: 1, name: "Test User 1" },
    { id: 2, name: "Test User 2" }
  ]);
});
app.post('/api/register', (req,res)=>{
  const {name, job, skills, need} = req.body;
  users.push({name, job, distance: "10m", value: 95, need, skills});
  console.log('New user added:', name);
  res.json({success: true, users});
});

// SIRF EK BAAR LISTEN - Render ke liye fix
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', ()=>{
  console.log(`Backend running on port ${PORT}`);
});