const mongoose = require("mongoose");
// XY8piF8vNDPwjAFC
mongoose
  .connect(
    "mongodb+srv://rautdivya591:E57xFHLspYSNMqQk@cluster0.o43idpa.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connection connected!");
  })
  .catch((e) => {
    console.log("connection not connected!", e);
  });
  
