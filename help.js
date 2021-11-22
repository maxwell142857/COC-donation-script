/*
打开部落聊天(135,480)
关闭部落聊天(840,480)


*/
let chatOn_x = Number(135)
let chatOn_y = Number(480)
let chatOff_x = Number(840)
let chatOff_y = Number(480)
let trainOn_x = Number(135)
let trainOn_y = Number(780)
let trainOff_x = Number(1995)
let trainOff_y = Number(50)

let trainTroop_x = Number(760)
let trainTroop_y = Number(70)
let makeSpell_x = Number(1090)
let makeSpell_y = Number(70)
let makeMachine_x = Number(1440)
let makeMachine_y = Number(70)
let normalTroop_x = Number(385) //savage's center
let normalTroop_y = Number(655) //savage's center
let darkTroop_x = Number(1125) //minion's center
let darkTroop_y = Number(655) //minion's center
let normalSpell_x = Number(385) //shanDian's center
let normalSpell_y = Number(655) //shanDian's center
let darkSpell_x = Number(1185) //duYao's center
let darkSpell_y = Number(655) //duYao's center
let square_length = Number(200) //square length in troop and spell
let machine_x = Number(470) //zhanche's center
let machine_y = Number(750) //zhanche's center
let machine_square_length = Number(335) //square length in machine

let help_panel_troop_x_start = Number(850)
let help_panel_troop_y_start = Number(0)
let help_panel_troop_x_range = Number(1000)
let help_panel_troop_y_range = Number(1000)
let helpOff_x = Number(1800)
let helpOff_y = Number(125)

let help = images.read("./coc_picture/help.jpg")
let quick_help = images.read("./coc_picture/quick_help.jpg")

let blue_pixel = -12748363; //we use this pixel to decide which square is donatable troop
let purple_pixel = -9615939;//we use this pixel to decide which square is donatable spell


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

//接下来这个数组用于存放法术的图片,0闪电,1治疗,2狂暴,3弹跳,4冰冻,5镜像,6隐身,注意在造法术页面这里有空格,7毒药,8地震,9急速,10骷髅,11蝙蝠
var spell_pic = new Array();
spell_pic[0] = images.read("./coc_picture/spell_shanDian.jpg")
spell_pic[1] = images.read("./coc_picture/spell_zhiLiao.jpg")
spell_pic[2] = images.read("./coc_picture/spell_rage.jpg")
spell_pic[3] = images.read("./coc_picture/spell_tanTiao.jpg")
spell_pic[4] = images.read("./coc_picture/spell_bingDong.jpg")
// spell_pic[5] = images.read("./coc_picture/spell_.jpg")
spell_pic[6] = images.read("./coc_picture/spell_yinShen.jpg")
spell_pic[7] = images.read("./coc_picture/spell_duYao.jpg")
spell_pic[8] = images.read("./coc_picture/spell_diZheng.jpg")
spell_pic[9] = images.read("./coc_picture/spell_jiSu.jpg")
spell_pic[10] = images.read("./coc_picture/spell_kuLou.jpg")
spell_pic[11] = images.read("./coc_picture/spell_bianFu.jpg")
spell_pic_length = Number(12)



var donate_troop =new Array();
var donate_spell =new Array();

function close(packageName) {
    var name = getPackageName(packageName);
    if (!name) {
        if (getAppName(packageName)) {
            name = packageName;
        } else {
            return false;
        }
    }
    app.openAppSetting(name);
    sleep(5000);
    text(app.getAppName(name)).waitFor();
    let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
    if (is_sure.enabled()) {
        textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
        textMatches(/(.*确.*|.*定.*)/).findOne().click();
        log(app.getAppName(name) + "应用已被关闭");
        sleep(5000);
        back();
    } else {
        log(app.getAppName(name) + "应用不能被正常关闭或不在后台运行");
        back();
    }
}

//give me a target picture,this function will click it
function findAndClick(target) {
    let p = findImage(captureScreen(), target);
    if (p) {
        click(p.x+100, p.y+30)
        sleep(1000)
    } else {
        toastLog("can not find the target");
    }
}

function findAndClickInRange(target,x,y,x_range,y_range) {
    let p = findImage(captureScreen(), target,
        {
            region: [x, y, x_range, y_range],
        }
    );
    if (p) {
        click(p.x+100, p.y+30)
        sleep(1000)
    } else {
        toastLog("can not find the target");
    }
    target.recycle();
}

function clickAndSleep(x,y){
    click(x,y)
    sleep(1000)
}

// function doHelp(){
//     let p = findImage(captureScreen(), blue_background,
//         {
//             // region: [help_panel_troop_x_start, help_panel_troop_y_start, help_panel_troop_x_range, help_panel_troop_y_range],
//             threshold: 0.85
//         }
//     );
//     if (p) {
//         // toastLog("find the target"+p.x+","+p.y);
//         target = images.clip(captureScreen(), p.x, p.y-130, 130, 130)
//         images.save(target, "./coc_picture/tmp.jpg", "jpg",100)
//         for(var i = 0;i<troop_pic_length;i++){
//             if(troop_pic[i]){
//                 let pp = findImage(target, troop_pic[i],
//                 {
//                     threshold: 0.5
//                 });
//                 if(pp){
//                     toastLog("find it in troop_pic! index:"+i);
//                     sleep(1000);
//                     break;
//                 }
//             }
//         }
//         clickAndSleep(p.x+50, p.y-50);
//         target.recycle()
//         doHelp();
//     } else {
//         toastLog("can not find!");
//     }
// }

