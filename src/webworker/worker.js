// let worker = new Worker('worker.js')


// function getData(){
//     var data = [5,15,25,5,35,65];
//     setInterval(() => {
//         var Edata = data.map(o => o * 2)
//         return Edata;
//     }, 3000);   
// }

// self表示的是子线程自身，也就是当前worker的全局对象
// 所以可以把self替换成this,或者直接onmessage,不需要xxx.onmessage
onmessage = function (e) {
    postMessage('worker发送消息啦~')
}


