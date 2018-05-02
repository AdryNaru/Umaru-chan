exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("Vive le Cola")
    .setImage("https://media1.tenor.com/images/3a9a7b5098d0b67e808fe78db9cb2357/tenor.gif?itemid=9219545")
    
    message.channel.send({embed}).catch(console.error);
    console.log
}