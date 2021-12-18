setScreenMetrics(1080, 2312);//这行代码可以让auto.js根据手机的型号自动调整点击的位置 this line can make auto.js adjust the clicking point due to moblie's type


let help = images.read("./coc_picture/help.jpg") //增援 donate


function main() {
    let p = findImage(captureScreen(), help,{
        region: [500, 0, 300, 1080],
    })
    if(p) log("catch");
    help.recycle();
}




images.requestScreenCapture(true);
main();
