let input1 = document.getElementsByClassName('input1')[0];
let input2 = document.getElementsByClassName('input2')[0];

init();


// console.log(input);

let data = $.cookie('form') ? JSON.parse($.cookie('form')) : {};


input1.onblur=function(){
    // input.value = input1.value;
    // $.cookie("input1",JSON.stringify(input));
    // console.log(input);

    data.input1 = input1.value;

    $.cookie('form',JSON.stringify(data));

}

input2.onblur=function(){
    // input.value = input2.value;
    // $.cookie("input2",JSON.stringify(input));
    // console.log(input);

    // $.cookie('input2',input2.value);
    data.input2 = input2.value;

    console.log(data)

    $.cookie('form',JSON.stringify(data));
}


function init(){
    let data = $.cookie('form') ? JSON.parse($.cookie('form')) : {};

    console.log('data ===>',data);
    if(data){
        input1.value=data.input1||'';
        input2.value=data.input2||'';
    }


    // if($.cookie('input1')){

    //     input1.value = $.cookie('input1');
    // }

    // if($.cookie('input2')){

    //     input2.value = $.cookie('input2');
    // }
}