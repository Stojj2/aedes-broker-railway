
const aedes = require("aedes")();
const net = require("net");
const http = require("http");
const ws = require("websocket-stream");

net.createServer(aedes.handle).listen(1883, () => {
  console.log("🟢 MQTT (Aedes) broker lyssnar på TCP port 1883");
});

const httpServer = http.createServer();
ws.createServer({ server: httpServer, path: "/mqtt" }, aedes.handle);
httpServer.listen(8081, () => {
  console.log("🟢 WebSocket MQTT lyssnar på ws://localhost:8081/mqtt");
});
