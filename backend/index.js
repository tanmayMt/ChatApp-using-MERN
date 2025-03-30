import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 9002;

app.get('/', (req, res) => {
  res.send('<h1>Welcome To ChatApp Server</h1>');
})

app.listen(PORT, () => {
  console.log(`ChatApp Server is Running at http://localhost:${PORT}`);
})