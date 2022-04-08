const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(
    express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

const mongoose = require("mongoose");
const port = 5000; // if you change this, you need to change the frontend code, plus the NGINX config. Dont' change unless needed!

// Fix this later, not a priority rn
// const userName = process.env.MONGOUSER;
// const password = process.env.MONGOPASSWORD;
// const hostname = process.env.MONGOHOSTNAME;


const url = `mongodb+srv://${userName}:${password}@${hostname}/${dbName}`;

// connect to the database
mongoose.connect(url, {
  useNewUrlParser: true,
});

// Configure multer so that it will upload to '../front_end/public/images'
const multer = require("multer");
// const { timeStamp } = require("console");
const upload = multer({
  dest: path.join(path.dirname(__filename), "../front_end/public/images/"),
  limits: {
    fileSize: 1000000000,
  },
});

const photoSchema = new mongoose.Schema({
  timestamp: String,
  path: String,
  user: String,
  camera: String,
});

const Photo = mongoose.model("Photo", photoSchema);

const testSchema = new mongoose.Schema({
  testStr: String,
});

const Test = mongoose.model("Test", testSchema);

const deviceSchema = new mongoose.Schema({
  deviceName: String,
  description: String,
  user: String,
});

const Device = mongoose.model("Device", deviceSchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post("/api/test", async (req, res) => {
  const testItem = new Test({
    testStr: req.body.test,
  });
  try {
    await testItem.save();
    res.send(testItem);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Upload a photo. Uses the multer middleware for the upload and then returns
// the item, with the path the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {

    // Just a safety check that the file uploaded
    if (!req.file) {
      return res.sendStatus(400);
    }

    let timestamp = req.body.timestamp;
    if (!timestamp) {
        const d = new Date();
        timestamp=d.getTime();
    }
    // Note - need to enforce that all these things exist
    const photoItem = new Photo({
        timestamp:timestamp,
        path: "/images/" + req.file.filename,
        user: req.body.user,
        camera: req.body.cameraname,
    })
    try {
        await photoItem.save();
        res.send(photoItem);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
  });

app.get('/api/photos', async (req, res) => {
  try {
    let photos = await Photo.find().where('user').equals(req.query.user);
    res.send(photos);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/devices', async (req, res) => {
  // Note - need to enforce that all these things exist
  const deviceItem = new Device({
      deviceName: req.body.deviceName,
      description: req.body.description,
      user: req.body.user,
  })
  try {
      await deviceItem.save();
      res.send(deviceItem);
  } catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
});

app.get('/api/devices', async (req, res) => {
  try {
    let devices = await Device.find().where('user').equals(req.query.user);
    res.send(devices);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// // Create a new item in the museum: takes a title and a path to an image.
// app.post('/api/items', async (req, res) => {
//   const item = new Item({
//     title: req.body.title,
//     description: req.body.description,
//     path: req.body.path,
//   });
//   try {
//     await item.save();
//     res.send(item);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// app.delete('/api/photos/:id/', async (req, res) => {
//   try {
//     id = req.params['id'];
//     let item = await Photo.findOne({_id:id});
//     fs.unlinkSync(`../front-end/public${item.path}`);
//     await Photo.deleteOne({_id:id});
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// // Get a list of all of the items in the museum.
// app.put('/api/items/:id/', async (req, res) => {
//   try {
//     id = req.params['id'];
//     let item = await Item.findOne({_id:id});
//     item.title = req.body.title;
//     item.save();
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

app.use(
  express.static(path.join(path.dirname(__filename), "../front-end/dist"))
);

// Get the API version. Also a test endpoint
app.get("/api/version", (req, res) => {
  fs.readFile(
    path.join(path.dirname(__filename), "version.txt"),
    (err, data) => {
      const version = err ? "unknown" : String.fromCharCode(...data);
      res.send({ version: version });
    }
  );
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
