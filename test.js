let attack_x = Number(180)
let attack_y = Number(950)
let most_right_x = Number(2300)
let most_right_y = Number(525)
let attack_mode = images.read("./coc_picture/attack.jpg")
function clickAndSleep(x,y){
    click(x,y)
    sleep(1000)
}
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


images.requestScreenCapture(true);

log(in_coc());
attack_mode.recycle();