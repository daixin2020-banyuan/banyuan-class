
let inputEle = document.getElementsByClassName('input')[0];
let resultEle = document.getElementsByClassName('result')[0];
let mockData = ['1','123','233','213','738','2773','21212','3132','qwqe1234456uio33','12233','4今天是星期四','abcde','fghijk','lmnopq','rstu','vwxyz']




inputEle.onkeyup= _.debounce((e)=>{
    let value = inputEle.value;
    let key = e.which
    let data = [];

    mockData.forEach((item)=>{
            if(_.includes(item, value)){
                data.push(item)
            }
    })
    
    resultEle.style.display = 'flex';
    inputEle.style.borderBottom = '1px solid #ccc';
    inputEle.style.borderBottomLeftRadius="0px";
    inputEle.style.borderBottomRightRadius="0px";

    let html = ''
    data.forEach((item)=>{
        html += '<div class="result-detais">' + item  + '</div>'
    })
    resultEle.innerHTML = html
    if(key === 8){
        if(!value){
            resultEle.style.display = 'none';
            inputEle.style.border = '2px solid #03a9f4';
            inputEle.style.borderBottom =  '2px solid #ccc'; 
            inputEle.style.borderBottomLeftRadius="10px"
            inputEle.style.borderBottomRightRadius="10px"
        }
    }

},500)

//input获焦
inputEle.onfocus = function(){
    let value = inputEle.value;
    inputEle.style.border = '2px solid #03a9f4'
    if(value){
        resultEle.style.display = 'flex';
        inputEle.style.borderBottom = '1px solid #ccc'; 
        inputEle.style.borderBottomLeftRadius="0px"
        inputEle.style.borderBottomRightRadius="0px"



    }
}

//input失焦
inputEle.onblur = function(){
    let value = inputEle.value;
    inputEle.style.border = '2px solid #ccc'
    if(value){
    resultEle.style.display = 'none';
    inputEle.style.borderBottom = '2px solid #ccc'; 
    inputEle.style.borderBottomLeftRadius="10px"
    inputEle.style.borderBottomRightRadius="10px"
    }
}




//窗口失焦
window.onblur = function(){
    resultEle.style.display = 'none';
    inputEle.style.borderBottom = '2px solid #ccc'; 
    inputEle.style.borderBottomLeftRadius="10px"
    inputEle.style.borderBottomRightRadius="10px"    

}





        
    
    
