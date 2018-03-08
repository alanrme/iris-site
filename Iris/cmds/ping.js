const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let embed = new discord.RichEmbed()
            .setColor("#1e89c7")
            .addField(":ping_pong: Pong!", `${Math.floor(bot.ping)} ms`);

        message.channel.send(embed)
}

module.exports.help = {
    name: "ping",
    usage: "ping"
}