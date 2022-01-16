setScreenMetrics(1080, 2312);//这行代码可以让auto.js根据手机的型号自动调整点击的位置 this line can make auto.js adjust the clicking point due to moblie's type
let chatOn_x = Number(135) //打开部落聊天 open chat
let chatOn_y = Number(480)
let chatOff_x = Number(840)//关闭部落聊天 close chat
let chatOff_y = Number(480)
let trainOn_x = Number(135) //打开训练部队 open training
let trainOn_y = Number(780)
let trainOff_x = Number(1995) //关闭训练部队 close training
let trainOff_y = Number(50)
let attack_x = Number(180) //发起进攻 attack!
let attack_y = Number(950)
let most_right_x = Number(2300) //屏幕边缘点，用于返回  margin of screen, using for back
let most_right_y = Number(525)
 
let trainTroop_x = Number(760) //在训练界面，进入军队训练 in training,step into train troops
let trainTroop_y = Number(70)
let makeSpell_x = Number(1090) // 在训练界面，进入法术配置 in training,step into brew spell
let makeSpell_y = Number(70)
let makeMachine_x = Number(1440)
let makeMachine_y = Number(70)
let normalTroop_x = Number(385) //野蛮人 barbarian
let normalTroop_y = Number(655) 
let darkTroop_x = Number(1125) //亡灵 minion
let darkTroop_y = Number(655) 
let normalSpell_x = Number(385) //闪电 lighting spell
let normalSpell_y = Number(655) 
let darkSpell_x = Number(1185) //毒药 poison spell 
let darkSpell_y = Number(655)  
let square_length = Number(200) //军队和法术一个格子的长度 square length in troop and spell
let machine_x = Number(470) //攻城战车 wall wrecker
let machine_y = Number(750) 
let machine_right_x = Number(1480)  //投石车 flame flinger
let machine_right_y = Number(750)
let machine_square_length = Number(335) //攻城机器一个格子的长度 square length in siege machine

let help = images.read("./coc_picture/help.jpg") //增援 donate
let quick_help = images.read("./coc_picture/quick_help.jpg") //快速增援 quick donate
let chat_up = images.read("./coc_picture/chat_up.jpg") //聊天窗口上滑  move up the chat window
let chat_lowest = images.read("./coc_picture/chat_lowest.jpg")//聊天窗口回到最底部 move the chat window to lowest
let attack_mode = images.read("./coc_picture/attack.jpg") //进入进攻页面后 when step into the attack page

let blue_pixel = -12748363;// 这个像素点用于识别可增援的部队 we use this pixel to decide which square is donatable troop
let purple_pixel = -9615939;//这个像素点用于识别可增援的法术 we use this pixel to decide which square is donatable spell
let duration_in_minute = Number(220);//the longest time you can be online is 4 hours,so you need relaunch the app less than 4 hour

//接下来的这个数组用于存储所有兵种图片，0是野蛮人，1是弓箭手，2是巨人，3是哥布林，4是炸弹人，5是气球，6是法师，7是天使，8是火龙，9是皮卡
//10是龙宝，11是矿工，12是雷龙，13是雪怪，14是龙骑士，注意在造兵页面这里有空格，15是亡灵，16是野猪，17女武神，18石头人，19女巫，20天狗，
//21蓝胖，22冰人，23猎手,24战车,25飞艇,26大气球,27训练营,28滚木车,29投石车
//the following array is used to store all the pictures of troop and siege machine. 0 barbarin,1 archer,2 giant,3 goblin,4 wall breaker,
//5 balloon,6 wizard,7 healer,8 dragon,9 PEKKA,10 baby dragon,11 miner,12 electron dragon,13 yeti, 14 dragon rider, attention there is space in page,
//15 mininon,16 hog rider,17 valkyrie,18 golem,19 witch,20 lava hound,21 bowler,22 ice golem,23 headhunter
//24 wall wrecker,25 battle blimp,26 stone slammer,27 siege barracks,28 log laucher,29 flame flinger
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
troop_pic[29] = images.read("./coc_picture/machine_flame.jpg") //need to be done:more resource
troop_pic_length = troop_pic.length;

//接下来这个数组用于存放法术的图片,0闪电,1治疗,2狂暴,3弹跳,4冰冻,5镜像,6隐身,注意在造法术页面这里有空格,7毒药,8地震,9急速,10骷髅,11蝙蝠
//the following array is used to store all the pictures of spell, 0 lighting,1 healing,2 rage,3 jump,4 freeze,5 clone,6 invisibility
//attention there is space in page,7 poison,8 earthquake,9 haste,10 skeleton,11 bat
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
spell_pic_length = spell_pic.length;

var donate_troop =new Array();//记录捐出兵种和攻城机器的编号，用于补充 record the index of donating troop and siege machine to supply them
var donate_spell =new Array();//记录捐出法术的编号，用于补充 record the index of donating spell to supply them


