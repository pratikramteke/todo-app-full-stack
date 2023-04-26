import express from "express"
import mongoose from "mongoose"
import User from "./model/schema.js"
// const mongoose = require('mongoose')
// const express = require('express')
// const User = require('./model/schema.js')

const app = express()
mongoose
  .connect("mongodb://0.0.0.0:27017/todo")
  .then(() => console.log("connected"))
  .catch((e) => console.log(e))

app.get("/", (req, res) => res.send("welcome"))

run()

async function run() {
  try {
    const user = await User.create({ name: "pratik" })
    console.log(user)
  }
  catch (e) {
    console.log(e);
  }
}

app.listen(3000)
