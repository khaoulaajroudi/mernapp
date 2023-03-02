const express = require("express");

const contactRouter = express.Router();
const contact = require("../models/contact");

// post new user
contactRouter.post("/add", async (req, res) => {
  try {
    let x = new contact(req.body);
    let result = await x.save();
    res.send({ contact: result, msg: "contact added successfully" });
  } catch (error) {
    console.log(error);
  }
});

// GET all contact
contactRouter.get("/", async (req, res) => {
  try {
    let result = await contact.find();
    res.send({ contact: result, msg: "contact list" });
  } catch (error) {
    console.log(error);
  }
});

// GET contact BY ID
contactRouter.get("/:id", async (req, res) => {
  try {
    let result = await contact.findById({ _id: req.params.id });
    res.send({ contact: result, msg: "contact recherché" });
  } catch (error) {
    console.log(error);
  }
});

// DELETE by id
contactRouter.delete("/:id", async (req, res) => {
  try {
    let result = await contact.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "contact is removed" });
  } catch (error) {
    console.log(error);
  }
});

// UPDATE CONTACT
contactRouter.put("/:id", async (req, res) => {
  try {
    let result = await contact.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: {...req.body} }
    );
    res.send({msg: "contact is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = contactRouter;
