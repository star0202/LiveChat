var socket = io();

socket.on("connect", function(){
    var input = document.getElementById("test");
    input.value = "Connected";
});

function send(){
    var message = document.getElementById("test").value;
    document.getElementById("test").value = '';
    socket.emit("send", {msg: message});
};
