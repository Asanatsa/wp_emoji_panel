let emojiList = [
    {
        name: "傻不啦叽诗歌剧",
        id: "sblj",
        description: "©祭祭",
        iconSrc: "./img/shabulaji/fo'xing.png",
        imgList: [
            {
                name: "乐了",
                id: "happy",
                src: "./img/shabulaji/happy.png"
            },
            {
                name: "大悲",
                id: "sad",
                src: "./img/shabulaji/sad.png"
            },
            {
                name: "困",
                id: "sleepy",
                src: "./img/shabulaji/sleepy.png"
            },
            {
                name: "惊",
                id: "shocked",
                src: "./img/shabulaji/shocked.png"
            },
            {
                name: "变傻",
                id: "silly",
                src: "./img/shabulaji/silly.png"
            },
            {
                name: "哭哭",
                id: "cry",
                src: "./img/shabulaji/cry.png"
            },
            {
                name: "羞",
                id: "shy",
                src: "./img/shabulaji/shy.png"
            },
            {
                name: "佛性",
                id: "fo'xing",
                src: "./img/shabulaji/fo'xing.png"
            }, 
        ],
    },
    {
        name: "乌拉拉",
        id: "urara",
        description: "©祭祭",
        iconSrc: "./img/urara/supported.png",
        imgList: [
            {
                name: "忍住",
                id: "endure",
                src: "./img/urara/endure.png"
            },
            {
                name: "打call",
                id: "supported",
                src: "./img/urara/supported.png"
            },
            {
                name: "打瞌睡",
                id: "sleepy",
                src: "./img/urara/sleepy.png"
            },
            {
                name: "哇哦",
                id: "wow",
                src: "./img/urara/wow.png"
            },
            {
                name: "哼哼",
                id: "huh",
                src: "./img/urara/huh.png"
            },
            {
                name: "乐",
                id: "lol",
                src: "./img/urara/lol.png"
            },
            {
                name: "切",
                id: "so_what",
                src: "./img/urara/so_what.png"
            },
            {
                name: "伤心",
                id: "sad",
                src: "./img/urara/sad.png"
            }, 
        ]
    },
]



function generate(list){
    let radListEle = document.getElementsByClassName("emoji-rad-list")[0];
    let emojiEle = document.getElementsByClassName("emoji-list")[0];
    let radListHtml = "";

    for (let i = 0; i < list.length; i++) {
        let emojiObj = list[i];
        let emojiImgList = emojiObj.imgList;

        if(i == 0) {
            radListHtml = `<input type="radio" class="emoji-rad" id="${emojiObj.id}" name="emoji-select" checked>\n<label for="${emojiObj.id}"><img class="emoji-logo-thumb" loading="lazy" title="${emojiObj.name}" src="${emojiObj.iconSrc}"></label>`
        } else{
            radListHtml = radListHtml + `<input type="radio" class="emoji-rad" id="${emojiObj.id}" name="emoji-select">\n<label for="${emojiObj.id}"><img class="emoji-logo-thumb" loading="lazy" title="${emojiObj.name}" src="${emojiObj.iconSrc}"></label>`
        }

        for (let i = 0; i < emojiImgList.length; i++) {
            let emojiImgHtml = "";
            
        }
        
    }

    console.log(radListHtml);
    radListEle.innerHTML = radListHtml;
}