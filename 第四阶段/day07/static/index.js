let contentContainer = document.getElementsByClassName('content-container')[0];
let modelContainer = document.getElementsByClassName('model-container')[0];

contentContainer.onclick = function(e){
    let target = e.target.className
    if(target === 'btn' ){
        modelContainer.style.display = 'flex';

    }
}
modelContainer.onclick = function(e){
    let target = e.target.className
    if(target === 'model-container' ){
        modelContainer.style.display = 'none';

    }

}