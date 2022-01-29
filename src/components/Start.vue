<template>
  <div class="hello">
    <button @click="startGame">Start Game</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Color } from "@/model/Card";
import Player, { createPlayer } from "@/model/Player";
import { useStore } from "vuex";
//import Card from "./Card.vue";

export default defineComponent({
  //components: { Card },
  name: "Start",
  props: {},
  setup() {
    const store = useStore();

    const startGame = () => {
      store.commit("emptyDeck");
      store.dispatch("generateNewDeck");
      store.dispatch("shuffleDeck");
      store.commit('addPlayer', createPlayer("Евгений", true))
      store.commit("startGame");
    };

    return { startGame };
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
