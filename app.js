"use strict";

const request = require('request')
var data = require('./data.json');
const propGenerator = require('./propGenerator');
const { ipcRenderer } = require('electron')
const validator = require('validator');

$(() => {
    $('.next-btn').hide();
    $('.resultBtn').hide()
})

/*
const url = 'https://ansys-project.ir/cn/nz/data.json'
let resp;

request({url , json:true}, (error , response)=>{
    if(error) alert('error');
    else {
        resp = response.body;
    }
})*/

let start = 84, end = 87 ;
let I, E, N, S, F, T, P, J;
 I = E = N= S = F = T=P = J =0 ;
// E = 19, I = 17, N = 16, S = 17, F = 20, T = 16, P = 12, J = 13;

// 19  17  16 17  20  16 16  15
let l1, l2, l3, l4;
let darsadI, darsadE, darsadN, darsadS, darsadF, darsadT, darsadP, darsadJ;
// darsadI = darsadE = darsadN= darsadS = darsadF = darsadT= P = J =0 ;


$('.test-btn').on('click', () => {
    $('.next-btn').show();
    $('.test-btn').hide();
    $('.titr').hide();
    $('.all-btn').remove();


    for (var i = start; i < end; i++) {
        var q2 = `<div class="q ">     
        <div class="question">
            <span class="qid">${data[i].id} - </span>
            ${$.trim(data[i].soal)}
        </div>
        <div class="radioS">
        <label class="jlb">${$.trim(data[i].javab1)}
            <input type="radio" id="j1"name="qa${data[i].id}" >
            <span class="checkmark"></span>
            </label>
        <br>
        <label class="jlb">${$.trim(data[i].javab2)}
        <input type="radio" id="j2"  name="qa${data[i].id}" > 
        <span class="checkmark"></span>
        </label>
        </div> 
        </div>`

        $('.qa-box').append(q2);
        $('.q').hide()
    }
    $('.q').fadeIn(200)


    $('.start-section').remove()
    //return false;
})
let btn_bool
var onOff_arr = [];
$('.next-btn').on('click', () => {

    if (end < 88 && start < 90) {
        var counter = 0;

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
                }
                else if (index > 44 && index <= 68) {

                    if (jId == "j1") T += data[i].nomre1;
                    else if (jId == "j2") F += data[i].nomre2;
                }
                else if (index > 68 && index <= 87) {

                    if (jId == "j1") J += data[i].nomre1;
                    else if (jId == "j2") P += data[i].nomre2;
                }


            }
            if (end == 87) end +=6;

            $('.q').remove()
            start += 6;
            end += 6;
            if (start == 90) {
                $('.next-btn').remove()



                if (E > I) {
                    l1 = 'E';
                    darsadE = Math.round((E / 25) * 100);
                    darsadI = 100 - darsadE;
                    onOff_arr.push('on')
                    onOff_arr.push('off')
                }
                else {
                    l1 = 'I'
                    darsadI = Math.round((I / 25) * 100);
                    darsadE = 100 - darsadI;
                    onOff_arr.push('off')
                    onOff_arr.push('on')
                }

                if (S > N) {
                    l2 = 'S'
                    darsadS = Math.round((S / 19) * 100);
                    darsadN = 100 - darsadS;
                    onOff_arr.push('on')
                    onOff_arr.push('off')
                }
                else {
                    l2 = 'N'
                    darsadN = Math.round((N / 19) * 100);
                    darsadS = 100 - darsadN;
                    onOff_arr.push('off')
                    onOff_arr.push('on')
                }

                if (T > F) {
                    l3 = 'T'
                    darsadT = Math.round((T / 23) * 100);
                    darsadF = 100 - darsadT
                    onOff_arr.push('on')
                    onOff_arr.push('off')
                }
                else {
                    l3 = 'F'
                    darsadF = Math.round((F / 23) * 100);
                    darsadT = 100 - darsadF

                    onOff_arr.push('off')
                    onOff_arr.push('on')
                }

                if (J > P) {
                    l4 = 'J'
                    darsadJ = Math.round((J / 18) * 100);
                    darsadP = 100 - darsadJ
                    onOff_arr.push('on')
                    onOff_arr.push('off')
                }
                else {
                    l4 = 'P'

                    darsadP = Math.round((P / 18) * 100);
                    darsadJ = 100 - darsadP

                    onOff_arr.push('off')
                    onOff_arr.push('on')
                }


                $('.qa-box').removeClass('grid-container')
                $('.resultBtn').show()

                var inputs = `
                    <div class="getEmail" >
                        <label>
                            لطفا ابتدا ایمیل خود را وارد کنید<br/>
                            <input type="text" class="email-txt">
                        </label>   
                        
                        <div class="resultBtn">
                             <button class="disable-btn-res" style="vertical-align:middle"><span>نتایج </span></button>
                        </div>
                    </div>
                `

                $('.qa-box').append(inputs)

                 btn_bool = false;


                 $('.resultBtn').on('click', () => {
                    console.log(btn_bool)
                    if(btn_bool){
                        $('.resultBtn').hide()
                        $('.res-btn').show();
                        $('.getEmail').remove()
                        add_flag();
                        onHoverWord()
                        prvBtn.addClass('disable');
                        nextBtn.addClass('enable')
                    }
                
                })


                document.querySelector('.email-txt').addEventListener('keyup',function(e){
                    
                    const key = e.key; // const {key} = event; ES6+
                    if (key === "Backspace") {
                        console.log('backspace shot')
                    }
                    if(validator.isEmail($('.email-txt').val())){
                        $('.resultBtn button').addClass('enable-btn-res').removeClass('disable-btn-res')
                        btn_bool = true;
                        // console.log($(this).text())
                    }
                    else if($('.email-txt').val().length === 0)
                        $('.resultBtn button').addClass('disable-btn-res').removeClass('enable-btn-res')
                    else
                        $('.resultBtn button').addClass('disable-btn-res').removeClass('enable-btn-res')
                
                        
                })


            }
            if (end > 87) end = 87;
            for (var i = start; i < end; i++) {
                var q2 = `<div class="q">     
                <div class="question">
                <span class="qid">${data[i].id} - </span>${$.trim(data[i].soal)}</div>
                   <div class="radioS">
                    <label class="jlb">
                            ${$.trim(data[i].javab1)} 
                            <input type="radio" name="qa${data[i].id}" id="j1">
                            <span class="checkmark"></span>
                            </label> 
                    <br>
                    <label class="jlb">
                            ${$.trim(data[i].javab2)} 
                            <input type="radio"  name="qa${data[i].id}" id="j2"> 
                            <span class="checkmark"></span>
                            </label>
                   </div> 
                </div>`
                $('.qa-box').append(q2)
                $('.q').hide()
            }

            $('.q').fadeIn(200)
            console.log( E , I , N , S , F , T ,P , J)
        } else
            alert('لطفا ابتدا به تمامی سوالات پاسخ دهید!')
    }

    
})

