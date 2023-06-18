const { GuildChannelManager } = require('discord.js');

class TicketManager extends GuildChannelManager {
  constructor(client, iterable, guild) {
    super(client, iterable);
    this.guild = guild;
  }

  getOrCreateTicketCategory(guild, categoryId) {
    const category = guild.channels.cache.get(categoryId);
    if (category && category.type === 'GUILD_CATEGORY') return category;

    return guild.channels.create('Tickets', {
      type: 'GUILD_CATEGORY',
      position: 0,
      permissionOverwrites: [
        {
          id: guild.roles.everyone.id,
          deny: ['VIEW_CHANNEL'],
        },
      ],
    });
  }

  createTicketChannel(guild, category, author) {
    const ticketName = `ticket-${author.id}`;
    const existingChannel = guild.channels.cache.find((channel) => channel.name === ticketName);
    if (existingChannel) return null;

    return guild.channels.create(ticketName, {
      type: 'GUILD_TEXT',
      parent: category,
      permissionOverwrites: [
        {
          id: guild.roles.everyone.id,
          deny: ['VIEW_CHANNEL'],
        },
        {
          id: author.id,
          allow: ['VIEW_CHANNEL'],
        },
      ],
    });
  }
}

module.exports = TicketManager;
