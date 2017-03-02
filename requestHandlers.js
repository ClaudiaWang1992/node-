/**
 * Created by qiangxl on 2017/3/1.
 */
var exec = require("child_process").exec;
function start(response){
    console.log("Request handler 'start' was called.");
    exec("find /",{timeout:10000,maxBuffer:20000*1024},function(error,stdout,stderr){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });
}
/*function start(){
    console.log("Request handler 'start' was called.");
    function sleep(sed){
        var startTime = new Date().getTime();
        while(new Date().getTime()<startTime+sed);
    }
    sleep(1000);
    return "hello start";
}*/
function upload(response){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello upload");
    response.end();
}
exports.start = start;
exports.upload = upload;