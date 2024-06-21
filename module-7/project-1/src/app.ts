// const express = require('express')
import express, { NextFunction, Request, Response } from "express"
const app = express()
const port = 3000
// parsers
app.use(express.json())
app.use(express.text())
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next()
}
// app.get("/:userId/:subId", (req: Request, res: Response) => {
//   console.log(req.params);
app.get("/",logger, (req: Request, res: Response) => {
  // console.log(req.query.email);
  res.send('Hello World!')
})
app.post("/", logger,(req: Request, res: Response) => {
    // console.log(req.body);
  // res.send("got data");
  res.json({
    message: "successfully received data",
  })
})
export default app;