export const sendMessage = () => {
    window.myAPI.sendMessage('send message Hello -> App.js');
};

export const receiveMessage = () => {
    window.myAPI.receiveMessage((arg) => {
        console.log(arg); // prints "Hello from main.js"
    });
};