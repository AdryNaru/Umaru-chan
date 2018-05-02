
exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setTitle("**INVITE**")
    .setAuthor("Umaru-chan", "http://st.cdjapan.co.jp/pictures/l/13/10/THCS-60061.jpg")
    .setColor(0xFF8000)
    .setDescription("Oni-chan clique sur invite pour pouvoir m'invité sur ton serveur")
    .setThumbnail("http://thehypedgeek.com/wp-content/uploads/2015/03/UmaruChan.jpg")
    .setTimestamp()
    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=424196836128063488&permissions=8&scope=bot")
  
    message.channel.send({embed}).catch(console.error);
    console.log
}