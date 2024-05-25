import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/passmanager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error.message);
  });
const websiteSchema = new mongoose.Schema({
  url: String,
  username: String,
  password: String,
});

const Website = mongoose.model("Website", websiteSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/websites", async (req, res) => {
  try{
    const websites = await Website.find();
    res.json(websites);
  }catch(err){
    console.log(err);
  }
});

app.post("/websites", async (req, res) => {
  const website = new Website(req.body);
  await website.save();
  res.json(website);
});

app.delete("/websites/:id", async (req, res) => {
  const { id } = req.params;
  await Website.findByIdAndDelete(id);
  res.json({ message: "Website deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
