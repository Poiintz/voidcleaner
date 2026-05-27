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

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('pong');
    }
});

client.on('messageCreate', async (message) => {

    // Ignore bots
    if (message.author.bot) return;

    // ONLY auto delete in your stream/self promo channel
    if (message.channel.id === '1227906421937672192') {

        setTimeout(() => {
            message.delete().catch(() => {});
        }, 86400000); // 24 hours

    }

});

client.login(process.env.token);

added auto delete
