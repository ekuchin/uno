import { createStore } from "vuex";
import Card from "@/model/Card";
import { Rank, Color, EnumToArray } from "@/model/Card";
import Player from "@/model/Player";

export default createStore({
  state: {
    deck: [] as Card[], //Array of Cards
    players: [] as Player[],
    game: {
      isStarted: false,
      currentCard: {} as Card,
      isClockwise: true,
    },
  },

  getters: {
    getCurrentCard(state): Card {
      return state.game.currentCard;
    },
    getDeck(state): Card[] {
      return state.deck;
    },
    isGameStarted(state): boolean {
      return state.game.isStarted;
    },
    getPlayers(state): Player[] {
      return state.players;
    },
  },

  mutations: {
    startGame(state) {
      state.game.isStarted = true;
    },
    stopGame(state) {
      state.game.isStarted = false;
    },
    emptyDeck(state) {
      state.deck = [];
    },
    addCardToDeck(state, payload) {
      state.deck.push(payload);
    },
    addPlayer(state, payload:Player){
      state.players.push(payload)
    },
    clearPlayers(state){
      state.players = []
    }
    //removeCardFromDeck()
    //setCurrentCard(card)
    //addCardToPlayer(card)
    //removeCardFromPlayer(index)
  },

  actions: {
    //Сгенерировать колоду
    generateNewDeck(context) {
      //zero
      for (let color = 1; color <= 4; color++) {
        context.commit("addCardToDeck", { rank: 0, color });
      }

      //numeric
      for (let i = 0; i <= 1; i++) {
        for (let rank = 1; rank <= 9; rank++) {
          for (let color = 1; color <= 4; color++) {
            context.commit("addCardToDeck", { rank, color });
          }
        }
      }

      //special
      let arr = [Rank.Skip, Rank.Plus2, Rank.Reverse];
      for (let i = 0; i <= 1; i++) {
        for (const rank in arr) {
          for (let color = 1; color <= 4; color++) {
            context.commit("addCardToDeck", { rank: arr[rank], color });
          }
        }
      }

      //black
      arr = [Rank.Plus4, Rank.SelectColor];
      for (let i = 0; i <= 3; i++) {
        for (const rank in arr) {
          context.commit("addCardToDeck", {
            rank: arr[rank],
            color: Color.Black,
          });
        }
      }
    },

    //Перетасовать колоду
    shuffleDeck(context) {
      const tmparr: Card[] = context.getters.getDeck.slice();
      context.commit("emptyDeck");
      while (tmparr.length > 0) {
        const index = Math.floor(Math.random() * tmparr.length);
        context.commit("addCardToDeck", tmparr[index]);
        tmparr.splice(index, 1);
      }
    },
    startGame(context){
      console.log("//TODO start game ?")
    },
    finishGame(context) {
      context.commit('clearPlayers')
      context.commit('stopGame')
    },
    //Переместить N карт игроку M из колоды
  },
  modules: {},
});
