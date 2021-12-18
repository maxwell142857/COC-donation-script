# 捐兵脚本使用说明（维护中）

## 免责申明
​		本脚本仅用于初学者学习auto.js框架，禁止用于其他用途。

## 维护说明

​		本脚本作者是一位部落首领，只要还在玩COC,这个脚本就会一直维护；如果本脚本停止维护，会在标题中说明。顺便给自己的部落做一个宣传，如果想体验这个脚本的效果请加入此部落：沙漠绿洲，#2L20Q9GP9


## 功能描述

​		监听部落聊天中的援军请求（军队，法术，攻城机器），如果库存（已经造出的）中有，就会执行捐兵并会补充刚才捐出的内容。也就是说，你的库存的种类决定了这个脚本能捐什么样的援军。

## 准备工作

+ 一台不会太卡的安卓操作系统手机，用于挂脚本。请确保该手机处于电源充足，并且网络流畅的环境。
+ 一个等级较高的COC账号，捐兵等级太低部落成员可不太乐意~
+ Auto.js框架，这原本是一款免费的开源软件，后来需要付费了。功能非常的强大，值得购买。（我也想过把脚本打包成.apk文件，但最终没这个做。因为我知道我写的代码内容难以适配所有机型，所以请大家结合自己的机型修改脚本的内容,在脚本说明部分会告诉大家哪些地方需要修改）[附Auto.js链接](https://hyb1996.github.io/AutoJs-Docs/#/)

## 使用脚本

+ 下载Auto.js，首先为Auto.js开启无障碍服务

+ 将help.js放置在Auto.js默认路径下

+ 将coc_picture文件夹放置在Auto.js默认路径下(即与脚本同级)

+ 运行help.js即可，该脚本会自动打开部落冲突

## 脚本说明

​		这一部分的内容将会对470行的代码进行详细的说明，请务必根据说明修改脚本使得其在自己手机可用。

​		第一部分是本脚本用到的全局变量，在注释中已对变量进行了解释，在此就不进行赘述。

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

接下来的这个函数，传入COC软件的名称。它会释放图片资源并且结束入参软件的运行。关闭软件的思路如下：首先打开操作系统的程序列表，然后找到COC,用正则去匹配带有”强行停止“之类的按钮，点击；此时我的机型会有一个确认的弹窗，再次去用正则去匹配带有”强行停止“之类的按钮，点击即可。

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

这个函数用于点击某个点并休眠一秒。注意所有的点击操作最好都带上休眠，程序的响应不是即时的，有一个延时。

```
function clickAndSleep(x,y){
    click(x,y)
    sleep(1000)
}
```

这个函数作用是增援军队和攻城机器，当点击”增援“后，出现的页面中调用这个函数。p是在匹配是否有可以增援的军队或攻城机器，如果有，使用image.clip把能增援的对象截图,然后将该截图和本地的所有法术图像做对比，找到是哪一个。接着点击该点进行增援，并记录增援了什么（更新donate_troop）。最后再次调用自己，重复以上步骤直到没有可以增援的军队或攻城机器。

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

这个函数作用是增援法术，当点击”增援“后，出现的页面中调用这个函数。p是在匹配是否有可以增援的法术，如果有，使用image.clip把能增援的法术截图,然后将该截图和本地的所有法术图像做对比，找到是哪一个。接着点击该点进行增援，并记录增援了什么((更新donate_spell)。最后再次调用自己，重复以上步骤直到没有可以增援的法术。

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

这个函数在聊天界面被调用，它会找到”增援的按钮并点击，并调用增援法术和增援部队两个函数。当增援完毕后，会看看页面是否存在“快速增援”按钮，如果有，就手动点击退出此次增援，回到聊天界面；如果没有，就说明本请求已经完成，已回到聊天界面。

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



​		这个函数用于补充已经捐出的资源。这里说一下break_point的作用：COC有时会推出活动兵种和活动法术，这样就会导致该位置以后的编号是错误的，而且我们并不能知道活动兵种或法术出现在哪里。如果没有活动，则这两个变量都为-1;否则即为活动兵种或法术出现的位置编号，后面的代码会根据这个断点进行调整。

​		大致流程如下：首先打开造兵的界面，然后把donate_troop和donate_spell中的内容按照编号排序。先造普通兵种，然后滑动屏幕到暗黑兵种，造暗黑兵种，再点击造攻城机器。法术补充同理。最后清空两个List,并关闭造兵页面。

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

​		这个函数在聊天窗口调用，用于点击返回底部的按钮。为了保证返回底部按钮显示完全能被图像匹配到，我们先有一个上滑的动作。

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

​		这个函数用于找到上一个聊天界面中的捐兵请求。
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

​		这个函数用于判断当前页面是否处在游戏进入的第一个界面。由于游戏进入的第一个界面很难提炼出关键特征，故我采用了如下方法：先点击左下角的进攻按钮，此时出现的三个模式选择按钮用于判定是否进入了游戏；如果匹配成功，则点击返回，说明在游戏的第一个界面；否则说明没有在，脚本的执行即将不符合预期。

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

​		终于，到了主函数了。主函数首先试图打开部落冲突,会尝试3次，如果3次都失败，脚本结束。

​		如果成功进入，则记录当前的系统时间。

​		接着进入一个很大的while(true)循环，用于监听部落聊天，捐兵，补充。有两种情况会跳出这个循环：

​		其一，每次循环会读取系统时间，再和第一次进入的时间做差即可得到此脚本已经运行了多少分钟了。如果时间大于duration_in_minute（由于部落冲突单次在线时间不能超过4小时，所以我们需要设定一个小于4小时的时间，自行下线并结束脚本，等一段时间后，再次运行脚本。Auto.js可以定时开启脚本，所以先在Auto.js设置好每隔4小时运行这个脚本，而这个脚本自己在运行大约3小时40分钟后就会自行结束），则跳出。

​		其二，每次循环后判断一下是否在登入游戏的第一个界面，如果不是，说明状态机不正确，跳出。

​		跳出循环后，即为释放资源，关闭部落冲突。

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



## 联系我

​		如果你有任何想法，非常欢迎和我交流：ywhf00@gmail.com

​		最后，如果这个项目帮到了你，可以给我一颗星星么:heart:

## 停止使用脚本

+ 音量上键

