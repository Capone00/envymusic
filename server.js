const { Discord, Client, RichEmbed, Attachment } = require("discord.js");
const client = new Client({disableEveryone: true});

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('', { type: "Watching" })

});

client.on('guildMemberAdd', member => {
  try {
    let embed = new RichEmbed()
   .setTitle("**Welcome To Cuttas**")
   .addField("**Member Count:**", member.guild.memberCount)
   .addField("**Name:**", member.user)
   .addField("**User ID:**", member.id)
   .setFooter(member.guild.name)
   .setTimestamp(member.guild.createdAt)
   .setThumbnail(member.user.avatarURL)
   .setImage("https://media.discordapp.net/attachments/627471731707346974/682710208052854851/image0.gif")
   .setColor("#000000");
   
    
  member.guild.channels.get('661051866527957002').send(embed); 
  } catch (err) {
    console.log(err)
  }
});

client.on("guildMemberRemove", member => {
  try {
  let embed = new RichEmbed()
   .setTitle("Thanks for staying with Arbaaz Gaming")
   .addField("Name:", member.user)
   .addField("User ID:", member.id)
   .addField("Member Count:", member.guild.memberCount)
   .setFooter(member.guild.name)
   .setTimestamp(member.guild.createdAt)
   .setColor("#ff0000");

  member.guild.channels.get('630783050476814356').send(embed); 
  } catch (err) {
    console.log(err)
  }
});

client.on("message", async message => {
    
    let prefix = "&";

const args = message.content.slice(prefix.length).trim().split(/\s+/g);

const command = args.shift().toLowerCase();
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    

if(command === 'ping') {

message.channel.send(`Hoold on!`).then(m => {

    m.edit(`🏓  ::  **Pong!** (Roundtrip took: **` + (m.createdTimestamp - message.createdTimestamp) + `ms.** Heartbeat: **` + Math.round(client.ping) + `ms.**)`);

    });

 }

});

client.login("NjU2OTI3NDIxMzYyMjA4NzY4.Xla2Aw.V24GRyyW0D-35XZMyDIIB54_iFY");
