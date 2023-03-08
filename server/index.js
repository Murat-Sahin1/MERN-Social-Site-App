import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";

/* CONFIGURATIONS */
// Middlewares are functions that run between different requests.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express(); //Creating our express app to use middlewares
// Initializing our middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}));
app.use(cors());
// Sets the diretory of where we keep our assets.
// for this case we are storing our assets, which are images locally.
// in a real life scenerio we would want to store them in a real life storage. like cloud
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/* FILE STORAGE */
// This is how to save your files anytime they upload a file to your website.
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "public/assets");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});
//Anytime we upload a file, we'll use this variable.
const upload = multer({ storage })

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001; // if env.port doesnt work, use 6001
mongoose.connect(process.env.MONGO_URL, { // connecting the actual database from node server
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONLY ONE TIME */
    /* IT IS ALREADY INSERTED */
    
    User.inserMany(users);
    Post.insertMany(posts);
    
}).catch((error) => console.log(`${error} did not connect`))
