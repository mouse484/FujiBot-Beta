require('http').createServer((request, response)=>{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('botは現在起動しています。 \n');
}).listen(3000);

const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect:true});
const Canvas = require('canvas');

const snekfetch = require('snekfetch');
const fs = require("fs");

//json達
const config = require("./config.json");
const serverdata = require("./serverdata.json");

//ログインしたらコンソールに出るのと〇〇を配信中のやつ
client.on('ready', () => {
  console.log(`${client.user.tag}(${client.user.id})でログインしました。`);
  console.log("Servers(" + client.guilds.size + "):")
  console.log("   Server Name | Server ID | ServerOwner | MemberCount")
  client.guilds.forEach((guild) => {
  console.log(" - " + guild.name + " | " + guild.id + " | " + guild.owner.user.tag + " | " + guild.memberCount + "人")

 });
});

//コマンド
client.on("message", async message => {

  client.user.setActivity(`f!help | ${client.guilds.size} servers`); {
    type: 'STREAMING'
  }

      if (message.channel.name === 'fujiグロチャ')
    {
        if (message.author.bot) return;
        if (message.attachments.size <= 0)
        {
            message.delete()
        }
        client.channels.forEach(channel =>
        {
            if (message.attachments.size <= 0)
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setDescription(message.content)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'fujiグロチャ')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }
            if (!message.attachments.forEach(attachment =>
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setImage(attachment.url)
                    .setDescription(attachment.url)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'fujiグロチャ')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }));
            return;
        });
    }

  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const user = message.mentions.users.first();

      if(command === 'help') {
      message.reply('DMにHELPを送信しました。')
      message.author.send({embed: {
      color: 2552551,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "FujiBotのhelp(helpに載ってある全てのコマンドは<f!>で使用出来ます。)",


      fields: [{
          name: "help",
          value: "このコマンド"
        },
        {
          name: "ping",
          value: "反応時間を測る"
        },
        {
          name: "eval",
          value: "bot開発者のみ実行可能"
        },
        {
          name: "役職",
          value: "サーバー内の役職を表示"
        },
        {
          name: "ユーザー",
          value: "ユーザーの情報を表示"
        },
        {
          name: "サーバー",
          value: "サーバーの情報を表示"
        },
        {
          name: "サイコロ",
          value: "1〜150をランダムで表示"
        },
        {
          name: "avatar",
          value: "あなたのアイコンを表示"
        },
        {
          name: "purge",
          value: "bot開発者のみ実行可能"
        },
        {
		  name: "グローバルチャット",
		  value: "このbotっが入っていて、〈fujiグロチャ〉というチャンネルを作れば(他のこのbotが入ってる鯖の)みんなと繋がれます!"
	    },
        {
		  name: "botinfo",
		  value: "botの情報が載せられます。(開発中)"
	    },
        {
		  name: "時間",
		  value: "時間を表示する"
	    },
        {
		  name: "say",
		  value: "特に意味ないけどこだま返しみたいなやつ"
	    },
      {
		  name: "入室・退室ログ",
		  value: "[member-log]というチャンネルを作れば、退室ログ、入室ログが表示されるようになります。"
	    },
      {
		  name: "再起動",
		  value: "bot開発者のみ実行可能"
	    },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: message.author.avatarURL,
        text: `実行者: ${message.author.tag}`
      }
    }
  });
  return;
 }

  if(command === "ping") {
    const m = await message.channel.send("ping lodging...");
    m.edit(`Pong!\nLatency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
        return;
  }

  if (command == ('eval')) {
  if(message.author.id == ('500077489285103616')) {
      const code = message.content.substr(6, message.content.length);
      let embed = new Discord.RichEmbed()
      .setTitle(eval(code))
      .setAuthor('evalコマンドが実行されました。')
      .setColor('#00FF00')
      .setDescription('実行者: ' + message.author.tag)
       message.channel.send(embed)
       return;
        }
    }

    if(command === "役職") {
       ROLEZZ = message.guild.roles.array()

   var ROLES = "";

    ROLEZZ.forEach(function(element){
        ROLES += element.name + "\n"
    });

    message.channel.send("```" + "\n" +
                         "---------------------------------" + "\n" +
                         "ALL SERVER ROLES" + "\n" +
                         "---------------------------------" + "\n" +
                         `${ROLES}` + "```");
       return;
  }

  if(command === 'ユーザー' ) {
    let embed = new Discord.RichEmbed()
      .setAuthor('ユーザーの情報',message.guild.iconURL)
      .setColor('#97D7FF')
      .addField('名前',message.author.tag)
      .addField('ID',message.author.id)
      .addField('サーバーの名前',message.guild.name)
      .addField('サーバーのID',message.guild.id)
      .addField('アイコンへのリンク',message.author.avatarURL)
      .addField('オンラインなのかどうか',message.author.presence.status,)
      .addField('サーバーに入った日',message.guild.me.joinedAt,)
      .addField('アカウントが作られた日',message.author.createdAt,)
      message.channel.send(embed)
      return;
  }

  function checkBots(guild) {
  let botCount = 0
  guild.members.forEach(member => {
    if(member.user.bot) botCount++
  })
  return botCount
}

