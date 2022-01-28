<template>
  <div class="hello">
    <Player></Player>
    <h3>{{ deck.length }}</h3>
    <button @click="clickShuffle">Shuffle</button>
    <button @click="stopGame">Stop Game</button>
    <div v-for="(card, index) in deck" :key="index">
      <Card :color="card.color" :rank="card.rank" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
//import {Color} from "@/model/Card";
import { useStore } from "vuex";
import Card from "./Card.vue";
import Player from "./Player.vue";

export default defineComponent({
  components: { Card, Player },

  name: "Game",
  props: {},
  setup() {
    const store = useStore();

    return {
      clickShuffle: () => store.dispatch("shuffleDeck"),
      stopGame: () => store.commit("stopGame"),
      deck: computed(() => store.getters.getDeck),
    };
  },
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
