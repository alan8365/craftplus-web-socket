import express from "express";
import io from "socket.io-client";

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
	let socket = io("ws://localhost:3000/", {
		query:{
			name: "bubu",
			type: "node"
		}
	});

	res.status(200)
		.json({
			"message": "Socket.io connect Successful"
		});
});

const server = app.listen(port, "0.0.0.0", () => {
	console.log(`Node Server is running in port ${port}...`);
});
