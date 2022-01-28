<template>
  <div class="player">
    <p>{{ player.name }}</p>
    <p>{{ player.isHuman }}</p>
    <p>{{ player.points }}</p>
    <p>{{ player.cards }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Player from "@/model/Player";

export default defineComponent({
  name: "Player",
  props: {},
  setup(props) {
    const player: Player = {} as Player;
    player.name = "Евгений";

    return { player };
  },
});
</script>

<style scoped>
.card {
  max-width: 100px;
  max-height: 200px;
  min-height: 150px;
  border-width: 1px;
  border-color: black;
  border-style: double;
  border-radius: 10px;
  display: block;
  float: left;
  margin: 2px;
  padding: 4px;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: green;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.black {
  background-color: black;
  color: white;
}
</style>
