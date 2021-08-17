<template>
    <div>
        <input type="text" v-model="fName"/>
        <input type="text" v-model="lName"/>
        <br/>

        
    </div>
</template>

<script>
import {ref , reactive , toRefs} from 'vue'

    export default {
            name:'RefModel',
            setup(){
                const heroName = ref('')
                const state = reactive({
                     first:'',
                    last:''
                })


                return {
                    heroName,
                    ...toRefs(state),
                }
              
            },
            data(){
                return{
                    fName: '',
                    lName: ''
                }
            }
    }
</script>

<style scoped>

</style>