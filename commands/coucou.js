exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("Bonjour Adry-chan")
    .setImage("https://i.imgur.com/2CrEDAD.gif")
    message.deleted();
    message.channel.send({embed}).catch(console.error);
    console.log
}