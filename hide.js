
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hide')
		.setDescription('hides a channel from @everyone'),
	async execute(interaction) {
        if (interaction.guild.me.permissions.has("MANAGE_CHANNELS")) {

            if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS, false)) return;

            const channel = interaction.channel
            channel.permissionOverwrites.create(interaction.channel.guild.roles.everyone, {
                VIEW_CHANNEL: false,

            });

            let lock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription('`\🔓\`**Channel has been hidden**')
                await interaction.reply({ embeds: [lock] })
        } else {
            let errorlock = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription('`\🚫\`**Please make sure I have `MANAGE_CHANNELS` permissions **')
                await interaction.reply({ embeds: [errorlock] })

        }
	},
};