<template>
    <div>
        <h1>{{name}}</h1>
        <button @click="setName">Click here</button>
        <div> 
            <br/>
        <h2>Count - {{count}}</h2>
        <button @click="IncrementCount">Increment here</button>

        <h2>{{first}} {{last}}</h2>
        <button @click="changeName">changeName here</button>
        </div>
    </div>
</template>

<script>
import {ref , reactive , toRefs} from 'vue'

    export default {
        name:'Count',
        setup(){
            const count= ref(0)
            const state =reactive({
                first:'Aakash',
                last:'Patale',
            })
            function IncrementCount(){
                count.value++
            }

            function changeName(){
                state.first="abc"
                state.last="xyz"
            }
             return{
                count,
                IncrementCount,
                changeName,
                ...toRefs(state)
                
            }
        },
        data(){
            return {
                name:'Aakash',
            }
        },

        methods:{
            setName(){
                this.name ='Welcome Aakash'
            },
        },
    }
</script>

<style scoped>

</style>