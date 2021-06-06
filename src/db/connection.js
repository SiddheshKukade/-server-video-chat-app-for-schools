const mongoose = require("mongoose");
const ATLAS_URI = process.env.__MONGO_URI_PROJECT__;
// "mongodb+srv://sid123:sid123@cluster0.kzbro.mongodb.net/VIDEO-CHAT-APP-PROJECT?retryWrites=true&w=majority";

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
console.log(process.env.__MONGO_URI_PROJECT__)