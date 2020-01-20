<template>
  <div>
    <h2>{{this.headlines.score}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/"><li class="button-secondary">{{this.paragraphs.buttonAbort}}</li></router-link>
      </ul>
    </nav>

    <table>
      <tr>
        <th>Name</th>
        <th>Company</th>
        <th>Score</th>
      </tr>
    
      <tr v-for="score in scoreboard" :key="score.id">
        <td>{{score.name}}</td>
        <td>{{score.company}}</td>
        <td>{{score.score}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// import axios from "axios";
import { getScoreList } from "../api.js";

export default {
  name: 'Score',
  data() {
    return {
      scoreboard: [],
    }
  },
  props: {
    headlines: Object,
    paragraphs: Object,
  },
  created() {
    this.requestScoreList();
  },
  methods: {
    async requestScoreList() {
      let res = await getScoreList();
      res = res.sort(this.compare);
      res = res.slice(0,8);

      this.scoreboard = res;
    },
    compare(a, b) {
      const scoreA = a.score;
      const scoreB = b.score;

      let comparison = 0;

      if (scoreA > scoreB) {
        comparison = 1;
      } else if (scoreA < scoreB) {
        comparison = -1;
      }
      return comparison * -1;
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-spacing: 0;

  th, td {
    text-align: left;
  }

  td {
    font-size: 1.15em;
    padding: 15px 0 5px 0;
    border-bottom: 1px solid #707070;
  }

  th:nth-of-type(3), td:nth-of-type(3) {
    width: 7%;
  }
}

</style>
