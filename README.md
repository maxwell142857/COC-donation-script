# Script's Description

​		The origin language of the readme is Chinese. If you are more comfortable reading in Chinese please click [here](https://github.com/maxwell142857/COC-donation-script/blob/master/README_Chinese.md).

## Disclaimer
​		This script is used for learning the Auto.js framework only. Please do not use it out of other purpose.

## Maintenance

​		Stop maintenance.


## Function Description

​		This script can monitor the donation requests in the clan chat. If the things in repository(things you have already trained) can help, then the script would do donation. In other word, the category of your repository decides this script can donate what type of troops, spells and siege machines.

## Preparation 

+ A phone with Android operation system, using for hang up the script. Please make sure the battery is abundant and the wifi condition is good.
+ A COC game account with high level. People are not willing to get low-level donation.
+ Auto.js framework. It is used to be a free open source software. Sadly it needs money now but I think it worth buying as its ample functions.(I used to think that maybe I should package this script into .apk file. Eventually I didn't do it as I knew that this script is not suitable for all mobile's type. So please modify it due to your own environment. I would tell you how to do it in Description part). Here is a link to [Auto.js](https://hyb1996.github.io/AutoJs-Docs/#/)

## How to Use it

+ Download the Auto.js. Then open accessibility services for Auto.js.
+ Put help.js in Auto.js default path.
+ Put coc_picture in Auto.js default path.
+ Simply run help.js. This script would open the COC automatically.

## Description

​		This part would give specific demonstration of the script. 

​		The first part of the script is the global variable. You can know the usage of it from its comment.

```javascript
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
let machine_square_length = Number(335) //攻城机器一个格子的长度 square length in siege machine

let helpOff_x = Number(1800) //在向某人增援时，关闭增援  when donating to certain guy, close the page
let helpOff_y = Number(125)

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
//21蓝胖，22冰人，23猎手,24战车,25飞艇,26大气球,27训练营,28滚木车
//the following array is used to store all the pictures of troop and siege machine. 0 barbarin,1 archer,2 giant,3 goblin,4 wall breaker,
//5 balloon,6 wizard,7 healer,8 dragon,9 PEKKA,10 baby dragon,11 miner,12 electron dragon,13 yeti, 14 dragon rider, attention there is space in page,
//15 mininon,16 hog rider,17 valkyrie,18 golem,19 witch,20 lava hound,21 bowler,22 ice golem,23 headhunter
//24 wall wrecker,25 battle blimp,26 stone slammer,27 siege barracks,28 log laucher
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
spell_pic_length = Number(12)

var donate_troop =new Array();//记录捐出兵种和攻城机器的编号，用于补充 record the index of donating troop and siege machine to supply them
var donate_spell =new Array();//记录捐出法术的编号，用于补充 record the index of donating spell to supply them

```

​		The following function needs a parameter, which is the app name you want to end. It can release the picture resource s and terminate the app. The main design is as follows: Firstly it can open the operation system's procedure lists, then find the COC. Then find some button with text like "force stop" by regular expression and click it. At this time my operation system would prompt whether I confirm to force stop it. So I need  finding some button with text like "force stop" by regular expression and click it again. Then the COC would be killed. （"强 停 结 行" in Chinese have similar meanings to "force stop"）

```javascript
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
```

​		This function is used to click certain point and sleep for one second. Be sure to stop for a while when you do click operation as the mobile needs time answering.

```
function clickAndSleep(x,y){
    click(x,y)
    sleep(1000)
}
```

​		This function is used to donate the troops and siege machines. You should invoke this function after you click the donate button in chat page. "p" is for checking whether there is a donatable square. If so, using image.clip to clip the screenshot to get the target. Then looking though all the local picture  to find the type of donation. Do the donation and record the index(update donate_troop). At last invoke itself and repeat the above progress util there is nothing can donate.

```javascript
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
                    toastLog("find it in troop_pic! index:"+i);
                    donate_troop.push(i);
                    sleep(1000);
                    findIt = true;
                    break;
                }
            }
        }
        if(!findIt){
            toastLog("can not find it in troop_pic")
        }
        clickAndSleep(p.x+50, p.y-50);
        target.recycle()
        doHelpTroop();
    }
    
}
```

​		This function is used to donate the spells. You should invoke this function after you click the donate button in chat page. "p" is for checking whether there is a donatable square. If so, using image.clip to clip the screenshot to get the target. Then looking though all the local picture  to find the type of donation. Do the donation and record the index(update donate_spell). At last invoke itself and repeat the above progress util there is nothing can donate.

```javascript
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
                    toastLog("find it in spell_pic! index:"+i);
                    donate_spell.push(i);
                    sleep(1000);
                    findIt = true;
                    break;
                }
            }
        }
        if(!findIt){
            toastLog("can not find it in spell_pic");
        }
        clickAndSleep(p.x+50, p.y-50);
        target.recycle()
        doHelpSpell();
    } else {
        
    }
    
}
```

​		This function should be invoked in the chat page. It can find the "donate" button and  click it, then invoke doHelpSpell and doHelpTroop. After that, it would check whether there is "quick donate" button. If so, then click to close this donation page. If not, this means that this donation is over and it is already in the chat page.

```javascript
function do_help(){
    let p = findImage(captureScreen(), help);
    if (p) {
        clickAndSleep(p.x+100, p.y+30);
        doHelpTroop();
        doHelpSpell();
        let pp = findImage(captureScreen(), quick_help);
        if(pp){
            clickAndSleep(helpOff_x,helpOff_y);
        }
    } else {
        toastLog("can not find the donate button ");
    }

}
```



​		This function is used to supply the things you have given off. First I'd like to explain the usage of break_point: Occasionally COC would launch new activity with new troop and new spell. By then the index of the used troop or spell would bein a mess. So I use the break point to solve this problem. When there is no activity, the value of them would be -1. Otherwise, it would be the index of the new appearing troop or spell. The logic of code can modify its behavior due to break point.

​		The rough progress is as follows: At beginning open the page where we can train. Then sort the list of donate_troop and donate_spell due to the value(index of the troop or spell). Then train the normal troop,then slip the screen to train dark troop. Then make the siege machine. Do the same thing to the spell. Finally clear two lists and close the training page. 

```javascript
function moreResource(){
    clickAndSleep(trainOn_x,trainOn_y);
    clickAndSleep(trainTroop_x,trainTroop_y);
    donate_troop.sort((a,b)=>Number(a)-Number(b));
    donate_spell.sort((a,b)=>Number(a)-Number(b));
    var toDark = false;
    var toMachine = false;
    var break_point_troop = 7;//used to record some activity troop
    var break_point_spell = 1;//used to record some activity spell
    if(break_point_troop==0){
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
    }
    donate_troop.length = 0;

    clickAndSleep(makeSpell_x,makeSpell_y);
    if(break_point_spell==0){
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
```

​		This function is invoked in chat page. It is used for click the button to return to bottom of the chat. To make sure the button is complete, we firstly up slip the chat page.

```javascript
function chat_to_lowest(){
    //make sure the image is complete
    swipe(350, 350, 350, 750, 500);
    sleep(2000)
    let p = findImage(captureScreen(), chat_lowest);
    if (p) {
        clickAndSleep(p.x+30, p.y+30);
    }
}
```

​		This function is used to find the next request in the chat page.
```javascript
function chat_to_up(){
    let p = findImage(captureScreen(), chat_up);
    if (p) {
        clickAndSleep(p.x+10, p.y+30);
        return true;
    } else {
        toastLog("no need to up");
        return false;
    }
}
```

​		This function is used to judge whether the current page is in the first page of COC. Because it is difficult to extract the unique feature in first page,so I use the following strategy:  Click the left bottom button, then we check whether there are tree modes to choose. If so, then click to back and return true indicating the script is normal. If not, return false,indicating the script is out of expectancy.

```javascript
function in_coc(){
    clickAndSleep(attack_x,attack_y);
    let p = findImage(captureScreen(), attack_mode);
    if (!p) {
        return false;
    } else {
        clickAndSleep(most_right_x,most_right_y);
        return true;
    }

}
```

​		Finally, we step into the main function. The main function would attempt to open the COC three times. If all fail, end the script.

​		If success, read the system time and record it in minutes.

​		Then move into a long while(true) circulation, aiming to listening the chat page, do donation and supply. We should step out of it in following two circumstance:

​		First, every circulation we would read the current time, the do subtraction to the initial launch time we can know how long the script already run. If the duration longer than duration_in_minute(Because we can not be online greater than 4 hours one time, so we need to set a time less than 4 hours to be off line by ourselves. Waiting for a few time, then run the script again. Auto.js can run the script in appointed time so we can set 4 hours as interval in advance while the script would kill itself after running for 3hour40min), jump out.

​		Second, every circulation we judge whether the page is still in the first page. If not, we are in a wrong situation, jump out.

​		After jumping out, we release the resource and close the COC.

```javascript
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
    
    var start_time = new Date();
    var start_time_in_minute = start_time.getHours()*60+start_time.getMinutes()

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
        toastLog("I am going to sleep 60 seconds!")
        sleep(60000);
        var current_time = new Date();
        var current_time_in_minute = current_time.getHours()*60+current_time.getMinutes()
        if(current_time_in_minute-start_time_in_minute>duration_in_minute){
            break;
        }else{
            toastLog(current_time_in_minute-start_time_in_minute);
        }
        if(!in_coc()){
            break;
        }
    }

    close_and_recycle("部落冲突");
}
```



## Contact me

​		If you have any idea please feel free to contact me：ywhf00@gmail.com

​		Lastly, if this project gives you some help, can you give me a star？ :heart:

