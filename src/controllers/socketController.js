import {ioServer} from "../app.js";

/**
 * Set up all setting when socket is connected.
 * @param socket
 */
export const onConnection = (socket) => {
	let type = socket.handshake.query.type;

	if (type === "node"){
		console.log("node connected");
	}else if (type === "react"){
		console.log("react connected");
	}else{
		console.log("Wrong !!!!!!");
	}

	socket.on("default-notice", (data) => {
		console.log(data);
	});
};

/**
 * Send notice to front-end.
 * @param type Message type of content.
 * @param roomName Channel of receive target.
 * @param content Main content of message.
 */
export const noticeSend = (type, roomName, content) => {
	ioServer.to(roomName).emit(type, content);
};


export const noticeGet = (req, res) => {
	let name = req["query"]["name"];

	res.status(200)
		.json({"message": "Get Succeful"});

	ioServer.to(name).emit("notice", "HI!");
};


