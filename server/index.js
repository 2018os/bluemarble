import express from "express";
// import mongoose from "mongoose";
import graphqlHTTP from "express-graphql";
import bodyParser from "body-parser";
import cors from "cors";
import schema from "./graphql/schema";

const app = express();
const port = process.env.PORT || 2000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("localhost:2000");
});

// const mongo_url = "mongodb://localhost/with2";
// //usCreateIndex, useNewUrlParser 는 오류 방지용
// mongoose.set("useCreateIndex", true);
// mongoose.set("useFindAndModify", false);
// mongoose.Promise = global.Promise;
// mongoose
//   .connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then()
//   .catch((e) => console.log(e));
