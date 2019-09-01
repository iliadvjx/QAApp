const flag_prop = require('./tik/proper.json')

const flagObj = {
    E:{
        property: flag_prop[0],
        length: flag_prop[0].length
    },
    I:{
        property: flag_prop[1],
        length: flag_prop[1].length
    },
    N:{
        property: flag_prop[2],
        length: flag_prop[2].length
    },
    S:{
        property: flag_prop[3],
        length: flag_prop[3].length
    },
    F:{
        property: flag_prop[4],
        length: flag_prop[4].length
    },
    T:{
        property: flag_prop[5],
        length: flag_prop[5].length
    },
    P:{
        property: flag_prop[6],
        length: flag_prop[6].length
    },
    J:{
        property: flag_prop[7],
        length: flag_prop[7].length
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

module.exports = {generated , flagObj}