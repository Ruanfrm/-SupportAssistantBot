require('dotenv').config();
const Discord = require('discord.js');
const TicketBot = require('./TicketBot');

const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

const ticketBot = new TicketBot(client);

client.on('ready', () => {
    console.log('Bot está pronto!');
    ticketBot.setup();
});

client.on('message', (message) => {
    ticketBot.processMessage(message);
});

client.login(token);
