"use strict";

var data = require('./data.json');
const propGenerator = require('./propGenerator');
const { ipcRenderer } = require('electron')
const validator = require('validator');
const fs = require('fs')
const server = require('./svReq')
const $ = require('jquery')
const particles = require('particles.js')
let hist
$(() => {
    // particlesJS.load('pr', './particlesjs-config.json', function() {
    //     console.log('callback - particles.js config loaded');
    //   });
    $('#history').hide();
    hist = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + '\\history.json' ).toString())
    if(hist.length != 0){
        $('#history').show();
    }
    // console.log(JSON.parse(ddd[0]))
    server.statusCheck((sts)=>{
        if(!sts){
            $('body').append(`
            <dialog class="statusBox" open>
             <p>نسخه جدید نرم افزار آیینه منتشر شد !</p>
             <a id="dl">دانلود</a><br>
             <a id="close"> بستن </a>
             </dialog>
            `)
            $('.main-menu , footer').css({ filter: 'blur(8px)'  })
            $('.start-btn').hide()
            // $('.statusBox').css({filter: 'unset'})
            $('#dl').click(()=>{
                ipcRenderer.send('openPage' , 'https://dl.hasanabaadi.com')
                $('.main-menu , footer').css({ filter: 'none'  })
                $('.start-btn').show()
                $('.statusBox').removeAttr('open')
            })

            $('#close').click(()=>{
                // ipcRenderer.send('openPage' , 'http://dl.hasanabaadi.com')
                $('.main-menu , footer').css({ filter: 'none'  })
                $('.start-btn').show()
                $('.statusBox').removeAttr('open')
            })
         }
    })
    // console.log(sts)
    

    $('.resultBtn').hide()
        // $('#wrapper').hide()
    $('.rel').hide()


    // $('#guide').click(() => {
    //     console.log(4444444444)
    //     $('#guide').attr('href','Guide.html')
    //     // location.href = 'Guide.html'
    // })

    // $('#contact').click(() => {
    //     $('#guide').attr('href','contact.html')
    //     // location.href = 'contact.html'
    // })

})

// let start = 84, end =86;
let start = 0,
    end = 6;
let I, E, N, S, F, T, P, J;
// I = E = N = S = F = T = P = J = 0;
E = 9, I = 25, N = 21, S = 7, F = 7, T = 17, P = 14, J = 15; //INTJ
// E = 25, I = 9, N = 7, S = 24, F = 7, T = 17, P = 14, J = 27; //ESTJ
// E = 9, I = 30, N = 7, S = 24, F = 7, T = 17, P = 14, J = 27; //istj
// E = 26, I = 4, N = 12, S = 12, F = 16, T = 15, P = 16, J = 15; //ENFP

let l1, l2, l3, l4;
$('#history').click(()=>{
    $('#history').hide()
    $('footer').css({ backgroundImage: 'unset', height: 'unset' })
    $('footer span').css({ color: 'rgba(78, 78, 78, 0.541)' })
    $('.titr').hide();
    $('.all-btn').remove();
    $('.qa-box').removeClass('grid-container');
    $('.rel').show()
    $('.reloader').text("بازگشت") 

    // console.log(JSON.parse(hist[0]))
    for(let i = 0 ; i< hist.length ; i++){
        $('.qa-box').append(`
        <div class="his">
            <div class="flag" > Flag: ${JSON.parse(hist[i]).flag} </div>
            <div class="email" > Email: ${JSON.parse(hist[i]).email} </div>
            </div>
        `)
    }
})

