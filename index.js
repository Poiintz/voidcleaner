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

    console.log('MESSAGE DETECTED');
    console.log('CHANNEL ID:', message.channel.id);

    if (message.author.bot) return;

    if (message.channel.id === '1227906421937672192') {

        console.log('CORRECT CHANNEL');

        setTimeout(async () => {

            try {
                await message.delete();
                console.log('MESSAGE DELETED');
            } catch (err) {
                console.log(err);
            }

        }, 5000);

    }

});

client.login(process.env.token);
