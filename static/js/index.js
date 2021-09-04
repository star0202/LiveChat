var socket = io();

socket.on("connect", function(){
    var name = prompt("Welcome!", "User")
    if (!name){
        name = "User";
    };
    socket.emit("newUser", name);
});

socket.on("update", (data)=>console.log(`${data.name} : ${data.message}`));

function send(){
    var message = document.getElementById("test").value;
    if (message !=""){
        document.getElementById("test").value = "";
        socket.emit("message", {
            type: "message",
            message: message
        });
    };
};