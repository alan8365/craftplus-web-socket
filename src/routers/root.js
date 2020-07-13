import express from "express";
import example from "./exampleRouter.js";
import reactConnection from "./reactRouter.js";
import nodeConnection from "./nodeRouter.js";


/**
 * Set up all setting when socket is connected.
 * @param socket
 */
export const onConnection = (socket) => {
	let type = socket.handshake.query.type;

	if (type === "node"){
		nodeConnection(socket);
	}else if (type === "react"){
		reactConnection(socket);
	}else{
		console.log("Wrong !!!!!!");
	}

	socket.on("default-notice", (data) => {
		console.log(data);
	});
};

export default onConnection;
