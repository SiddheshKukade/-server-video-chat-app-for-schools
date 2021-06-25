const mongoose = require("mongoose");
const ATLAS_URI = process.env.__MONGO_URI_PROJECT__;
try {
  mongoose.connect(
    ATLAS_URI,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("connection succeful to mongo DB let's go  ")
  );
} catch (e) {
  console.log("could not connect");
}
