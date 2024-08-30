import app from "./server.js";
import dotenv from 'dotenv';



dotenv.config();
app.listen(process.env.PORT);