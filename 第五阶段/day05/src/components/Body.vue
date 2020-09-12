<template>
    <div>
        <div class="item-person">
                    <div class="per-info">
                        <img v-if="item.gender" src="../assets/man-svg.svg" alt="">
                        <img v-else src="../assets//woman-svg.svg" alt="">
                        <div class="per-phone">
                            <h2>{{item.phone}}</h2>
                            <h1>{{item.name}}</h1>
                        </div>
                    </div>
                <p>{{ item.time|formartTime }}</p>
            <button class="remove" @click="remove">X</button>
        </div>
    </div>
</template>

<script>

import moment from 'moment'
export default {
    name:"Body",
    props:{
        item:{
            type:Object
        },
        index:{
            type:Number 
        },
       
    },
    
    filters:{
        formartTime(value) {
        console.log(value)
        let time = moment(value)
            .locale("zh-cn")
            .format("MM-DD hh:mm:ss");
        return time;
    }
    },
    methods:{
        remove(){
            this.$emit('remove', {
                ind: this.index,
            })
        },
        
    },

    
}
</script>

<style >
    .per-phone h1,h2{
        text-align: left;
    }
</style>