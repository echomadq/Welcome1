const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "509357857666236430"; // ايدي السررفر
var channel = "509357857666236434";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },305);
})

Save New Duplicate & Edit Just Text Twitter

1

2

3

4

5

6

7

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("ايدي الروم");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`Welcome`), 4000)        

}

});.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("ايدي الروم");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`Welcome`), 4000)        

}

});
