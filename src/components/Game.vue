<template>
  <div class="hello">
    <div v-for="(player, index) in players" :key="index">
      <Player :player="player" />
    </div>
    <h3>{{ deck.length }}</h3>
    <button @click="clickShuffle">Shuffle</button>
    <button @click="finishGame">Finish Game</button>
    <div v-for="(card, index) in deck" :key="index">
      <Card :card="card" />
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
      finishGame: () => store.dispatch("finishGame"),
      deck: computed(() => store.getters.getDeck),
      players: computed(() => store.getters.getPlayers)
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
