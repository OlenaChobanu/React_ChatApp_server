import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = process.env.PORT || 3001;
const DB_URL = `mongodb+srv://user:user@cluster0.gpuxzzg.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
// const allowedOrigins = ['http://localhost:3000'];

// const corsOptions ={
//   origin: allowedOrigins, 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
);
app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
