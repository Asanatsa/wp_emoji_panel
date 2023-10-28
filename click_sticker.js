let radEle = document.getElementsByClassName("sticker-rad");
let textboxEle = document.getElementById("test-textbox");


function clickSticker(event){
    let t = event.target
    let idf = "{" + t.parentElement.dataset.id + "#" + t.dataset.name + "}";
    textboxEle.value = textboxEle.value + idf;
}

function selectStickers() {
    let status = [];

    for (let i = 0; i < radEle.length; i++) {
        let ele = document.getElementById("sticker-" + radEle[i].id);
        ele.hidden = !radEle[i].checked;


        //debug
        let a = {};
        a.name = radEle[i].id;
        a.status = radEle[i].checked;
        status[i] = a;
        
    }

    console.log(status);
}

