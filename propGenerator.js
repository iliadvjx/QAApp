const flag_prop = require('./tik/proper.json')

const flagObj = {
    E:{
        property: flag_prop[0],
        length: flag_prop[0].length,
        color: '#e78749'
    },
    I:{
        property: flag_prop[1],
        length: flag_prop[1].length,
        color:'#2e9de4'
    },
    N:{
        property: flag_prop[2],
        length: flag_prop[2].length,
        color:'#3ce423'
    },
    S:{
        property: flag_prop[3],
        length: flag_prop[3].length,
        color: '#d347e8'
    },
    F:{
        property: flag_prop[4],
        length: flag_prop[4].length,
        color:'#eec800'
    },
    T:{
        property: flag_prop[5],
        length: flag_prop[5].length,
        color:'#401c9f'

    },
    P:{
        property: flag_prop[6],
        length: flag_prop[6].length,
        color:'#fdfdfd'
    },
    J:{
        property: flag_prop[7],
        length: flag_prop[7].length,
        color:'#a8a8a8'
    }
}

const pictures_Text = {
    ESTP: {
        avatar:'<span class="avt-text">افراد باهوش، با انرژی و نکته سنجی که زندگی روی لبه تیغ (سخت) را واقعا دوست دارند.</span>',
        job:`
            <ul> 
                <li>مشکل گشاهای زبل</li>
                <li>پیمانکار</li>
                <li>ساختمان</li>
                <li>کارآگاه</li>
                <li>مشاور مالی</li>
                <li>افسر ارتش</li>
        `,
        sport: `
        <div class="spt">
         <h3>اسکواش</h3>
        <span class="sport-text">افرادی خودبخودی بوده و با سرعت بالا به اتفاقات واکنش نشان میدهند.</span>
        </div>
        `
    },
    ESFJ: {
        avatar:'<span class="avt-text">افراد مراقب، اجتماعی و محبوب که همیشه مشتاق به کمک کردن دیگران هستند.</span>',
        job:`
            <ul> 
                <li>مراقب ها</li>
                <li>معلم ابتدایی</li>
                <li>سرپرست کودکان</li>
                <li>مشاور تغذیه</li>
                <li>متخصص  زیبایی</li>
                <li>پرستار</li>
        `,
        sport: `
        <div class="spt">
         <h3>دو و میدانی</h3>
        <span class="sport-text">اشخاصی هماهنگ و دقیق بوده و دوست دارند از کارهایشان تقدر و تشکر شود.</span>
        </div>
        `
    },
    ESTJ: {
        avatar:'<span class="avt-text">مدیران عالی که در مدیریت افراد و موضوعات بی نظیرند.</span>',
        job:`
            <ul> 
                <li>سرپرست‌های واقع بین</li>
                <li>مدیرکل</li>
                <li>مامور بیمه</li>
                <li>نماینده فروش</li>
                <li>مدیر مدرسه</li>
                <li>سرآشپز</li>
        `,
        sport: `
        <div class="spt">
         <h3>راگبی</h3>
        <span class="sport-text">افرادی منظم، منطقی و مصمم بوده و در اجرای اهدافشان جدی هستند.</span>
        </div>
        `
    },
    ESFP: {
        avatar:'<span class="avt-text">افراد خود‌انگیخته، با انرژی و پر اشتیاق که زندگی برایشان خسته کننده نمی‌شود.</span>',
        job:`
            <ul> 
                <li>هنرمندان خوش‌مشرب</li>
                <li>سرپرست بازآفرینی</li>
                <li>مسئول خدمات پس از فروش</li>
                <li>متصدی پذیرش</li>
                <li>دستیار دندانپزشکی</li>
                <li>کافه‌دار</li>
        `,
        sport: `
        <div class="spt">
         <h3>هاکی</h3>
        <span class="sport-text">منعطف بوده و کارکردن با دیگران را دوست دارند و میخواهند در مرکز فعالیت ها باشند.</span>
        </div>
        `
    },
    ENFP: {
        avatar:'<span class="avt-text">شور و شوق، روحیه خلاق و اجتماعی داشته و همیشه دلیلی برای خندیدن پیدا میکنند.</span>',
        job:`
            <ul> 
                <li>هواداران هواخواه</li>
                <li>متخصص بازپروری</li>
                <li>مدیر رستوران</li>
                <li>معلم پیش دبستانی</li>
                <li>نویسنده گردشگری</li>
                <li>معمار فضای باز</li>
        `,
        sport: `
        <div class="spt">
         <h3>ژیمناستیک موزون</h3>
        <span class="sport-text">افرادی خیال پرداز و خلاق بوده و دائما با دنبال بهبود کارها هستند.</span>
        </div>
        `
    },
    ENTP: {
        avatar:'<span class="avt-text">ایده پردازان باهوش و کنجکاوی که نمیتوانند در مقابل چالش فکری مقاومت کنند.</span>',
        job:`
            <ul> 
                <li>مخترعان الهام‌گیر</li>
                <li>برنامه‌ریز شهری</li>
                <li>کارآفرین</li>
                <li>کارگردان/تهیه کننده</li>
                <li>واسط املاک</li>
                <li>خبرنگار</li>
        `,
        sport: `
        <div class="spt">
         <h3>جودو</h3>
        <span class="sport-text">از تدبیر خویش برای دستیابی به موقعیت های برتر استفاده میکنند.</span>
        </div>
        `
    },
    ENTJ: {
        avatar:'<span class="avt-text">رهبران با شهامت، با قوه تخیل و بسیار با اراده که همیشه یا راهی پیدا میکنند و یا آن را میسازند.</span>',
        job:`
            <ul> 
                <li>سرپرست‌های پرکار</li>
                <li>مدیرعامل</li>
                <li>مهندس</li>
                <li>وکیل</li>
                <li>معمار</li>
                <li>پزشک</li>
        `,
        sport: `
        <div class="spt">
         <h3>بوکس</h3>
        <span class="sport-text">افرادی مصمم و جدی بوده و به راحتی نکارآمدی را تشخیص داده و در ارائه ایده هایشان جدی هستند.</span>
        </div>
        `
    },
    ENJF: {
        avatar:'<span class="avt-text">رهبران کاریزما و الهام بخشی که می‌توانند با صحبت ها شنوندگان خود را هیپنوتیزم کنند.</span>',
        job:`
            <ul> 
                <li>راهنمایان الهام‌بخش</li>
                <li>منابع انسانی</li>
                <li>معلم</li>
                <li>هماهنگ کننده رویدادها</li>
                <li>روابط عمومی</li>
                <li>روحانی</li>
        `,
        sport: `
        <div class="spt">
         <h3>بسکتبال</h3>
        <span class="sport-text">از کار گروهی لذت برده و به شدت با اطرافیانشان هماهنگ بوده و دارای سرعت و چالاکی، بالایی هستند.</span>
        </div>
        `
    },
    ISTJ: {
        avatar:'<span class="avt-text">افراد عمل گرایی که ذهنیتشان براساس واقعیت بوده و در قابل اعتماد بودن آنها شکی نیست.</span>',
        job:`
            <ul> 
                <li>واقع‌گرایان مبتکر</li>
                <li>حسابدار</li>
                <li>مدیردفتر</li>
                <li>بازپرس</li>
                <li>انباردار</li>
                <li>مدیر سیستم</li>
        `,
        sport: `
        <div class="spt">
         <h3>تنیس روی میز</h3>
         <span class="sport-text">
        در کارها تمرکز بالایی داشته و یک مدعی جدی به حساب می‌آید.
         </span>
        </div>

        `
    },
    ISTP: {
        avatar:'<span class="avt-text">آزمایش کنندگان شجاع و عمل گرایی که در بسیاری از ابزارها مهارت دارند.</span>',
        job:`
            <ul> 
                <li>تکنسین‌های سازگارپذیر</li>
                <li>نجار</li>
                <li>مکانیک</li>
                <li>مهندس سخت افزار</li>
                <li>تحلیلگر عملیات</li>
                <li>افسر پلیس</li>
        `,
        sport: `
        <div class="spt">
         <h3>ورزش های سه گانه</h3>
        <span class="sport-text">افرادی انعطاف پذیر و کارآمد بوده و خود را با شرایط مختلف تطبیق می‌دهند</span>
        </div>
        `
    },
    ISFP: {
        avatar:'<span class="avt-text">هنرمندان منعطف و دوست داشتنی که همیشه آماده اکتشاف و تجربه موضوع حدیدی هستند</span>',
        job:`
            <ul> 
                <li>استادکاران حواس‌جمع</li>
                <li>تکنسین داروخانه</li>
                <li>نقشه‌بردار</li>
                <li>تعمیرکار</li>
                <li>پرستار سالمندان</li>
                <li>جواهرساز</li>
        `,
        sport: `
        <div class="spt">
         <h3>شنا</h3>
        <span class="sport-text">از دم و لحظه حال لذت می برند. دوست دارند تا فضای مخصوص به خود را داشته باشند.</span>
        </div>
        `
    },
    ISFJ: {
        avatar:'<span class="avt-text">افراد بسیار گرم و فداکار که از دیگران حمایت می کنند و همیشه آماده محافظت از افراد مورد علاقشان هستند.</span>',
        job:`
            <ul> 
                <li>یاری دخندهای پر احساس</li>
                <li>فعال اجتماعی</li>
                <li>دفتردار</li>
                <li>منشی پزشک</li>
                <li>دستیار مدیرعامل</li>
                <li>مربی کودکستان</li>
        `,
        sport: `
        <div class="spt">
         <h3>شیرجه</h3>
        <span class="sport-text">کارها را با استفاده از حافظه اش با دقت، ظرافت و حالت زیبایی انجام می‌دهد.</span>
        </div>
        `
    },
    INFP: {
        avatar:'<span class="avt-text">حس شاعرانه، مهربان و نوع دوستی دارند که همیشه مشتاق ایجاد اتفاق مثبتی هستند.</span>',
        job:`
            <ul> 
                <li>فردگرایان خلاق</li>
                <li>انیمیشن‌ساز</li>
                <li>روانشناس</li>
                <li>کتابدار</li>
                <li>مولف</li>
                <li>هنرمند هنرهای تجسمی</li>
        `,
        sport: `
        <div class="spt">
         <h3>بولینگ</h3>
        <span class="sport-text">دارای دید وسیعی بوده و با آرامش و اشتیاق فراوان به دنبال تناسب و هماهنگی می‌باشند</span>
        </div>
        `
    },
    INFJ: {
        avatar:'<span class="avt-text">با شخصیتی آرام و عرفانی، ایده آل گراهای خستگی ناپذیر و الهام بخش اند.</span>',
        job:`
            <ul> 
                <li>مشاوران دلسوز</li>
                <li>مشاوره مدرسه</li>
                <li>نویسنده</li>
                <li>طراح داخلی</li>
                <li>پزشک اطفال</li>
                <li>دامپزشک</li>
        `,
        sport: `
        <div class="spt">
         <h3>دوچرخه سواری جاده‌ای</h3>
        <span class="sport-text">فردی منظم و حمایتگر بوده و از فواید همزمانی بیشترین بهره را میبرد.</span>
        </div>`
    },
    INTJ: {
        avatar:'<span class="avt-text">اندیشمندان استراتژیک و با قوه تصور زیاد که برای هر موضوعی برنامه دارند.</span>',
        job:`
            <ul> 
                <li>مغزمتفکرهای استراتژیست</li>
                <li>توسعه‌دهنده نرم افزار</li>
                <li>نویسنده مطالب فنی</li>
                <li>قاضی</li>
                <li>جراح</li>
                <li>میکروبیولوژیست</li>
        `,
        sport: `
        <div class="spt">
         <h3>تیر اندازی</h3>
        <span class="sport-text">دارای چشم اندازی عمیق،چیزه دستی در فنون و رفتاری آرام و مصمم میباشند.</span>
        </div>`
    },
    INTP: {
        avatar:'<span class="avt-text">مخترعین نوآوری که هیچ وقت از دانش سیر نمی‌شوند.</span>',
        job:`
            <ul> 
                <li>دانشمندان مستقل</li>
                <li>مهندس نرم افزار</li>
                <li>دانشمند علوم پزشکی</li>
                <li>ریاضیدان</li>
                <li>روانپزشک</li>
                <li>استاد دانشگاه</li>
        `,
        sport: `
        <div class="spt">
         <h3>بدمینتون</h3>
        <span class="sport-text">از تجزیه و تحلیل و استفاده از منطق برای حرکات دقیق لذت می‌برند.</span>
        </div>
        `
    }
}

let generated =  new Map()
Object.keys(flagObj).forEach((item)=>{
    generateRan(flagObj[item].length,item)
})

function generateRan(length,key){
    var random = [];
    for(var i = 0;i<6 ; i++){
        var temp = Math.floor(Math.random()*length);
        if(random.indexOf(temp) == -1) random.push(temp);
        else i--;
    }
    generated.set(key,random)
}

module.exports = {generated , flagObj ,pictures_Text}