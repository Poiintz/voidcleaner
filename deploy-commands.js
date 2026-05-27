const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken('YOUR_BOT_TOKEN');

(async () => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationCommands('YOUR_CLIENT_ID'),
            { body: commands }
        );

        console.log('Commands registered.');
    } catch (error) {
        console.error(error);
    }
})();
