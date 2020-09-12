<template>
    <div>
        <div class="top-input">
                <div class="input-model">
                    <input type="text" v-model="name" class="input1" placeholder="姓名">
                    <input type="text" v-model="phone" class="input2" placeholder="手机号">
                    <span class="sex-box">
                        <span class="span1"></span>
                        <span class="span2"></span>
                    </span>
                </div>
                <button @click="add">添加</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
            name:'',
            phone:''
        }
        
    },
    methods:{
        add(){
            console.log(1)
            this.$emit('add', {
                name: this.name,
                phone:this.phone,
            })
            if(this.phone !== '' && this.name !== ''){
                this.phone = ''
                this.name = ''
            }
        }
    }
    
}
</script>

<style >
    
</style>