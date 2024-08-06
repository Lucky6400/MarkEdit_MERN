import express from 'express';
import htmlRouter from './routes/html.route'

const app = express();
const port = 3000;

app.use(express.json());

// routes
app.use("/api", htmlRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
