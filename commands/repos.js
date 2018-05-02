
exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0xFF8000)
    .setDescription("J'ai assez travaillé Oni-chan laisse moi jouer")
    .setImage("https://i.pinimg.com/originals/ed/70/45/ed70459e10992b043ccc53582aaf83ef.gif")
    
    message.channel.send({embed}).catch(console.error);
    console.log
}