
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
	async execute(interaction) {
        var serverIcon = interaction.guild.iconURL();

        let owner = await interaction.guild.fetchOwner()

        let creation = interaction.guild.createdAt.toDateString()

        let boostcount = interaction.guild.premiumSubscriptionCount;

        let botCount = interaction.guild.members.cache.filter(member => member.user.bot).size;

        let memberCount = interaction.guild.members.cache.filter(member => !member.user.bot).size;



        const infoembed = new Discord.MessageEmbed()
            .setAuthor({ name: `Stats for ${interaction.guild.name}`, iconURL: interaction.member.displayAvatarURL() })
            .setColor("BLUE")
            .setThumbnail(`${serverIcon}`)
            .addField('`\👤\` Member Count', `${memberCount}`, true)
            .addField('`\🤖\` Bot Count', `${botCount}`, true)
            .addField('\`👑\` Guild Owner', `${owner}`, true)
            .addField('`\📅\` Guild Creation', `${creation}`, true)
            .addField('`\📟\` Guild ID', `${interaction.guild.id}`, true)
            .addField('`\🔷\` Server Boost', `${boostcount}`, true)



        await interaction.reply({ embeds: [infoembed] });
	},
};