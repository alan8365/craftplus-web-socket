import cors from "cors";
import io from "socket.io";
import express from "express";
// import bodyparser from "body-parser";
import onConnection from "./routers/root.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // 跨網域
// app.use(bodyparser.urlencoded({extended: true}));
// app.use(bodyparser.json());

const server = app.listen(port, "0.0.0.0", () => {
	console.log(`Node Server is running in port ${port}...`);
});

export let ioServer = io(server);

ioServer.on("connection", onConnection);
ioServer.origins((origin, callback) => {
	// if (origin !== 'http://localhost') {
	// 	return callback('origin not allowed', false);
	// }
	callback(null, true);
});
