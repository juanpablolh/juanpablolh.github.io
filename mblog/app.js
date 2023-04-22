const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

const pool = mysql.createPool({
  host: '[34.122.250.87]',
  user: '[juanpablo]',
  password: '[berlin2023]',
  database: '[posts]',
  connectionLimit: 10,
});

app.use(express.json());

app.get('/api/posts', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM posts');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.post('/api/posts', async (req, res) => {
  const postText = req.body.text;
  const postTimestamp = new Date().toISOString();
  const postId = Math.floor(Math.random() * 100000);

  try {
    const insertQuery = `
      INSERT INTO posts (post_id, username, timestamp, content)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.query(insertQuery, [
      postId,
      'Juan Pablo',
      postTimestamp,
      postText,
    ]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
