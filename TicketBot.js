const TicketManager = require('./TicketManager.js');

class TicketBot {
  constructor(client) {
    this.client = client;
    this.ticketManager = new TicketManager(client, null, client.guilds.cache.get('1096047469755891803'));
    this.prefix = '!'; // Defina o prefixo dos comandos
    this.ticketChannelId = '1096048846519414934';
    this.ticketCategoryId = '1096047469755891805';
    this.notificationChannelId = process.env.NOTIFICATION_CHANNEL;
  }

  setup() {
    console.log('TicketBot está pronto!');
    const notificationChannel = this.client.channels.cache.get(this.notificationChannelId);
    if (notificationChannel) {
      notificationChannel.send('O bot está online!');
    } else {
      console.log('Canal de notificação não encontrado. Certifique-se de ter configurado corretamente o arquivo .env e fornecido o ID do canal correto.');
    }
  }

  async processMessage(message) {
    if (!message.content.startsWith(this.prefix) || message.author.bot) return;

    const args = message.content.slice(this.prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'criarticket') {
      const guild = message.guild;
      const author = message.author;

      const ticketCategory = this.ticketManager.getOrCreateTicketCategory(guild, this.ticketCategoryId);
      const ticketChannel = await this.ticketManager.createTicketChannel(guild, ticketCategory, author);

      if (ticketChannel) {
        ticketChannel.send('Descreva seu problema ou solicitação. A equipe de suporte responderá em breve.');

        ticketChannel.updateOverwrite(author, {
          VIEW_CHANNEL: true
        });

        message.channel.send(`Ticket criado: ${ticketChannel}`);
      } else {
        message.channel.send('Desculpe, ocorreu um erro ao criar o ticket. Por favor, tente novamente mais tarde.');
      }
    }

    if (command === 'fecharticket') {
      const channel = message.channel;
      if (channel.name.startsWith('ticket-')) {
        const confirmation = await message.channel.send('Tem certeza de que deseja fechar este ticket? Responda `confirmar` para confirmar.');

        const filter = (m) => m.author.id === message.author.id && m.content.toLowerCase() === 'confirmar';
        const collector = message.channel.createMessageCollector(filter, { time: 15000, max: 1 });

        collector.on('collect', async (m) => {
          await channel.delete();
          message.channel.send('Ticket fechado com sucesso!');
        });

        collector.on('end', (collected, reason) => {
          if (reason === 'time') {
            confirmation.delete();
            message.channel.send('O tempo para confirmar o fechamento do ticket expirou.');
          }
        });
      } else {
        message.channel.send('Este comando só pode ser usado em canais de ticket.');
      }
    }
  }
}

module.exports = TicketBot;
