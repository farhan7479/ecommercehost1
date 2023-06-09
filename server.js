import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
//import {fileURLToPath} from 'url';
import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

//const __filename=fileURLToPath(import.meta.url);
//const __dirname=path.dirname(__filename);

//rest object
const app = express();

//middelwares
const corsOption= { 
    origin:"https://64a80c65f4cdb31181a9c9aa--creative-biscochitos-f5e423.netlify.app",
    optionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());
app.use(morgan("dev"));
//app.use(express.static(path.join(__dirname,"./frontend/build")));


import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";
import path from "path";

//routes

/*app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,"./frontend/build/index.html"));
});*/
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
