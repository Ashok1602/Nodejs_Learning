const http = require("http");

// const app = require("./mongoDB/app"); //for mongo db
const app = require("./mysqlDB/app"); //for sql db

const port = process.env.PORT || 8888;

const server = http.createServer(app);

server.listen(port, () => {
    console.log("Running succesfully port no :" + " " + port)
});
