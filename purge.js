
const { SlashCommandBuilder } = require('@discordjs/builders');

const { Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('delete messages in bulk')
		.addIntegerOption(option => option.setName('amount').setDescription('Number of messages to prune')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('amount');


        if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS, false)) return;

		if (amount < 1 || amount > 99) {
			return interaction.reply({ content: 'You need to input a number between 1 and 99.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });
		});

		return await interaction.reply({ content: `Successfully pruned \`${amount}\` messages.`, ephemeral: true });
	},
};