function close_and_recycle(packageName) {
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
    chat_up.recycle();
    chat_lowest.recycle();
    attack_mode.recycle();


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
        // textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
        click("强行停止",0)
        sleep(2000);
        // textMatches(/(.*确.*|.*定.*)/).findOne().click();
        click("强行停止",1)
        log(app.getAppName(name) + "应用已被关闭");
        sleep(5000);
        back();
    } else {
        log(app.getAppName(name) + "应用不能被正常关闭或不在后台运行");
        back();
    }
}

function clickAndSleep(x,y){
    click(x,y)
    sleep(1000)
}

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
        var findIt = false;
        // images.save(target, "./coc_picture/tmp.jpg", "jpg",100)
        for(var i = 0;i<troop_pic_length;i++){
            if(troop_pic[i]){
                let pp = findImage(target, troop_pic[i],
                {
                    threshold: 0.9
                });
                if(pp){
                    donate_troop.push(i);
                    sleep(1000);
                    findIt = true;
                    break;
                }
            }
        }
        if(!findIt){
            var time = new Date();
            images.save(target,"./error/"+time.toTimeString()+"unrecognizable.png")
            toastLog("can not find it in troop_pic")
        }
        clickAndSleep(p.x+50, p.y-50);
        target.recycle()
        doHelpTroop();
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
        var findIt = false;
        for(var i = 0;i<spell_pic_length;i++){
            if(spell_pic[i]){
                let pp = findImage(target, spell_pic[i],
                {
                    threshold: 0.9
                });
                if(pp){
                    donate_spell.push(i);
                    sleep(1000);
                    findIt = true;
                    break;
                }
            }
        }
        if(!findIt){
            var time = new Date();
            images.save(target,"./error/"+time.toTimeString()+"unrecognizable.png")
            toastLog("can not find it in spell_pic");
        }
        clickAndSleep(p.x+50, p.y-50);
        target.recycle()
        doHelpSpell();
    } else {
        
    }
    
}

function do_help(){
    let p = findImage(captureScreen(), help,{
        region: [500, 0, 300, 1080],
    }
    );
    if (p) {
        clickAndSleep(p.x+100, p.y+30);
        doHelpTroop();
        doHelpSpell();
        let pp = findImage(captureScreen(), quick_help);
        if(pp){
            clickAndSleep(most_right_x,most_right_y);
        }
    }

}

