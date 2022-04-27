import express from "express";
import messages from "./routes/messages";
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/messages', messages)

app.listen(port ,()=>console.log(`Server running on port: ${port}`));

export default app;