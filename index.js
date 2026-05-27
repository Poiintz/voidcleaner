const { 
    Client, 
    GatewayIntentBits, 
    Events 
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Slash command
client.on('interactionCreate', async interaction => {

    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('pong');
    }

});

// Auto delete messages
client.on('messageCreate', async (message) => {

    // Ignore bot messages
    if (message.author.bot) return;

    // ONLY delete messages in this channel
    if (message.channel.id === '1227906421937672192') {

        console.log(`Message detected in target channel: ${message.content}`);

        setTimeout(async () => {

            try {
                await message.delete();
                console.log('Message deleted.');
            } catch (err) {
                console.log('Failed to delete message:', err);
            }

        }, 5000); // 5 seconds for testing

    }

});

client.login(process.env.TOKEN);
