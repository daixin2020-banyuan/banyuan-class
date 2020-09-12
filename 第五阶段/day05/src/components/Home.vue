<template>

<div>
    <div class="container">
        <div class="warpper">
            <div class="top-input">
                <div class="input-model">
                    <input type="text" v-model="name" class="input1" placeholder="姓名">
                    <input type="text" v-model="phone" class="input2" placeholder="手机号">
                    <span class="sex-box">
                        <span class="span1" @click="focusfns1"  ></span>
                        <span class="span2" @click="focusfns2" ></span>
                    </span>
                </div>
                <button @click="add">添加</button>
        </div>
            <Header></Header>
            <div>
                <div class="all-count">{{total}} 位联系人</div>
            </div>
            <div v-for="(item,index) in list" :key=" 'list'+ index " >
                <Body :item="item" :index="index" @remove="removeItem" ></Body>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
// import Header from './Header';
import Body from './Body';

console.log(	  typeof (  new Date().getTime() ))


export default {
    name:"Home",
    components:{
        // Header,
        Body
    },
    data(){
        return{
            name:'',
            phone:'',
            flag:'true',
            list:[
                {phone:13089890000,name:"小猴子",gender:true,time:1599895001611},
                {phone:13089890000,name:"小猴子",gender:false,time:1599895001611},
                {phone:13089890000,name:"小猴子",gender:false,time:1599895001611},
            ]
        }
    },
    computed:{
        total(){
            return this.list.length
        }
    },
    methods:{
        add(){
            let time = new Date().getTime()
            if(this.flag){
                this.list.push({phone:this.phone,name:this.name,gender:true,time:time})
            }else{
                this.list.push({phone:this.phone,name:this.name,gender:false,time:time})
            }
            if(this.phone !== '' && this.name !== ''){
                this.phone = ''
                this.name = ''
                this.focusfns1()
            }
        },
        focusfns1(){
            let span1 = document.getElementsByClassName('span1')[0];
            let span2 = document.getElementsByClassName('span2')[0];
            span1.style.border = "solid 2px #fff"
            span2.style.border = "solid 2px #f8b8cd";
            this.flag=true
        },
        focusfns2(){
            let span1 = document.getElementsByClassName('span1')[0];
            let span2 = document.getElementsByClassName('span2')[0];
            span1.style.border = "solid 2px  blue";
            span2.style.border = "solid 2px #fff"
            this.flag=false
        },
        removeItem(data){
            console.log("data=====",data.ind)
            this.list.splice(data.ind,1)
        }
       
    }
    
}
</script>
<style>
     * {
            box-sizing: border-box;
        }
        .container{
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0
        }
        .warpper{
            min-width: 320px;
            max-width: 500px;
            margin: 0 auto;
            height: 100%;
            background-color: #fff;
        }
        .top-input{
            width: 100%;
            height: 44px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f97197;
            padding: 0 10px;
        }
        .input-model{
            font-size: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .top-input .input1{
            width: 64px;
            height: 30px;
            padding: 0 4px;
            border: none;
            outline: none;
            border-radius: 2px;
            font-size: 14px;
        }
        .top-input .input2{
            width: 120px;
            height: 30px;
            border: none;
            outline: none;
            padding: 0 3px;
            border-radius: 2px;
            margin-left: 6px;
            font-size: 14px;
        }
        .top-input button{
            width: 60px;
            height: 30px;
            line-height: 14px;
            font-size: 14px;
            border: none;
            background: #fff;
            color: #ee7096;
            font-weight: 400;
            border-radius: 4px;
        }
        .all-count{
            width: 100%;
            height: 30px;
            background-color: #f3f3f3;
            line-height: 30px;
            font-size: 14px;
            color: #666;
            padding: 0 10px;
        }
        .item-person{
            position: relative;
            padding-right: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 10px 60px 10px 10px;
            border-bottom: solid 1px #e2e2e2;
        }
        .item-person p{
            font-size: 13px;
            color: #999;
        }
        .per-info{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .per-info img{
            width: 44px;
            height: 44px;
        }
        .per-info h1{
            font-size: 14px;
            color: #666;
            font-weight: 400;
            margin: 0;
        }
        .per-info h2{
            font-size: 16px;
            color: #1c1c1c;
            font-weight: bold;
            margin: 0;
        }
        .per-phone{
            padding-left: 10px;
        }
        .remove{
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translate(0, -50%);
            border: none;
            background: none;
            color: #9e9c9c;
            font-size: 16px;
            line-height: 16px;
            outline: none;
        }
        .sex-box{
            display: inline-block;
            height: 30px;
            width: 30px;
            background: #fff;
            margin-left: 6px;
            border-radius: 2px;
            font-size: 0;
        }
        .span1{
            display: block;
            width: 100%;
            height: 50%;
            font-size: 12px;
            background-color: blue;
            border: solid 2px #fff;
            text-align: center;
            line-height: 15px;
        }
        .span2{
            display: block;
            width: 100%;
            height: 50%;
            font-size: 12px;
            background-color:#f8b8cd;
            border :solid 2px #f8b8cd

        }
        
</style>