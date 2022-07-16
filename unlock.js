
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unlock')
		.setDescription('Unlock a channel'),
	async execute(interaction) {
        if (interaction.guild.me.permissions.has("MANAGE_CHANNELS")) {

            if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS, false)) return;

            const channel = interaction.channel
            channel.permissionOverwrites.create(interaction.channel.guild.roles.everyone, {
                SEND_MESSAGES: true,

            });

            let lock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription('`\🔓\`**Channel has been unlocked**')
                await interaction.reply({ embeds: [lock] })
        } else {
            let errorlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription('`\🚫\`**Please make sure I have `MANAGE_CHANNELS` permissions **')
                await interaction.reply({ embeds: [errorlock] })

        }
	},
};