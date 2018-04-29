const Discord = require('discord.js');
const client = new Discord.Client ();

function test(message,prefix,client){
  if (message.content.startsWith(prefix + "test")) {
                const embed = new Discord.RichEmbed()
            .setColor(0x00ffff)
            .setDescription("J'ai assez travaillé Oni-chan laisse moi jouer")
            .setImage("https://giphy.com/gifs/christmas-meme-uNf5zeBaofZNC")
          
            message.channel.send({embed}); 
    
    }
}
    module.exports = test
