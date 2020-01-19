<template>
  <div class="game-wrapper">
    <div class="boards-container">
      <Woodboard
        v-for="woodboard in woodboards" 
        :key="woodboard.id" 
        :woodboard="woodboard" 
        v-on:add-point="addPoint" 
        v-on:remove-point="removePoint"
      />
    </div>

    <div v-if="gameover" class="score-container">
      <div class="score">
        <p class="name">{{current_player.name}}</p>
        <h1>You got {{this.score}} points</h1>

        <div class="summary">
          <div>
            <p class="success">{{this.goodboards}} fine woodboards passed through </p>
            <p class="success">{{10 - this.defectboards}} defective woodboards were removed</p>

            <p class="failure">{{10 - this.goodboards}} fine woodboards were removed</p>
            <p class="failure">{{this.defectboards}} defective woodboards passed through</p>
          </div>

          <div>
            <p class="success">+ {{this.goodboards * 25}}p</p>
            <p class="success">+ {{(10 - this.defectboards) * 25}}p</p>

            <p class="failure">- {{(10 - this.goodboards) * 10}}p</p>
            <p class="failure">- {{this.defectboards * 10}}p</p>
          </div>
        </div>

        <nav>
          <router-link to="/game">
            <button class="button-primary" @click="restart">{{this.paragraphs.buttonTryAgain}}</button>
          </router-link>
          <router-link to="/">
            <li class="button-secondary">{{this.paragraphs.buttonAbort}}</li>
          </router-link>
        </nav>
      </div>
    </div>

    <p class="bottom-right">{{this.timer}}</p>
  </div>
</template>

<script>
import Woodboard from "./Woodboard";
import { woodboards } from "../woodboards.js";
import uuid from "uuid";

export default {
  name: 'GameContainer',
  props: {
    paragraphs: Object,
    current_player: Object
  },
  components: {
    Woodboard,
  },
  data() {
    return {
      woodboards: woodboards,
      score: 0,
      gameover: false,
      timer: 1,
      goodboards: 10,
      defectboards: 10
    }
  },
  created() {
    this.shuffle(this.woodboards);
    this.countdown();
    // setTimeout(this.saveResults, this.timer * 1000);
  },
  methods: {
    shuffle(array) {
      var ctr = array.length, temp, index;

      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
      }

      this.woodboards = array;
    },
    countdown() {
      if(this.timer > 0) {
        setTimeout(() => {
            this.timer += 1
            this.countdown()
        }, 1000)
      }
    },
    addPoint() {
      this.score += 10;
      this.defectboards --;
    },
    removePoint() {
      this.score -= 10;
      this.goodboards --;
    },
    saveResults() {
      var positivePoints = (this.goodboards * 25) + ((10 - this.defectboards) * 25);
      var negativePoints = ((10 - this.goodboards) * 10) + (this.defectboards * 10);

      this.score = positivePoints - negativePoints;

      this.gameover = true;

      if(this.score < 0) {
        this.score = 0;
      }

      const result = {
        id: uuid.v4(),
        name: this.current_player.name,
        company: this.current_player.company,
        score: this.score,
      }

      var scoreboard = JSON.parse(localStorage.getItem("sca_scoreboard"));

      if(scoreboard) {
        scoreboard.push(result);
        localStorage.setItem("sca_scoreboard", JSON.stringify(scoreboard));
      } else {
        var newScoreboard = [];
        newScoreboard.push(result);
        localStorage.setItem("sca_scoreboard", JSON.stringify(newScoreboard));
      }
    },
    restart() {
      //eslint-disable-next-line no-console
      console.log("Restarting");
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes move {
  from { left: -150 * 70px; }
  to { left: 100vw }
}

.boards-container {
  position: relative;
  width: 150 * 70px;
  left: -150 * 70px;

  animation-name: move;
  animation-duration: 60s;
  animation-timing-function: linear;
}

.game-wrapper {
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
}

.score-container {
  position: fixed;
  top: 150px;
  width: 100%;

  .score {
    padding-top: 50px;
    padding-bottom: 70px;
    border: 1px solid #707070;
    width: 650px;
    text-align: center;
    margin: auto;
    background: white;
    border-radius: 3px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

    h1 {
      font-size: 2em;
      margin: 0;
      margin-bottom: 35px;
    }

    p {
      margin-bottom: 5px;
    }

    .name {
      font-size: 1.5em;
    }

    button {
      margin-top: 50px;
    }

    nav {
      position: relative;
    }

    a, button, li {
      margin: 10px;
      margin-top: 50px;
    }
  }

  .summary {
    margin-top: 50px;
    font-size: 0.95em;
    text-align: left;
    padding: 0 10%;
    display: grid;
    grid-template-columns: 80% auto;

    div:nth-of-type(2) {
      text-align: right;
    }
  }

  .success {
    color: #389c68;
  }

  .failure {
    color: #ed2f32;
  }
}

</style>
