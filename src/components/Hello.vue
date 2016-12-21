<template>
  <div class="hello">
    <HeaderComponent></HeaderComponent>
    <h1>{{ msg }}</h1>
    <OtherComponent></OtherComponent>
    <div class="input">
    <input v-model="newItem" @keyup.enter="addNew">
    </div>
    <div>
      <ol>
        <li v-for='i in items'  :class="{finished: i.isFinished}" @click="toggleFinish(i)">
          {{ i.text }}
          <button @click="delete">delete</button>
        </li>
      </ol>
    </div>
  </div>

</template>

<script>
import HeaderComponent from './header'
import OtherComponent from './other'
import Store from '../store'
console.log(Store)
export default {
    data(){
      return {
        msg: 'This is a todo list',
        items:Store.fetch() == null ? []:Store.fetch(),
        liClass:'this is li class',
        newItem:''
        }
    },
    watch:{
        items:{
          handler: function (items){
            console.log(items)
            Store.save(items)
          },
          deep:true
        }
    },
    methods:{
      toggleFinish:function(i){
        i.isFinished = !i.isFinished;
      },

      addNew:function(){
        this.items.push({
          text: this.newItem,
          isFinished:false
        })
        this.newItem = '';
      }
    },
    components:{
      HeaderComponent, OtherComponent
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
.finished{
  text-decoration: line-through;
}
</style>
