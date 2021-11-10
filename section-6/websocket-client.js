const WS = new WebSocket("ws://localhost:3232");

document.forms[0].onsubmit = () => {
  let message = document.getElementById("message");

  WS.send(message.value);
};
