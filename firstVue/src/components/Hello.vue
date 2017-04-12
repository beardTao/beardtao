<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model = "newItem" v-on:keyup.enter = "addNew">
    <ol>
      <li v-for="item in items" v-bind:class = "{finished:item.isfinished}" v-on:click = "toggle(item)">
        {{item.label}}
      </li>
    </ol>
  </div>
</template>

<script>
import store from './store'
export default {
  name: 'hello',
  data:function(){
    return{
      msg:"this is a to do list",
        /*items:[
        {
          label:"coding",
          isfinished : false
        },
        {
          label:"walking",
          isfinished : true
        }
      ],*/
      items:store.fetch(),
      newItem : ''
    }
  },
  methods:{
    toggle:function(item){
      item.isfinished = !item.isfinished
    },
    addNew : function(){
      this.items.push({
        label : this.newItem,
        isfinished : false
      })
      this.newItem = ''
    }
  },
  watch : {
    items:{
      handler : function(items){
        store.save(items)
      },
      deep : true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
}
ol{
  width: 100px;
  margin: 0 auto;
}
.finished{
  text-decoration: underline;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 20px 10px;
}

a {
  color: #42b983;
}
</style>
