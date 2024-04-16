const { Client, Message, MessageAttachment, MessageEmbed } = require("discord.js");
const fs = require('fs');

module.exports = {
  name: "verify-message",
  description: "verify-message",
  category: "message",
  syntax: "command",
  permission: "ADMINISTRATOR",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    try {
      const imagePath = './src/images/discord.png'; // Replace this with the path to your local image file
      const file = new MessageAttachment(imagePath);
      const embed = new MessageEmbed()
        .setDescription(`➡️ ... warte bis du vom Admin verifiziert wurdest <:approved:995615632961847406>\n\n➡️ bitte erfülle das CAPTCHA in deinen DM's ...\n(<:rejected:995614671128244224> Bitte stelle sicher, dass Direktnachrichten aktiviert sind! Du kannst deine Direktnachrichten wieder deaktivieren, sobald du das Captcha abgeschlossen hast.)`)
        .attachFiles(file)
        .setImage('attachment://image.png');

      await message.channel.send({ embeds: [embed] });
    } catch (error) {
      message.channel.send("Some Error Occured");
      client.logger.log(error, "error");
    }
  }
};
