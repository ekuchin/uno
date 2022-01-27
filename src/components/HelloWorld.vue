<template>
  <div class="hello">
    <h3>{{ deck.length }}</h3>
    <button v-show="deck.length===0" @click="clickGenerate">Generate</button>
    <button @click="clickShuffle">Shuffle</button>
    <div v-for="(card, index) in deck" :key="index">
      <Card :color="card.color" :rank="card.rank" />
    </div>
   </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import {Color} from "@/model/Card";
import { useStore } from "vuex";
import Card from "./Card.vue";

export default defineComponent({
  components: { Card },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(){
    const store = useStore();
   
    return {
      clickGenerate: () => {
        //store.commit('emptyDeck')
        store.dispatch('generateNewDeck')
        },
      clickShuffle:()=> store.dispatch('shuffleDeck'),
      deck: computed(() => store.getters.getDeck),
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
