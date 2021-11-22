/*
打开部落聊天(135,480)
关闭部落聊天(840,480)


*/

let blue_background = images.read("./coc_picture/blue_background2.jpg");
// let blue_background = images.read("./coc_picture/short_background.jpg");

let blue_pixel = -12748363;
//接下来的这个数组用于存储所有兵种图片，0是野蛮人，1是弓箭手，2是巨人，3是哥布林，4是炸弹人，5是气球，6是法师，7是天使，8是火龙，9是皮卡
//10是龙宝，11是矿工，12是雷龙，13是雪怪，14是龙骑士，注意在造兵页面这里有空格，15是亡灵，16是野猪，17女武神，18石头人，19女巫，20天狗，
//21蓝胖，22冰人，23猎手,24战车,25飞艇,26大气球,27训练营,28滚木车
var troop_pic=new Array();
troop_pic[0] = images.read("./coc_picture/troop_savage.jpg")
troop_pic[1] = images.read("./coc_picture/troop_archar.jpg")
troop_pic[2] = images.read("./coc_picture/troop_giant.jpg")
troop_pic[3] = images.read("./coc_picture/troop_goblin.jpg")
troop_pic[4] = images.read("./coc_picture/troop_bomberMan.jpg")
troop_pic[5] = images.read("./coc_picture/troop_balloon.jpg")
troop_pic[6] = images.read("./coc_picture/troop_wizard.jpg")
troop_pic[7] = images.read("./coc_picture/troop_healer.jpg")
troop_pic[8] = images.read("./coc_picture/troop_dragon.jpg")
troop_pic[9] = images.read("./coc_picture/troop_piKa.jpg")
troop_pic[10] = images.read("./coc_picture/troop_longBao.jpg")
troop_pic[11] = images.read("./coc_picture/troop_miner.jpg")
troop_pic[12] = images.read("./coc_picture/troop_electronDragon.jpg")
troop_pic[13] = images.read("./coc_picture/troop_yeti.jpg")
troop_pic[14] = images.read("./coc_picture/troop_longQiShi.jpg")
troop_pic[15] = images.read("./coc_picture/troop_minion.jpg")
troop_pic[16] = images.read("./coc_picture/troop_hogRider.jpg")
troop_pic[17] = images.read("./coc_picture/troop_valkyrie.jpg")
troop_pic[18] = images.read("./coc_picture/troop_shiTouRen.jpg")
troop_pic[19] = images.read("./coc_picture/troop_witch.jpg")
troop_pic[20] = images.read("./coc_picture/troop_tianGou.jpg")
troop_pic[21] = images.read("./coc_picture/troop_bowler.jpg")
troop_pic[22] = images.read("./coc_picture/troop_bingRen.jpg")
troop_pic[23] = images.read("./coc_picture/troop_heroKiller.jpg")
troop_pic[24] = images.read("./coc_picture/machine_zhanChe.jpg")
troop_pic[25] = images.read("./coc_picture/machine_feiTing.jpg")
troop_pic[26] = images.read("./coc_picture/machine_daQiQiu.jpg")
troop_pic[27] = images.read("./coc_picture/machine_xunLianYing.jpg")
troop_pic[28] = images.read("./coc_picture/machine_gunMu.jpg")

troop_pic_length = Number(29)


var spell_pic=new Array();

function testHelp(screen,name){
    var ans=new Array();
    let p = images.matchTemplate(screen, blue_background,{
        threshold: 0.85,
        max:30,

    });
    if (p.matches.length) {
        var length = p.matches.length
        log("length:"+length);
        for(var i =0;i<length;i++){
            // log(i+":"+p.matches[i].point.x+","+p.matches[i].point.y);
            target = images.clip(screen, p.matches[i].point.x, p.matches[i].point.y-130, 130, 130)
            for(var j = 0;j<troop_pic_length;j++){
                if(troop_pic[j]){
                    let pp = findImage(target, troop_pic[j],
                    {
                        threshold: 0.9,
                    });
                    if(pp){
                        ans.push(Number(j))
                        target.recycle();
                        break;
                    }
                }
            }
            target.recycle();
        }
    } else {
        toastLog("can not find!");
    }
    screen.recycle()
    var string_ans = name;
    ans.sort((a,b)=>Number(a)-Number(b));
    for(var i = 0;i<ans.length;i++){
        string_ans = string_ans + ans[i]+",";
    }
    toastLog(string_ans)
}

function main() {
    // var test_cnt = 8;
    // for(var i = 0;i<test_cnt;i++){
    //     var tmp_s = "./test/test"+i+".jpg";
    //     var test_pic = images.read(tmp_s)
    //     testHelp(test_pic,"test"+i+":")
    //     test_pic.recycle()
    // }
    swipe(1500, 700, 500, 700, 500)
    for(var i = 0;i<troop_pic_length;i++){
        if(troop_pic[i]){
            troop_pic[i].recycle();
        }else{
            toastLog(i)
        }
    }
    blue_background.recycle();
}




images.requestScreenCapture(true);
main();
