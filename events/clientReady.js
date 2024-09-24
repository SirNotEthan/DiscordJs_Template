const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log(`${client.user.tag} is online.`)
        client.user.setPresence({ activities: [{ name: 'Your bot status here.', type: ActivityType.Custom }], status: 'idle' });
    }
}

/** Information
 * Status Types: ['idle', 'online', 'dnd']
 * ActivityType: ['Watching', 'Listening', 'Competeing', 'Streaming', 'Playing', 'Custom']
 */