function doHelpTroop(){
    let p = images.findMultiColors(captureScreen(), blue_pixel,
        [
            [1, 0, blue_pixel], 
            [2, 0, blue_pixel],
            [3, 0, blue_pixel],
            [4, 0, blue_pixel],
            [5, 0, blue_pixel],
            [6, 0, blue_pixel],
            [7, 0, blue_pixel],
            [8, 0, blue_pixel],
            [9, 0, blue_pixel],
            [10, 0, blue_pixel],
        ],
        {
            threshold: 0
        }
    );
    if (p) {
        target = images.clip(captureScreen(), p.x, p.y-130, 130, 130)
        // images.save(target, "./coc_picture/tmp.jpg", "jpg",100)
        for(var i = 0;i<troop_pic_length;i++){
            if(troop_pic[i]){
                let pp = findImage(target, troop_pic[i],
                {
                    threshold: 0.9
                });
                if(pp){
                    toastLog("find it in troop_pic! index:"+i);
                    donate_troop.push(i);
                    sleep(1000);
                    break;
                }else{
                    toastLog("can not find it in troop_pic!");
                }
            }
            
        }
        clickAndSleep(p.x+50, p.y-50);
        target.recycle()
        doHelpTroop();
    } else {
        
    }
    
}


function doHelpSpell(){
    let p = images.findMultiColors(captureScreen(), purple_pixel,
        [
            [1, 0, purple_pixel], 
            [2, 0, purple_pixel],
            [3, 0, purple_pixel],
            [4, 0, purple_pixel],
            [5, 0, purple_pixel],
            [6, 0, purple_pixel],
            [7, 0, purple_pixel],
            [8, 0, purple_pixel],
            [9, 0, purple_pixel],
            [10, 0, purple_pixel],
        ],
        {
            threshold: 0
        }
    );
    if (p) {
        target = images.clip(captureScreen(), p.x, p.y-130, 130, 130)
        images.save(target, "./coc_picture/tmp.jpg", "jpg",100)
        for(var i = 0;i<spell_pic_length;i++){
            if(spell_pic[i]){
                let pp = findImage(target, spell_pic[i],
                {
                    threshold: 0.9
                });
                if(pp){
                    toastLog("find it in spell_pic! index:"+i);
                    donate_spell.push(i);
                    sleep(1000);
                    break;
                }else{
                    toastLog("can not find it in spell_pic!");
                }
            }
            
        }
        clickAndSleep(p.x+50, p.y-50);
        target.recycle()
        doHelpSpell();
    } else {
        
    }
    
}


function moreResource(){
    clickAndSleep(trainOn_x,trainOn_y);
    clickAndSleep(trainTroop_x,trainTroop_y);
    donate_troop.sort((a,b)=>Number(a)-Number(b));
    donate_spell.sort((a,b)=>Number(a)-Number(b));
    var toDark = false;
    var toMachine = false;
    for(var i = 0;i<donate_troop.length;i++){
        if(0<=donate_troop[i]&&donate_troop[i]<=14){
            clickAndSleep(normalTroop_x+Math.floor(i/2)*square_length,normalTroop_y+(i%2)*square_length)
        }else if (15<=donate_troop[i]&&donate_troop[i]<=23){
            if(!toDark){
                swipe(1500, 700, 500, 700, 500);
                sleep(2000);
                toDark = true
            }
            var tmp = donate_troop[i]-15;
            clickAndSleep(darkTroop_x+Math.floor(tmp/2)*square_length,darkTroop_y+(tmp%2)*square_length);
        }else if (24<=donate_troop[i]&&donate_troop[i]<=28){
            if(!toMachine){
                clickAndSleep(makeMachine_x,makeMachine_y);
                toMachine =true;
            }
            var tmp = donate_troop[i]-24;
            clickAndSleep(machine_x+tmp*machine_square_length,machine_y);
        }else{
            toastLog("军队制造列表混进来了奇怪的东西"+i);
        }
    }

    clickAndSleep(makeSpell_x,makeSpell_y);
    for(var i = 0;i<donate_spell.length;i++){
        if(0<=donate_spell[i]&&donate_spell[i]<=6){
            clickAndSleep(normalSpell_x+Math.floor(i/2)*square_length,normalSpell_y+(i%2)*square_length)
        }else if (7<=donate_spell[i]&&donate_spell[i]<=11){
            var tmp = donate_spell[i]-7;
            clickAndSleep(darkSpell_x+Math.floor(tmp/2)*square_length,darkSpell_y+(tmp%2)*square_length);
        }else{
            toastLog("法术制造列表混进来了奇怪的东西"+i);
        }
    }

    clickAndSleep(trainOff_x,trainOff_y);

}
function main() {

    toast("将于1秒后开始");
    // sleep(2000);
    // launchApp("部落冲突");
    // sleep(20000);
    sleep(1000)
    clickAndSleep(chatOn_x, chatOn_y);
    findAndClick(help);
    doHelpTroop();
    doHelpSpell();
    let p = findImage(captureScreen(), quick_help);
    if(p){
        clickAndSleep(helpOff_x,helpOff_y);
    }
    clickAndSleep(chatOff_x,chatOff_y);
    moreResource();
    // clickAndSleep(chatOff_x, chatOff_y)
    
    // close("部落冲突");

    for(var i = 0;i<troop_pic_length;i++){
        if(troop_pic[i]){
            troop_pic[i].recycle();
        }else{
            toastLog("troop not recycle:"+i)
        }
    }

    for(var i = 0;i<spell_pic_length;i++){
        if(spell_pic[i]){
            spell_pic[i].recycle();
        }else{
            toastLog("spell not recycle:"+i)
        }
    }
    help.recycle();
    quick_help.recycle();
}




images.requestScreenCapture(true);


main();
