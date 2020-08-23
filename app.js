var createError = require("http-errors");
var cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var router = express.Router();
var app = express();
var mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;
var FormModal = require("./Schema/schema");
var ResponseModel = require("./Schema/response");
mongoose.Promise = global.Promise;
var mongouri =
  "mongodb+srv://umid:umid@cluster0.lms2c.mongodb.net/formbuilding?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || mongouri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("conected to mongoose");
});
// MongoClient.connect(process.env.MONGODB_URI || mongouri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const fromBuilder = new mongoose.Schema({
//   type: String,

//   value: String,
//   values: Array,
//   edit: Boolean,
// });

// mongoose.model("formbuilder", fromBuilder);

// app.get("/forms", (req, res) => {
//   let allforms = form.find({});
//   try {
//     res.send(allforms);
//   } catch {
//     res.status(500).send(err);
//   }
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  //intercepts OPTIONS method
  if ("OPTIONS" === req.method) {
    //respond with 200
    res.send(200);
  } else {
    //move on
    next();
  }
});

app.options("/saveform", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.send(200);
});

app.get("/allforms", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/responses", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/saveform", (res, req) => {
  // console.log(res.body);
  let x = [];
  res.body.map((node) => {
    x.push(node);
  });
  let myform = {
    panel: x,
  };
  var data = new FormModal(myform);
  console.log(data, typeof myform.panel);
  data.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Document inserted succussfully!");
  });
});

app.post("/saveresponse", (res, req) => {
  // console.log(res.body);
  let x = [];
  res.body.map((node) => {
    x.push(node);
  });
  let myform = {
    panel: x,
  };
  var data = new ResponseModel(myform);
  console.log(data, typeof myform.panel);
  data.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Document inserted succussfully!");
  });
});

app.get("/getall", (req, res) => {
  FormModal.find({}, (err, forms) => {
    // console.log(res.json(panel));
    if (err) {
      res.send("Soory");
    } else {
      res.send(forms);
    }
  });
});

app.get("/getallresponses", (req, res) => {
  ResponseModel.find({}, (err, forms) => {
    // console.log(res.json(panel));
    if (err) {
      res.send("Soory");
    } else {
      res.send(forms);
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// view engine setup
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
