// const express = require('express')
import express, { NextFunction, Request, Response } from "express"
const app = express()
const port = 3000
// parsers
app.use(express.json())
app.use(express.text())

// router
const userRouter = express.Router()
const courseRouter = express.Router()

app.use("/api/v1/users", userRouter)
app.use("/api/v1/ ", courseRouter)

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  // console.log(user);
  res.json({
    success: true,
    message: "User is created successfully",
    data:user
  })
})

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  // console.log(course);
  res.json({
    success: true,
    message: "Course is created successfully",
    Data:course
  })
})


// middlewares
const logger = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.url, req.method, req.hostname);
  next()
}
// app.get("/:userId/:subId", (req: Request, res: Response) => {
//   console.log(req.params);


app.get("/",logger, async(req: Request, res: Response , next:NextFunction) => {
  // console.log(req.query.email);
  try {
    res.send(some)
  } catch (error) {
    // console.log(error);
    next(error)
    // res.status(400).json({
    //   success: false,
    //   message: "failed to get data",
    // })
  }
})
app.post("/", logger,(req: Request, res: Response) => {
    // console.log(req.body);
  // res.send("got data");
  res.json({
    // message: "successfully received data",
  })
})

// wrong route
app.all("*", (req:Request, res:Response) => {
  res.status(400).json({
    success: false,
    message:"Route is not found"

  })
})


// global error handler
app.use((error:any, req:Request, res:Response, next:NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong"
    })
    
  }
})
export default app;