$('.start-btn').on('click', () => {
    $('#guide').attr('href','')
    // ipcRenderer.send('openPage' , 'http://hasanabaadi.com')
    $('footer').css({ backgroundImage: 'unset', height: 'unset' })
    $('footer span').css({ color: 'rgba(78, 78, 78, 0.541)' })
    $('#history').hide()
    // goOnResult();
    $('.rel').show()
    $('.next-btn').show();
    $('.start-btn').hide();
    $('.titr').hide();
    $('.all-btn').remove();
    onMenuClick()
        // I = E = N = S = F = T = P = J = 0;
    $('.navbar a').removeAttr('href')
    console.log($('.navbar a'))
    for (var i = start; i < end; i++) {
        $('.qa-box').append(qsGenerator(data[i])).scrollTop(0);
        $('.q').hide()
    }
    $('.q').fadeIn(200)

})
let btn_bool
var darsads = [];
let emails;
$('.next-btn').on('click', () => {

    if (end < 88 && start < 90) {
        var counter = 0;
        // onMenuClick()
        for (var i = start; i < end; i++)
            for (var j = 0; j < 2; j++)
                if ($(`[name="qa${i + 1}"]`)[j].checked)
                    counter++;

        if (end == 87)
            if (counter === 3)
                counter = 6;

        if (counter === 6) {
            for (var i = start; i < end; i++) {
                var jId
                for (var j = 0; j < 2; j++)
                    if ($(`[name="qa${i + 1}"]`)[j].checked) {
                        jId = $(`[name="qa${i + 1}"]`)[j].id;
                        break;
                    }
                var index = data[i].id

                if (index <= 25) {
                    if (jId == "j1") E += data[i].nomre1;
                    else if (jId == "j2") I += data[i].nomre2;

                } else if (index > 25 && index <= 44) {

                    if (jId == "j1") S += data[i].nomre1;
                    else if (jId == "j2") N += data[i].nomre2;
                } else if (index > 44 && index <= 68) {

                    if (jId == "j1") T += data[i].nomre1;
                    else if (jId == "j2") F += data[i].nomre2;
                } else if (index > 68 && index <= 87) {

                    if (jId == "j1") J += data[i].nomre1;
                    else if (jId == "j2") P += data[i].nomre2;
                }

            }
            if (end == 87) end += 6;

            $('.q').remove()
            start += 6;
            end += 6;
            if (start == 90) {
                $('.next-btn').remove()
                goOnResult()
            }
            if (end > 87) end = 87;
            for (var i = start; i < end; i++) {

                $('.qa-box').append(qsGenerator(data[i]))
                $('.q').hide()
                $('body').scrollTop(0)
            }

            $('.q').fadeIn(200)
            console.log(E, I, N, S, F, T, P, J)
        } else
            alert('لطفا ابتدا به تمامی سوالات پاسخ دهید!')
    }
})
const path = require('path')
function goOnResult() {
    // onMenuClick()
    if (E > I) {
        l1 = 'E';
        darsads.push(Math.round((E / 32) * 100))
        console.log(Math.round((E / 32) * 100), 'E')
    } else {
        l1 = 'I'
        darsads.push(Math.round((I / 37) * 100))
        console.log(Math.round((I / 37) * 100), 'I')
    }

    if (S > N) {
        l2 = 'S'
        darsads.push(Math.round((S / 27) * 100))
        console.log(Math.round((S / 27) * 100), 'S')
    } else {
        l2 = 'N'
        darsads.push(Math.round((N / 28) * 100))
        console.log(Math.round((N / 28) * 100), 'N')
    }

    if (T > F) {
        l3 = 'T'
        darsads.push(Math.round((T / 24) * 100))
        console.log(Math.round((T / 24) * 100), 'T')
    } else {
        l3 = 'F'
        darsads.push(Math.round((F / 28) * 100))
        console.log(Math.round((F / 28) * 100), 'F')
    }

    if (J > P) {
        l4 = 'J'
        darsads.push(Math.round((J / 28) * 100))
        console.log(Math.round((J / 28) * 100), 'J')
    } else {
        l4 = 'P'
        darsads.push(Math.round((P / 31) * 100))
        console.log(Math.round((P / 31) * 100), 'P')
    }
    darsads = darsads.reverse()

    $('.qa-box').removeClass('grid-container')
    $('.resultBtn').show()

    var inputs = `
    <div class="getEmail" >

            <h3>
                    لطفا ابتدا نام و نام خانوادگی و ایمیل خود را وارد کنید.<br/>
                    <span id="buginfo">(درصورتی که نمیتوانستید ایمیل خود را وارد کنید برنامه را مینیمایز و دوباره باز کنید)</span>
                </h3>
                <div class="getInfoBox">
                    <form action="">
                    <input type="text" class="email-txt" id="nametxt" placeholder="نام" ><br/>
                    <input type="text" class="email-txt" id="lasttxt" placeholder="نام خانوادگی" ><br/>
                    <input type="text" class="email-txt" id="emailTextBox" placeholder="ایمیل" >
                    <br/>
                    </form>
                </div>
        ${enableCheckBox()}


        <div class="resultBtn">
        <button class="disable-btn-res" style="vertical-align:middle"><span>نتایج </span></button>
   </div>
    </div>`

/// <span id="buginfo">(درصورتی که نمیتوانستید ایمیل خود را وارد کنید برنامه را مینیمایز و دوباره باز کنید)</span>
    $('.qa-box').append(inputs)
    $('#nametxt').focus()
    $('.email-txt').hover(()=>  {$('#buginfo').stop().fadeIn(160)} , ()=>  {$('#buginfo').stop().fadeOut(130)})
    // $('.email-txt').focus()
    btn_bool = false;
    let check_bool = true;
    // console.log(require('path').resolve(__dirname, '..'))
   // console.log(fs.readFileSync(__dirname + '../email.txt').toString())
   let infoObj= {} ;
    $('.resultBtn').on('click', () => {
        
        if (btn_bool) {
            if (navigator.onLine === true) {
                if (check_bool) {
                    
                    infoObj.name = $('#nametxt').val()
                    infoObj.lastname = $('#lasttxt').val()
                    infoObj.email = $('#emailTextBox').val()
                   
                }

                $('.resultBtn').hide()
                $('.res-btn').show();
                $('.getEmail').remove()
                add_flag();
                onHoverWord()
                const flagss = l1 + l2 + l3 + l4
                // console.log(infoObj ,$('#emailTextBox').val() )
                // console.log(server)
                server.fireReq(infoObj, flagss, window.screen.availWidth, window.screen.availHeight , (res)=>{
                    if(res === 1) {
                          fs.writeFileSync(path.resolve(__dirname, '..') + '\\email.txt', infoObj.email)
                          let saveObj = {flag : flagss , email : infoObj.email};
                          let history = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..') + '\\history.json').toString())
                          console.log(history)
                          history.push(JSON.stringify(saveObj))
                          fs.writeFileSync(path.resolve(__dirname, '..') + '\\history.json', JSON.stringify(history))
                          console.log(history)
                          //fs.appendFileSync(path.resolve(__dirname, '..') + '\\email.txt', infoObj.email)
                        }

                })
                // console.log(checking)
                // 

                prvBtn.addClass('disable');
                nextBtn.addClass('enable')

            } else
                alert('لطفا ابتدا به اینترنت متصل شوید!')
        }

    })


    const chck = $('#j1')

    chck.on('change', (e) => {
        if (event.target.checked) {
            $('.resultBtn button').addClass('enable-btn-res').removeClass('disable-btn-res')
            $('.email-txt').attr('disabled', 'disabled')
            btn_bool = true;
            check_bool = false;
            infoObj.email = fs.readFileSync(path.resolve(__dirname, '..') + '\\email.txt').toString()
            infoObj.lastname = 'NULL'
            infoObj.name = 'NULL'
        } else {
            $('.resultBtn button').addClass('disable-btn-res').removeClass('enable-btn-res')
            btn_bool = false;
            check_bool = true;
            $('.email-txt').removeAttr('disabled')
        }
    })

    document.querySelector('.getInfoBox form').addEventListener('keyup', function(e) {
        // console.log(1)
        let iambool = true;
        let inputs = $('.getInfoBox form input');
        for(let i = 0; i < inputs.length ; i++ ){
            if(inputs[i].value.length === 0){
                iambool = false;
                break;
            }
        }
        // console.log(iambool , 'bool')
        if (validator.isEmail($('#emailTextBox').val()) && iambool) {
            $('.resultBtn button').addClass('enable-btn-res').removeClass('disable-btn-res')
            btn_bool = true;
        } else if ($('#emailTextBox').val().length === 0 )
            $('.resultBtn button').addClass('disable-btn-res').removeClass('enable-btn-res')
        else
            $('.resultBtn button').addClass('disable-btn-res').removeClass('enable-btn-res')

    })
}

