import express from 'express';
import htmlRouter from './routes/html.route'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(cors())
app.use(express.json());

// routes
app.use("/api", htmlRouter)

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
