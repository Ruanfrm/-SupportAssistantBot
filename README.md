# Bot de Suporte

O Bot de Suporte é um sistema automatizado projetado para fornecer assistência e gerenciar tickets de suporte em servidores do Discord. Ele permite que os usuários criem tickets, recebam suporte da equipe e fechem os tickets quando o problema for resolvido.

## Índice

1. [Visão Geral](#visão-geral)
2. [Requisitos](#requisitos)
3. [Instalação](#instalação)
4. [Configuração](#configuração)
5. [Funcionalidades](#funcionalidades)
6. [Contribuição](#contribuição)
7. [Licença](#licença)

## Visão Geral

O Bot de Suporte é um sistema de tickets automatizado que funciona dentro do Discord. Ele permite que os usuários criem tickets para solicitar assistência e recebam suporte da equipe responsável. O bot gerencia os canais de tickets, permite a interação com os usuários e fornece notificações sobre o status do bot.

## Requisitos

Antes de instalar e configurar o Bot de Suporte, você precisa ter o seguinte:

- Node.js instalado na versão 12 ou superior.
- Um bot Discord criado e o token de acesso do bot.
- Permissões suficientes para adicionar o bot a um servidor Discord.

## Instalação

Siga as etapas abaixo para instalar o Bot de Suporte:

1. Clone o repositório do projeto em seu ambiente local:

    git clone <https://github.com/Ruanfrm/-SupportAssistantBot.git>


2. Navegue até o diretório do projeto:

cd SupportAssistantBot


3. Instale as dependências do projeto usando o npm:

npm install


## Configuração

Antes de executar o Bot de Suporte, você precisa configurar algumas variáveis de ambiente. Siga as etapas abaixo:

1. Renomeie o arquivo `.env.example` para `.env`.

2. Abra o arquivo `.env` em um editor de texto e atualize as seguintes variáveis:

- `DISCORD_TOKEN`: Insira o token de acesso do seu bot Discord.
- `NOTIFICATION_CHANNEL`: Insira o ID do canal onde as notificações do bot serão enviadas.

Certifique-se de salvar as alterações no arquivo `.env` após a atualização.

## Funcionalidades

O Bot de Suporte oferece as seguintes funcionalidades:

### Criação de Ticket

Os usuários podem usar o comando `!criarticket` para criar um novo ticket. O bot irá criar um canal de ticket dedicado ao usuário, onde eles podem descrever seu problema ou solicitação.

### Fechamento de Ticket

Os usuários podem usar o comando `!fecharticket` para fechar um ticket que já foi resolvido. O bot solicitará a confirmação do usuário antes de fechar o ticket.

### Notificações

O Bot de Suporte envia notificações para o canal de notificação configurado quando o bot está online e disponível para uso.

## Contribuição

As contribuições são bem-vindas! Se você tiver alguma melhoria, correção de bug ou nova funcionalidade para adicionar, sinta-se à vontade para enviar uma solicitação de pull.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

