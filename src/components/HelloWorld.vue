<template>
  <div class="hello">
    <h3>{{ deck }}</h3>
    <h3>{{ deck.length }}</h3>
    <button @click="myclick">Press me</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import {Color} from "@/model/Card";
import { useStore } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(){
    const store = useStore();
   
//    const card = computed(()=>store.state.card);
   
    return {
      myclick: () => store.dispatch('generateNewDeck'),
      deck: computed(() => store.state.deck),
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
