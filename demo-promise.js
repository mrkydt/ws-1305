const Websocket = require('ws')

async function main(params) {

    const msgs = await test2()

    const url = 'wss://echo.websocket.org/';
    const ws = new Websocket(url)
    return new Promise((resolve, reject) => {
        let messStatus = []
    
        ws.on('open',  ()=>{
            for(let msg of msgs){
                ws.send(msg)
            }
            
        })
        ws.on('message', (data)=>{
            messStatus.push(data)
            if(messStatus.length==msgs.length){
                ws.close()
                resolve({msg: messStatus});
            }
        })
    }) 
}

main({}).then(function(result) {
    console.log(result)
})

function test2() {
    return new Promise((r,rj)=>{
        setTimeout(function() {
            r(['xxx', 'yyy', 'xxxx', 848383,343434,4343,43,4])
          }, 2000);
    })
}
