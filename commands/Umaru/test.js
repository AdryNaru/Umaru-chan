const Discord = require('discord.js');
const client = new Discord.Client ();

function test(message,prefix,client){
  if (message.content.startsWith(prefix + "test")) {
                const embed = new Discord.RichEmbed()
            .setColor(0xFF8000)
            .setDescription("J'ai assez travaillé Oni-chan laisse moi jouer")
            .setImage("https://i.pinimg.com/originals/ed/70/45/ed70459e10992b043ccc53582aaf83ef.gif")
          
            message.channel.send({embed}); 
    
    }
}
    module.exports = test
