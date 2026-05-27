const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.token);

(async () => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationCommands('1509034461226995882'),
            { body: commands }
        );

        console.log('Commands registered.');
    } catch (error) {
        console.error(error);
    }
})();
