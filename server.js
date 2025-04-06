const aedes = require("aedes")();
const net = require("net");
const http = require("http");
const ws = require("websocket-stream");

const tcpPort = 1883;
const wsPort = 8081;

net.createServer(aedes.handle).listen(tcpPort, () => {
  console.log("🟢 MQTT broker lyssnar på TCP port", tcpPort);
});

const httpServer = http.createServer();
ws.createServer({ server: httpServer, path: "/mqtt" }, aedes.handle);
httpServer.listen(wsPort, () => {
  console.log("🟢 WebSocket MQTT lyssnar på", wsPort, "/mqtt");
});