const qsGenerator = (data) => {
    var q2 = `<div class="q ">     
            <div class="question">
                <span class="qid">${data.id} - </span>
                ${$.trim(data.soal)}
            </div>
            <div class="radioS">
            <label class="jlb">${$.trim(data.javab1)}
                <input type="radio" id="j1"name="qa${data.id}" >
                <span class="checkmark"></span>
                </label>
            <br>
            <label class="jlb">${$.trim(data.javab2)}
            <input type="radio" id="j2"  name="qa${data.id}" > 
            <span class="checkmark"></span>
            </label>
            </div> 
            </div>`
    return q2;
}

function enableCheckBox() {

    try {
        const used = fs.readFileSync(path.resolve(__dirname, '..') + '\\email.txt')
        if (used.length !== 0) {
            return `
            <div class="email-qs">
            
            <label class="jlb">
           
            <input type="checkbox" id="j1">
            <span class="checkmark"></span>
                </label>
                <p>
                آیا میخواهید با ایمیل ${used} ادامه دهید؟ 
            </p>

            </div>
            `
        } else {
            return ''
        }
    } catch (error) {
        console.log(error)
    }

}

var prvBtn = $('.previous')
let nextBtn = $('.next')
let avatarsTexts = propGenerator.pictures_Text
$('.next').on('click', () => {
    if (prvBtn.hasClass('disable')) {

        $('#wrapper').hide();

        $('#wrapper').removeClass('animated zoomIn')
        $('.next').addClass('disable ').removeClass('enable')
        $('.res-info2').hide()

        $('.qa-box').append(`
        <div class="pictures"> 

        <div class="picture1"> 
        <img src="data/pictures/${l1+l2+l3+l4}.png" width="205px" height="270px">
        <div class="imgtxt"> 
        ${avatarsTexts[l1+l2+l3+l4].avatar}
        </div>
        </div>

        <div class="picture2 "> 
        <img src="data/jobs/${l1+l2+l3+l4}.png" >
        <div class="imgtxt"> 
        ${avatarsTexts[l1+l2+l3+l4].job}
        </div>
        </div>

        <div class="picture3"> 
        <img src="data/sports/${l1+l2+l3+l4}.png">
        <div class="imgtxt">
        ${avatarsTexts[l1+l2+l3+l4].sport}
        </div>
        </div>

        </div>

    `)
        $('.pictures > div').addClass('animated fadeInDown')

        prvBtn.addClass('enable').removeClass('disable')
    }
})

