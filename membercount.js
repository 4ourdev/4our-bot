
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('membercount')
		.setDescription('Gives you the member count plus bot count of the server'),
	async execute(interaction) {
        const memberCount = interaction.guild.members.cache.filter(member => !member.user.bot).size;
        const totalCount = interaction.guild.memberCount
        const botCount = interaction.guild.members.cache.filter(member => member.user.bot).size;
  
        const embed = new Discord.MessageEmbed()
          .setAuthor({ name: `Member Count for ${interaction.guild}`, iconURL:`${interaction.guild.iconURL()}` })
          .setColor("BLUE")
        .addField('Total', `${totalCount}`)
        .addField('Members', `${memberCount}`)
        .addField('Bots', `${botCount}`)
  
        await interaction.reply({embeds: [embed]})
  
	},
};