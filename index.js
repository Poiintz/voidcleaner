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

client.on('messageCreate', async (message) => {

    // Ignore bots
    if (message.author.bot) return;

    // Auto delete every message after 5 seconds
    setTimeout(() => {
        message.delete().catch(() => {});
    }, 5000);

});

client.login(process.env.token);