function moreResource(){
    clickAndSleep(trainOn_x,trainOn_y);
    clickAndSleep(trainTroop_x,trainTroop_y);
    donate_troop.sort((a,b)=>Number(a)-Number(b));
    donate_spell.sort((a,b)=>Number(a)-Number(b));
    var toDark = false;
    var toMachine = false;
    var break_point_troop = 7;//used to record some activity troop
    var break_point_spell = 1;//used to record some activity spell
    if(break_point_troop==-1){
        for(var i = 0;i<donate_troop.length;i++){
            if(0<=donate_troop[i]&&donate_troop[i]<=14){
                clickAndSleep(normalTroop_x+Math.floor(donate_troop[i]/2)*square_length,normalTroop_y+(donate_troop[i]%2)*square_length)
            }else if (15<=donate_troop[i]&&donate_troop[i]<=23){
                if(!toDark){
                    swipe(1500, 700, 500, 700, 500);
                    sleep(2000);
                    toDark = true
                }
                var tmp = donate_troop[i]-15;
                clickAndSleep(darkTroop_x+Math.floor(tmp/2)*square_length,darkTroop_y+(tmp%2)*square_length);
            }else if (24<=donate_troop[i]&&donate_troop[i]<=29){
                if(!toMachine){
                    clickAndSleep(makeMachine_x,makeMachine_y);
                    toMachine =true;
                }
                if(donate_troop[i]!=29){
                    var tmp = donate_troop[i]-24;
                    clickAndSleep(machine_x+tmp*machine_square_length,machine_y);
                }else{
                    swipe(1500, 700, 500, 700, 500);
                    sleep(2000);
                    clickAndSleep(machine_right_x,machine_right_y)
                }
                
            }else{
                toastLog("军队制造列表混进来了奇怪的东西"+i);
            }
        }
    }else{
        for(var i = 0;i<donate_troop.length;i++){
            if(0<=donate_troop[i]&&donate_troop[i]<=break_point_troop-1){
                clickAndSleep(normalTroop_x+Math.floor(donate_troop[i]/2)*square_length,normalTroop_y+(donate_troop[i]%2)*square_length)
            }else if(break_point_troop<=donate_troop[i]&&donate_troop[i]<=14){
                donate_troop[i]++;
                clickAndSleep(normalTroop_x+Math.floor(donate_troop[i]/2)*square_length,normalTroop_y+(donate_troop[i]%2)*square_length)
            }else if (15<=donate_troop[i]&&donate_troop[i]<=23){
                if(!toDark){
                    swipe(1500, 700, 500, 700, 500);
                    sleep(2000);
                    toDark = true
                }
                var tmp = donate_troop[i]-15;
                clickAndSleep(darkTroop_x+Math.floor(tmp/2)*square_length,darkTroop_y+(tmp%2)*square_length);
            }else if (24<=donate_troop[i]&&donate_troop[i]<=29){
                if(!toMachine){
                    clickAndSleep(makeMachine_x,makeMachine_y);
                    toMachine =true;
                }
                if(donate_troop[i]!=29){
                    var tmp = donate_troop[i]-24;
                    clickAndSleep(machine_x+tmp*machine_square_length,machine_y);
                }else{
                    swipe(1500, 700, 500, 700, 500);
                    sleep(2000);
                    clickAndSleep(machine_right_x,machine_right_y)
                }
                
            }else{
                toastLog("军队制造列表混进来了奇怪的东西"+i);
            }
        }
    }
    donate_troop.length = 0;

    clickAndSleep(makeSpell_x,makeSpell_y);
    if(break_point_spell==-1){
        for(var i = 0;i<donate_spell.length;i++){
            if(0<=donate_spell[i]&&donate_spell[i]<=6){
                clickAndSleep(normalSpell_x+Math.floor(donate_spell[i]/2)*square_length,normalSpell_y+(donate_spell[i]%2)*square_length)
            }else if (7<=donate_spell[i]&&donate_spell[i]<=11){
                var tmp = donate_spell[i]-7;
                clickAndSleep(darkSpell_x+Math.floor(tmp/2)*square_length,darkSpell_y+(tmp%2)*square_length);
            }else{
                toastLog("法术制造列表混进来了奇怪的东西"+i);
            }
        }
    }else{
        for(var i = 0;i<donate_spell.length;i++){
            if(0<=donate_spell[i]&&donate_spell[i]<=break_point_spell-1){
                clickAndSleep(normalSpell_x+Math.floor(donate_spell[i]/2)*square_length,normalSpell_y+(donate_spell[i]%2)*square_length)
            }else if(0<=donate_spell[i]&&donate_spell[i]<=6){
                donate_spell[i]++;
                clickAndSleep(normalSpell_x+Math.floor(donate_spell[i]/2)*square_length,normalSpell_y+(donate_spell[i]%2)*square_length)
            }else if (7<=donate_spell[i]&&donate_spell[i]<=11){
                var tmp = donate_spell[i]-7;
                clickAndSleep(darkSpell_x+Math.floor(tmp/2)*square_length,darkSpell_y+(tmp%2)*square_length);
            }else{
                toastLog("法术制造列表混进来了奇怪的东西"+i);
            }
        }
    }
    
    donate_spell.length = 0;

    clickAndSleep(trainOff_x,trainOff_y);

}

function chat_to_lowest(){
    //make sure the image is complete
    swipe(350, 350, 350, 750, 500);
    sleep(2000)
    let p = findImage(captureScreen(), chat_lowest);
    if (p) {
        clickAndSleep(p.x+30, p.y+30);
    }
}

function chat_to_up(){
    let p = findImage(captureScreen(), chat_up);
    if (p) {
        clickAndSleep(p.x+10, p.y+30);
        return true;
    } else {
        return false;
    }
}

function in_coc(){
    clickAndSleep(attack_x,attack_y);
    let p = findImage(captureScreen(), attack_mode);
    if (!p) {
        var time = new Date();
        images.captureScreen("./error/"+time.toTimeString()+"not_in_coc.png")
        return false;
    } else {
        clickAndSleep(most_right_x,most_right_y);
        return true;
    }

}

function main() {
    var attempt_times = 0;
    while(true){
        launchApp("部落冲突");
        sleep(30000);
        if(in_coc()){
            break;
        }else if(attempt_times==3){
            close_and_recycle("部落冲突");
            engines.myEngine().forceStop();
        }else{
            attempt_times ++;
        }
    }

    while(true){
        clickAndSleep(chatOn_x, chatOn_y);
        while(true){
            do_help();
            if(!chat_to_up()){
                chat_to_lowest();
                break;
            }
        }
        clickAndSleep(chatOff_x,chatOff_y);
        if(donate_spell.length>0||donate_troop.length>0){
            moreResource();
        }
        toast("I am going to sleep 60 seconds!")
        sleep(60000);
        var current_time = new Date();
        var current_time_in_minute = current_time.getHours()*60+current_time.getMinutes()
        //the script would end in 11:40,15:40,19:40,23:40
        if(current_time_in_minute==700||current_time_in_minute==940||current_time_in_minute==1180||current_time_in_minute==1420){
            toastLog("time is up, I am going to rest~"+current_time.getHours()+":"+current_time.getMinutes());
            break;
        }
        if(!in_coc()){
            sleep(2000)
            if(!in_coc()){
                console.warn("not in coc,something wrong!");
                break;
            }
        }
    }

    close_and_recycle("部落冲突");
}




images.requestScreenCapture(true);
main();
