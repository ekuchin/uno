<template>
  <div class="card">
   <div :class="cardStyle()">
     <p>{{cardStyle()}}</p>
     <p>Значение: {{rank}}</p>
     <p>Цвет: {{color}}</p>
   </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import {Color, EnumToArray} from "@/model/Card";

export default defineComponent({
  name: "HelloWorld",
  props: {
    color: {
			type: Number,
			required: true
		},
    rank: Number 
  },
  setup(props){
      
      function cardStyle(){
        return "card "+ EnumToArray(Color)[props.color].toLowerCase();
      }
      

      return ({cardStyle})
  }
});
</script>

<style scoped>
.card {
    max-width:100px;
    max-height: 200px;
    min-height: 150px;
    border-width: 1px;
    border-color: black;
    border-style: double;
    border-radius: 10px;
    display: block;
    float:left;
    margin:2px;
    padding:4px;
}

.yellow {
    background-color: yellow;
}

.green{
    background-color: green;
}

.red {
    background-color: red;
}

.blue {
    background-color: blue;
}

.black{
    background-color: black;
    color: white;
}

</style>
