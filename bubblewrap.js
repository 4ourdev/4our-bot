const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bubblewrap')
		.setDescription('Click on the black boxes, just like poping bubblewrap great stress relievers btw'),
	async execute(interaction) {
		const bubble = new Discord.MessageEmbed()
            .setAuthor({ name: `Pop`, iconURL: interaction.member.displayAvatarURL() })
            .setColor('BLUE')
            .setDescription('||pop|| || pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| \n ||pop|| || pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| \n ||pop|| || pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| \n ||pop|| || pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| \n ||pop|| || pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| \n ||pop|| || pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| \n ||pop|| || pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| \n ||pop|| || pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| \n ||pop|| || pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| ||pop|| \n')
			.setFooter('! This message will be deleted after 60s')
        const replyMessage = await interaction.reply({ embeds: [bubble] })
        setTimeout(() => interaction.deleteReply(), 60000);
	},
};
