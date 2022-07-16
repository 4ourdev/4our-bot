const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('permissions')
		.setDescription('List all of the bot permissions'),
	async execute(interaction) {
		var admin = interaction.guild.me.permissions.has("ADMINISTRATOR")
        var manserver = interaction.guild.me.permissions.has("MANAGE_GUILD")
        var banmem = interaction.guild.me.permissions.has("BAN_MEMBERS")
        var kickmem = interaction.guild.me.permissions.has("KICK_MEMBERS")
        const perm = new Discord.MessageEmbed()
            .setAuthor({ name: `4our Bot's Permssions`, iconURL: interaction.member.displayAvatarURL()})
            .setDescription('It\'s recommended to make sure I have all of the listed permissions below')
            .setColor('BLUE')
            .addField('Admin', `${admin}`)
            .addField('Manage Server', `${manserver}`, true)
            .addField('Ban Members', `${banmem}`, true)
            .addField('Kick Members', `${kickmem}`, true)
            await interaction.reply({ embeds: [perm] })
	},
};