let prvBtn = $('.prev-res')
let nextBtn = $('.next-res')




$('.next-res').on('click', () => {
    if (prvBtn.hasClass('disable')) {
        $('.flags').remove();
        $('.next-res').addClass('disable ').removeClass('enable')

        $('.qa-box').append(`
            <div class="pictures"> در صفحه جدید قرار دارم!
            <a href="#" class="reloader"> Reload App! </a>
            </div>
            
        `)

        $('.reloader').click(()=>{
            ipcRenderer.send('reload', 'ping')
        })

        prvBtn.addClass('enable ').removeClass('disable')
    }
})

prvBtn.click(() => {
    if (nextBtn.hasClass('disable')) {
        $('.pictures').remove()
        add_flag()
        onHoverWord()
        nextBtn.addClass('enable').removeClass('disable')
        prvBtn.addClass('disable').removeClass('enable')
    }
})

let flagDescrib = propGenerator.flagObj
let randomIndex = propGenerator.generated
let prop = $('#prop')
const onHoverWord = ()=>{
    $('.flag-word').hover(function(e){
        $('.propList').remove()
        var name = $(this).data('name');
        
        prop.append('<ul class="propList"> </ul>')
        var list = $('.propList')
        for(var i = 0 ; i < 6;i++){
            var number = i + 1
            list.append('<li> '+ number + '. ' + $.trim(flagDescrib[name].property[randomIndex.get(name)[i]].matn) +'<li>')
            
        }
        prop.removeClass('hide').addClass('show').css({top:e.pageY+'px' , left:e.pageX+'px'}).hide()
        prop.fadeIn(200)
    },function(){
           $('.propList').remove()
           prop.removeClass('show').addClass('hide')
    })
}



const add_flag = () => {
    
    $('.qa-box').append(`
    
    
    <div class="flags">
        <div class="flag-1 line"> 
            <span class="flag-word" data-name="E">  برون گرا </span>
            <span id="EDarsad"> ${darsadE}% </span>
            <span id="letter" > ${l1} </span>
            <span id="IDarsad"> ${darsadI}% </span>
            <span class="flag-word" data-name="I">  درون گرا </span>
        </div>
        <br/>
        <div class="flag-2 line"> 
            <span class="flag-word" data-name="S"> حسی </span>
            <span id="SDarsad"> ${darsadS}% </span>
            <span id="letter" > ${l2} </span>
            <span id="NDarsad"> ${darsadN}% </span>
            <span class="flag-word" data-name="N"> شهودی </span>
        </div>

        <br/>
        <div class="flag-3 line"> 
            <span class="flag-word" data-name="T"> فکری </span>
            <span id="TDarsad"> ${darsadT}% </span>
            <span id="letter" > ${l3} </span>
            <span id="FDarsad"> ${darsadF}% </span>
            <span class="flag-word" data-name="F"> احساسی </span>
        </div>
        <br/>
        <div class="flag-4 line"> 
            <span class="flag-word" data-name="J"> قضاوتی </span>
            <span class="JDarsad"> ${darsadJ}% </span>
            <span id="letter" > ${l4} </span>
            <span id="PDarsad"> ${darsadP}% </span>
            <span class="flag-word" data-name="P"> ادراکی </span>
        </div>
    </div>


`)
    $('.flag-word').each(function (index) {
        $(this).addClass(onOff_arr[index])
    })


}
