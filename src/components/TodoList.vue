<template>
    <div>
        <h1 class="h1">Crud Operations</h1>
        <br/>
        <input type="text" placeholder="....Enter Customer Name...." class="input-list" v-model="newTodo"/>

     <button type="button" class="btn" @click="onsubmit">Add Here</button>

        <br/>
      
<table class="table table-bordered">
  <thead>
    <tr >
     
      <th scope="col">Customer Name</th>
      <th scope="col">Edit / Delete Customer</th>
     
    </tr>
  </thead>
  <tbody>
    <tr v-for="(todo , index) in Todos" :key="todo.id" class="todolists">
   
      <td style="textAlign:center"><b >{{todo.title}}</b></td>
            <td>
                <button class="btn1" @click="editTask(index)" >
                    <i class="fas fa-user-edit"></i>
                    Update Name</button>

                <button class="btn1" @click="DeleteTask(index)"> 
                    <i class="fas fa-trash"></i>  
                    Delete</button>


            </td>


      
     
    </tr>
    
    
  </tbody>
</table>
                   
              
    </div>

</template>

<script>
    export default {
        name:'TodoList',
        editTask:null,
        data(){
            return {
                newTodo:'',
                
               
                Todos: [
                   
                 ]
            }
        },

        methods:{
           onsubmit(){
               if(this.newTodo.length === 0) return;

              
                this.Todos.push({
                     title: this.newTodo,
                    });
               
                
                this.newTodo ='';

                },
            
                DeleteTask(index){
               this.Todos.splice(index, 1)
               
           },
             editTask(index) {
            this.newTodo = this.Todos[index].title;
            this.editedTask = index;
            },
                
        
        },
       

    }
</script>

<style scoped>
.h1{
    color:  #fc4a1a;
}
.input-list{
    padding:10px 30px;
    text-align: center;
    width:460px;
    
    outline: none;
}

.btn{
    padding:10px 30px;
    margin-left: 2%;
    color:white;
    background-color:violet;
    border: none;
    cursor:pointer;
}

.btn:hover{
background: #fc4a1a;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f7b733, #fc4a1a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
color:white;
}

.todolists{
    margin-top: 2%;
    justify-content: start; 
    text-align:start;
    margin-left: 20%;   
}

.btn1{
    padding:5px 20px;
    justify-content:center;
    text-align:center;
    color:white;
    background-color:violet;
    border: none;
    cursor:pointer;
    margin-left:15%;
}
.btn1:hover{
    background: #333333;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #dd1818, #333333);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #dd1818, #333333); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.table{
    margin-top: 4%;
}

</style>