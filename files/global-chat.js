module.exports = (client, message) => {
    if (message.channel.name === "fujiグロチャ") {
        if (message.author.bot) return;
        if (message.attachments.size <= 0) {
            message.delete();
        }
        client.channels.forEach(channel => {
            if (message.attachments.size <= 0) {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setDescription(message.content)
                    .setColor(0x2c2f33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp();
                if (channel.name === "fujiグロチャ") {
                    channel.send(embed);
                    return;
                }
                return;
            }
            if (
                !message.attachments.forEach(attachment => {
                    const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.tag, message.author.avatarURL)
                        .setImage(attachment.url)
                        .setDescription(attachment.url)
                        .setColor(0x2c2f33)
                        .setFooter(message.guild.name, message.guild.iconURL)
                        .setTimestamp();
                    if (channel.name === "fujiグロチャ") {
                        channel.send(embed);
                        return;
                    }
                    return;
                })
            );
            return;
        });
    }
}