function checkMembers(guild) {
  let memberCount = 0
  guild.members.forEach(member => {
    if(!member.user.bot) memberCount++
  })
  return memberCount
}

    if(command === 'サーバー') {
    let embed = new Discord.RichEmbed()
      .setAuthor(`${message.guild.name} - 情報`, message.guild.iconURL)
      .setColor('#FF5300')
      .addField('サーバーの所有者', message.guild.owner, true)
      .addField('サーバー領域', message.guild.region, true)
      .addField('チャンネルの数', message.guild.channels.size, true)
      .addField('役職の数',message.guild.roles.size,true)
      .addField('絵文字の数',message.guild.emojis.size,true)
      .addField('全体のメンバーの数', message.guild.memberCount)
      .addField('ユーザー', checkMembers(message.guild), true)
      .addField('ボット', checkBots(message.guild), true)
      .addField('AFKチャンネル',message.guild.afkChannel,true)
      .addField('システムチャンネル',message.guild.systemChannel,true)
      .addField('サーバーの名前の略称',message.guild.nameAcronym,true)
      .addField('不適切なコンテンツフィルターレベル',message.guild.explicitContentFilter,true)
      .addField('認証レベル', message.guild.verificationLevel, true)
      .setFooter('ギルド作成日:')
      .setTimestamp(message.guild.createdAt)
      message.channel.send(embed)
      return;
  }

   if(command === "サイコロ") {
       message.channel.startTyping(1)
       message.channel.stopTyping(10);
       message.channel.send(Math.floor(Math.random() * 150) + 1 + 'が出ました！');
       return;
  }

      if(command === 'et') {
      message.channel.send({embed: {
      color: 2552551,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "embed test",


      fields: [{
          name: "message.author.tag",
          value: `${message.author.tag}`
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: message.author.avatarURL,
        text: `実行者: ${message.author.tag}`
      }
    }
  });
  return;
 }

  if(command === 'avatar') {
    let embed = new Discord.RichEmbed()
    .addField('your icon!', message.author.tag, true)
    .setImage(message.author.avatarURL)
    .setColor('#FFCB00')
    message.channel.send(embed)
    return;
  }

  if(command === "purge") {
  if(message.author.id == ('500077489285103616')) {

    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("削除するメッセージ数には2から100までの数字を入力してください");

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`${error}のためメッセージを削除できませんでした`));
  }
}


    if(command === 'botinfo') {
      let totalSeconds = (client.uptime / 1000);
      let days = Math.floor(totalSeconds / 86400);
      let hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      let uptime = `${days} 日, ${hours} 時間, ${minutes} 分 / ${seconds} 秒`;

      let embed = new Discord.RichEmbed()
      .setTitle('FujiBot BETA(discord.js)')
      .setColor('#E6E6FA')
      .setDescription('Developer Mode Version: Beta')
      .addField('制作者','富志(情緒不安定)#5421',false)
      .addField('私が入っているサーバーの数',client.guilds.size,)
      .addField('私が入っているサーバー全体のチャンネルの数',client.channels.size,)
      .addField('私が知っているユーザの数',client.users.size,)
      .addField('起動時間',uptime,)
      .addField('製作者Twitter','https://twitter.com/fuji_midi',false)
     .addField('BOTを招待する','https://discordapp.com/api/oauth2/authorize?client_id=562820955723005962&permissions=271707376&scope=bot',false)
      message.channel.send(embed)
      return;
    }

    if(command === '時間') {
      const now = new Date(); //  現在日時を得る
      const year = now.getFullYear();
      const month = now.getMonth();
      const date = now.getDate();
      const hour = now.getHours(); // 時を抜き出す
      const min  = now.getMinutes(); // 分を抜き出す
    message.channel.send(year+ "年" + (month + 1) + '月' + date +'日' + '/' +  hour + '時' + min  +"分です。");
    return;
}

  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
      .setTitle(sayMessage)
      .setAuthor('Say Command')
      .setColor('#00FF00')
      .setDescription('実行者: ' + message.author.tag)
      message.channel.send(embed)
        return;
  }

      if(command === "再起動") {
        message.channel.send('再起動します。')
        if (!message.author.id == 500077489285103616) return;
        process.exit();
      }

});

