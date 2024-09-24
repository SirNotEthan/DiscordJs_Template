const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('Template')
    .setDescription('Template'),
    //Add Subcommands and Options Here
    async execute(interaction) {
        console.log('Template')
        // Command Logic Here
    }
};