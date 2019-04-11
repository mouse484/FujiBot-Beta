const { command } = require("ecstar");

module.exports = class extends command {
    constructor(client) {
        super(client, {
            name: "help",
        })
    }
    run(message) {
        const client = this.client;

        message.reply("DMにHELPを送信しました。");
        message.author.send({
            embed: {
                color: 2552551,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                },
                title:
                    "FujiBotのhelp(helpに載ってある全てのコマンドは<f!>で使用出来ます。)",

                fields: [
                    {
                        name: "help",
                        value: "このコマンド",
                    },
                    {
                        name: "ping",
                        value: "反応時間を測る",
                    },
                    {
                        name: "eval",
                        value: "bot開発者のみ実行可能",
                    },
                    {
                        name: "役職",
                        value: "サーバー内の役職を表示",
                    },
                    {
                        name: "ユーザー",
                        value: "ユーザーの情報を表示",
                    },
                    {
                        name: "サーバー",
                        value: "サーバーの情報を表示",
                    },
                    {
                        name: "サイコロ",
                        value: "1〜150をランダムで表示",
                    },
                    {
                        name: "avatar",
                        value: "あなたのアイコンを表示",
                    },
                    {
                        name: "purge",
                        value: "bot開発者のみ実行可能",
                    },
                    {
                        name: "グローバルチャット",
                        value:
                            "このbotっが入っていて、〈fujiグロチャ〉というチャンネルを作れば(他のこのbotが入ってる鯖の)みんなと繋がれます!",
                    },
                    {
                        name: "botinfo",
                        value: "botの情報が載せられます。(開発中)",
                    },
                    {
                        name: "時間",
                        value: "時間を表示する",
                    },
                    {
                        name: "say",
                        value: "特に意味ないけどこだま返しみたいなやつ",
                    },
                    {
                        name: "入室・退室ログ",
                        value:
                            "[member-log]というチャンネルを作れば、退室ログ、入室ログが表示されるようになります。",
                    },
                    {
                        name: "再起動",
                        value: "bot開発者のみ実行可能",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: message.author.avatarURL,
                    text: `実行者: ${message.author.tag}`,
                },
            },
        });
        return;
    }
}