$('.reloader').click(() => {
    ipcRenderer.send('reload')
})

prvBtn.click(() => {
    if (nextBtn.hasClass('disable')) {
        $('.pictures').remove()

        $('.res-info2').show()
        add_flag()

        nextBtn.addClass('enable').removeClass('disable')
        prvBtn.addClass('disable').removeClass('enable')
    }
})

let flagDescrib = propGenerator.flagObj
let randomIndex = propGenerator.generated

let prop = $('#prop')
const onHoverWord = () => {
    $('.progress').hover(function(e) {
        $('.propList').remove()
        var name = $(this).data('letter');

        prop.append('<ul class="propList"> </ul>')
        var list = $('.propList')
        for (var i = 0; i < 6; i++) {
            var number = i + 1
            list.append('<li> ' + number + '. ' + $.trim(flagDescrib[name].property[randomIndex.get(name)[i]].matn) + '<li>')
        }
        prop.removeClass('hide').addClass('show').css({ top: e.pageY + 'px', left: e.pageX + 'px' }).hide()
        prop.fadeIn(200)
    }, function() {
        $('.propList').remove()
        prop.removeClass('show').addClass('hide')
    })
}

let wrapBool = false

const add_flag = async() => {

    const lts = [l4, l3, l2, l1]

    if (!wrapBool) {
        const wrapper = await progressBarRes()
        $('.qa-box').append(wrapper)
        $('.qa-box').append('<p class="res-info2" >برای شناختن بهتر خود به صفحه بعد مراجعه کنید!</p>')
    }

    $('#wrapper').show(50, () => {
        var max = -219.99078369140625;
        $('.progress').each(function(index) {
            let $this = $(this)
            $this.data('letter', lts[index])
            $this.children('.value').text(lts[index])
            $this.children('.text').text(darsads[index] + '%')
            $this.data('progress', darsads[index])
            $this.children('.fill').attr('style', 'stroke-dashoffset: ' + ((100 - darsads[index]) / 100) * max);
            $this.children('.fill').css({ stroke: flagDescrib[lts[index]].color })
            // console.log(darsads[index])

        })
        onHoverWord()
    })


}


const onMenuClick = () => {

    $('#guide').click(() => {
        const conf = window.confirm("آیا مطئنید میخواهید از قسمت آزمون خارج شوید؟")
        // console.log(conf)
        // console.log(2222222222)
        if (conf)
           location.href = 'Guide.html'
    })

    $('#contact').click(() => {
        const conf = confirm("آیا مطئنید میخواهید از قسمت آزمون خارج شوید؟")
        if (conf)
            location.href = 'contact.html'
    })
}

const progressBarRes = () => {
    wrapBool = true
    return new Promise((resolve, reject) => {
        resolve(
            `
            <div id="wrapper" class="animated zoomIn">
            <div class="center">
            <svg class="progress blue noselect" data-letter="X" data-progress="65" x="0px" y="0px"
                viewBox="0 0 80 80">
                <path class="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                <path class="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                <text class="value" id="val4" x="50%" y="55%">0%</text>
                <text class="text" id="letter4" x="50%" y="115%">Blue</text>
            </svg>
            <svg class="progress green noselect" data-letter="X" data-letter data-progress="33" x="0px" y="0px"
                viewBox="0 0 80 80">
                <path class="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                <path class="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                <text class="value" id="val3" x="50%" y="55%">0%</text>
                <text class="text" id="letter3" x="50%" y="115%">Green</text>
            </svg>

            <svg class="progress green noselect" data-letter="X" data-progress="50" x="0px" y="0px"
                viewBox="0 0 80 80">
                <path class="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                <path class="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                <text class="value" id="val2" x="50%" y="55%">0%</text>
                <text class="text" id="letter2" x="50%" y="115%">Green</text>
            </svg>

            <svg class="progress blue noselect" data-letter="X" data-progress="70" x="0px" y="0px"
                viewBox="0 0 80 80">
                <path class="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                <path class="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                <text class="value" id="val1" x="50%" y="55%">0%</text>
                <text class="text" id="letter1" x="50%" y="115%">Green</text>
            </svg>
            </div>
            <p class="res-info1" >برای دیدن برخی از ویژگی های خود موس را بروی درصد ها ببرید!</p>
        </div>
            `
        )


    })
}