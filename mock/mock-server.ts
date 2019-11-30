import chalk from "chalk";
import cors from "cors";
import express from "express";
import http from "http";
import api from "./api";

const app = express();
const port = 7001;

const { connector, summarise } = require("swagger-routes-express");

connector(api);

app.use(cors());

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
console.log("\n");
console.log(chalk.bold.green(`>>> Mock is stared on prot ${port} !`));

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  } else {
    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        console.error(
          "Express ERROR (app) : %s requires elevated privileges",
          bind,
        );
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error("Express ERROR (app) : %s is already in use", bind);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
}
