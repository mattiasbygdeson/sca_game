<template>
  <div class="game-wrapper" v-scroll-lock="true">
    <div class="conveyor-belt" />

    <div :key="retry" class="boards-container">
      <Woodboard
        v-for="product in products" 
        :key="product.id"
        :product="product" 
        v-on:add-point="addPoint" 
        v-on:remove-point="removePoint"
      />
    </div>

    <div v-if="gameover" class="score-container">
      <div class="score">
        <p class="name">{{current_player.name}}</p>
        <h1>{{this.paragraphs.youGot}} {{this.score}} {{this.paragraphs.score}}</h1>

        <div class="summary">
          <div>
            <p class="success">{{this.goodboards}} fine woodboards passed through</p>
            <p class="success">{{10 - this.defectboards}} defective woodboards were removed</p>

            <p class="failure">{{50 - this.goodboards}} fine woodboards were removed</p>
            <p class="failure">{{this.defectboards}} defective woodboards passed through</p>
          </div>

          <div>
            <p class="success">+ {{this.goodboards * 16}}p</p>
            <p class="success">+ {{(10 - this.defectboards) * 20}}p</p>

            <p class="failure">- {{(50 - this.goodboards) * 16}}p</p>
            <p class="failure">- {{this.defectboards * 80}}p</p>
          </div>  
        </div>

        <nav>
          <router-link to="/game">
            <button class="button-primary" @click="restart">{{this.paragraphs.buttonTryAgain}}</button>
          </router-link>
          <router-link to="/">
            <button class="button-secondary">{{this.paragraphs.buttonAbort}}</button>
          </router-link>
        </nav>
      </div>
    </div>

    <div v-if="!gameover" class="bottom-bar">
      <p class="">{{this.timer}}</p>
      <div :key="retry" class="progress-bar"></div>
    </div>
  </div>
</template>

<script>
import Woodboard from "./Woodboard";
import { setScore } from "../api.js";

export default {
  name: 'GameContainer',
  props: {
    paragraphs: Object,
    current_player: Object,
    products: Array,
    product_type: String,
  },
  components: {
    Woodboard,
  },
  data() {
    return {
      score: 0,
      gameover: false,
      timer: 60,
      goodboards: 50,
      defectboards: 10,
      retry: 0,
    }
  },
  created() {
    this.countdown();
    setTimeout(this.endGame, this.timer * 1000);
  },
  methods: {
    // shuffle(array) {
    //   var ctr = array.length, temp, index;

    //   while (ctr > 0) {
    //     index = Math.floor(Math.random() * ctr);
    //     ctr--;
    //     temp = array[ctr];
    //     array[ctr] = array[index];
    //     array[index] = temp;
    //   }

    //   this.woodboards = array;
    // },
    countdown() {
      if(this.timer > 0) {
        setTimeout(() => {
            this.timer -= 1
            this.countdown()
        }, 1000)
      }
    },
    addPoint() {
      this.score += 20;
      this.defectboards --;
    },
    removePoint() {
      this.score -= 16;
      this.goodboards --;
    },
    async endGame() {
      this.gameover = true;

      // Calculate points
      var positivePoints = (this.goodboards * 16) + ((10 - this.defectboards) * 20);
      var negativePoints = ((50 - this.goodboards) * 16) + (this.defectboards * 80);
      this.score = positivePoints - negativePoints;

      // Set score to zero if result was negative
      if(this.score < 0) {
        this.score = 0;
      }

      // Save result to database
      const name = this.current_player.name;
      const company = this.current_player.company;
      const phone = this.current_player.phone;
      const score = this.score;
      const type = this.product_type;
      
      await setScore(name, company, phone, score, type);
    },
    restart() {
      this.retry++;

      this.score = 0;
      this.gameover = false;
      this.timer = 60;
      this.goodboards = 50;
      this.defectboards = 10;

      this.countdown();
      setTimeout(this.endGame, this.timer * 1000);
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes move {
  from { transform: translateX(-200 * 60px) }
  to { transform: translateX(100vw) }
}

@keyframes roll {
  from { transform: translateX(-200px) }
  to { transform: translateX(0) }
}

.boards-container {
  width: 200 * 60px + 200px;
  height: 100vh;

  backface-visibility: hidden;
  perspective: 1000;
  
  transform: translateX(-200 * 60px);

  animation-name: move;
  animation-duration: 60000ms;
  animation-timing-function: linear;
  will-change: transform;
}

.conveyor-belt {
  height: 100vh;
  width: 200%;
  position: absolute;
  top: 0;
  transform: translateX(200px);

  animation-name: roll;
  animation-duration: 925ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  background-image: url("../assets/images/beltbg4.jpg");
  // background-position: bottom;
  // background-size: 100%
  // background-;
}

.bottom-bar {
  // min-width: 50px;
  // min-height: 200px;
  // background-size: 30%;
  // background-image: url("../assets/images/metal-background.jpg");

  background: #44986b;
  border-radius: 50px;
  width: 80px;
  height: 80px;
  margin: 15px;

  position: absolute;
  top: 0;
  left: 0;

  p {
    color: white;
    font-size: 2.5em;
    padding-top: 10px;
    text-align: center;
  }

  .progress-bar {
    // width: 100%;
    // height: 10px;
    // background: #389c68;
    // position: fixed;
    // bottom: 0;

    // // animation-name: decrease;
    // animation-duration: 60s;
    // animation-timing-function: linear;
    // animation-fill-mode: forwards;
  }
}

.game-wrapper {
  // background-image: url("../assets/images/beltbg2.jpg");
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  // border: 2px solid red;
}

.score-container {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .score {
    padding-top: 50px;
    padding-bottom: 70px;
    border: 1px solid #707070;
    width: 650px;
    text-align: center;
    margin: auto;
    margin-top: 10vh;
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
    margin-top: 40px;
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
