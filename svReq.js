const request = require('request')
// https://qaapp-sv.herokuapp.com/email
// const url = 'https://qaapp-sv.herokuapp.com/email'
const checkURL = 'https://qaapp-sv.herokuapp.com/status'
const url = "http://localhost:3000/email"
function fireReq(info, flags, width, height , cb) {
    // console.log(info)
    request({
        url,
        method: 'POST',
        body: { name : info.name , lastname : info.lastname , email:info.email , flag: flags, width, height },
        json: true,
        headers: { "accept": "application/json", "content-type": "application/json" }
    }, function (error, response, body) {
        if (!error){
            alert('سپاس!ایمیل شما با موفقیت ثبت شد!')
            cb(1)
        }
        else {
            alert('خطا در هنگام ثبت ایمیل، لطفا اتصال اینترنت خود را بررسی کنید یا از طریق فرم تماس مشکل را گزارش دهید.')
            cb(0)
        }
       
    })

}

function statusCheck(cb) {
    request({
        url: checkURL,
        method: 'get',
        json: true,
        headers: { "accept": "application/json", "content-type": "application/json" }
    }, function (error, response, body) {
        if (!error) {
            // console.log(body)
            if (body.version == "1.0.0")
                cb(true)
            else
                cb(false)
        }
        else {
            console.log(error)
        }
    })

}



module.exports = { fireReq, statusCheck }