client.on("guildCreate", guild => {
  // このイベントは、ボットがギルドに参加したときに発生します。
  console.log(`新しいギルド参加： ${guild.name} (id: ${guild.id}). このギルドには ${guild.memberCount} 人が入っています！`);
});

client.on("guildDelete", guild => {
  // このイベントは、ボットがギルドから削除されたときにトリガーされます。
  console.log(`私は ${guild.name} から取り除かれました： (id: ${guild.id})`);
});

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const canvas = Canvas.createCanvas(1050, 250);
	const ctx = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('https://cdn.glitch.com/cbda08d8-fddc-4b38-83d6-a334726c3b3c%2F2410.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.heigh)

	// Slightly smaller text placed above the member's display name
  ctx.font = '28px DejaVu';
	ctx.fillStyle = '#ffff00';
	ctx.fillText(`Welcome to ${member.guild.name},`, canvas.width / 3.0, canvas.height / 3.5);

	// Add an exclamation point here and below
  ctx.font = '28px DejaVu';
	ctx.fillStyle = '#ffff00';
	ctx.fillText(`${member.user.tag}!`, canvas.width / 3.0, canvas.height / 1.8);

  	// Add an exclamation point here and below
  ctx.font = '28px DejaVu';
	ctx.fillStyle = '#ffff00';
	ctx.fillText(`id: ${member.user.id}`, canvas.width / 3.0, canvas.height / 1.3);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`ようこそ ${member}さん!`, attachment);
});

client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'member-log');
	if (!channel) return;

	const canvas = Canvas.createCanvas(1050, 250);
	const ctx = canvas.getContext('2d');

	// Since the image takes time to load, you should await it
	const background = await Canvas.loadImage('https://cdn.glitch.com/cbda08d8-fddc-4b38-83d6-a334726c3b3c%2F3210.jpg');
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.heigh)

	// Slightly smaller text placed above the member's display name
  ctx.font = '28px DejaVu';
	ctx.fillStyle = '#ffff00';
	ctx.fillText(`good bye`,canvas.width / 3.0, canvas.height / 3.5);

	// Add an exclamation point here and below
  ctx.font = '28px DejaVu';
	ctx.fillStyle = '#ffff00';
	ctx.fillText(`${member.user.tag}...`, canvas.width / 3.0, canvas.height / 1.8);

  	// Add an exclamation point here and below
  ctx.font = '28px DejaVu';
	ctx.fillStyle = '#ffff00';
	ctx.fillText(`id: ${member.user.id}`, canvas.width / 3.0, canvas.height / 1.3);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
	const avatar = await Canvas.loadImage(buffer);
	ctx.drawImage(avatar, 25, 25, 200, 200);

  const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`さよなら ${member}さん…`, attachment);
});

//回線落ちした時に復帰してくれる奴
client.on('error', error => {
  console.log(error)
})

client.login( process.env.token );
