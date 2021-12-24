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


var donate_troop =new Array();//记录捐出兵种和攻城机器的编号，用于补充 record the index of donating troop and siege machine to supply them
var donate_spell =new Array();//记录捐出法术的编号，用于补充 record the index of donating spell to supply them


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

function clickAndSleep(x,y){
    click(x,y)
    sleep(1000)
}

donate_troop.push(7)
donate_troop.push(29)
moreResource();