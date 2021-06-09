const express = require("express");
const router = express.Router();
const Ranking = require("../models/participantSchema");

router.get("/", (req, res) => {
  res.send("heloo connection lest goo");
});
router.post("/somedataa", (req, res) => {
  console.log("somedata is ==> ", req.body);
});
router.post("/players", async (req, res) => {
  try {
    const newRecord = new Ranking(req.body);
    console.log(req.body);
    const result = await newRecord.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
});
// information of all players
router.get("/players", async (req, res) => {
  console.log("platter siddhhesh");
  try {
    const result = await Ranking.find();
    res.send(result);
  } catch (err) {
    res.status(404).send(err);
  }
});
//information of individual player
router.get("/player/:pname", async (req, res) => {
  try {
    const result = await Ranking.find({ name: req.params.pname });
    // const result = await Ranking.findBKyId({ _id: req.params.pno });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/player/:ranking", async (req, res) => {
  const result = await Ranking.updateOne(
    { ranking: req.params.ranking },
    req.body
  );
  res.send(result);
});

module.exports = router;
