let nameInput = document.getElementsByClassName('username')[0];
let passwordInput = document.getElementsByClassName('password')[0];
let button = document.getElementsByClassName('button')[0];

        button.onclick=function(){
                    $.ajax({
                            type:"post",
                            url:"http://localhost:2000/login",
                            data:{
                                name:nameInput.value,
                                password:passwordInput.value,
                            },
                            success:(result)=>{
                                console.log(result)
                            },
                            error:()=>{
                            },
                    })
        }
