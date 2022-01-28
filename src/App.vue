<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Game v-if="isGameStarted"/>
  <Start v-else/>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Game from "./components/Game.vue";
import Start from "./components/Start.vue";

export default defineComponent({
  name: "App",
  components: {
    Start, Game,
  },
  setup(){
    const store = useStore();
    return {
      isGameStarted: computed(() => store.getters.isGameStarted)
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
