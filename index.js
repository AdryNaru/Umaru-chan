const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const token = process.env.TOKEN

client.on("ready", () => {

	var memberCount = client.users.size;
	var serverCount = client.guilds.size;
		client.user.setGame("la console avec Kirie");
		client.user.setStatus("idle");
	console.log("Prete au travaille maître");
	console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    console.log
    files.forEach(file => {
        console.log
        let eventFunction = require(`./commands/${file}`);
        console.log
        let eventName = file.split(".")[0];
        console.log
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
        console.log
    });
});

client.on("message", (message) => {
    console.log
    if (message.author.bot) return;
    console.log
    if (message.content.indexOf(config.prefix) !==0) return;
    console.log
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try { 
        console.log
        let commandFile = require(`./commands/${command}.js`);
        console.log
        commandFile.run(client, message, args);
        console.log

        } catch (err) {
            message.delete();
            message.channel.send("Je ne connait pas cette commande Oni-chan")
            console.error(err);
            console.log
        }
    });



client.login(token);