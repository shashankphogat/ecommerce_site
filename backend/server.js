require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyparser = require("body-parser");
const crypto = require("crypto");
const PayU = require("payu-websdk");
const path = require("path");

const app = express();
const _dirname = path.resolve();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/getPayment", (req, res) => {
  let amount = req.body.totalCost;
  let productsName = req.body.productsName;
  let productsDescription = req.body.productsDescription;
  try {
    let payu_key = process.env.PAYU_KEY;
    let payu_salt = process.env.PAYU_SALT;
    let payuClient = new PayU(
      {
        key: payu_key,
        salt: payu_salt,
      },
      process.env.PAYU_ENVIRONMENT,
    );
    const txn_id = "PAYU_MONEY_" + Math.floor(Math.random() * 8888888);
    let udf1 = "";
    let udf2 = "";
    let udf3 = "";
    let udf4 = "";
    let udf5 = "";
    const hashString = `${payu_key}|${txn_id}|${amount}|${JSON.stringify({
      name: "T-shirt",
      description: "size-medium",
    })}|${"shashank"}|${"shank26101996@gmail.com"}|||||${udf1}|${udf2}|${udf3}|${udf4}|${udf5}|${payu_salt}`;
    const hash = crypto.createHash("sha512").update(hashString).digest("hex");
    const data = payuClient.paymentInitiate({
      isAmountFilledByCustomer: false,
      txnid: txn_id,
      amount: amount,
      currency: "INR",
      productinfo: JSON.stringify({
        name: JSON.stringify(productsName),
        description: productsDescription,
      }),
      firstname: "shashank",
      email: "shashank26@gmail.com",
      phone: "9123456789",
      surl: "/success",
      furl: "/failed",
      hash: hash,
    });
    res.send(data);
  } catch (error) {
    res.status(400).send({
      msg: error.message,
      stack: error.stack,
    });
  }
});

app.get("/success", (req, res) => {
  res.redirect("/success");
});

app.get("/failed", (req, res) => {
  res.redirect("/failure");
});

app.post("/email", (req, res) => {
  const mes = req.body.message;
  const name = req.body.nameOfPerson;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shashankphogat26@gmail.com",
      pass: process.env.PASSWORD,
    },
  });
  var mailOptions = {
    to: "shashankphogat26@gmail.com",
    subject: "New query",
    text: "New message from " + name + "(" + req.body.email + ")" + "\n" + mes,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/contact");
    }
  });
});

app.use(express.static(path.join(_dirname, "/frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});

app.listen(5000, () => console.log("ok"));
