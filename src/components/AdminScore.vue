<template>
  <div class="container">
    <router-link to="/">
      <li class="button-secondary bottom-right">Go back</li>
    </router-link>

    <div class="login-form" v-if="!loggedin">
      <h2>Access restricted</h2>
      <form v-on:submit.prevent="login">
        <input type="password" v-model="passInput">
        <input type="submit" value="Log in">
      </form>
    </div>

    <div v-if="loggedin">
      <h2>Score board (admin)</h2>

      <table>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Score</th>
          <th></th>
        </tr>
      
        <tr v-for="user in scoreboard" :key="user._id">
          <td>{{user.name}}</td>
          <td>{{user.company}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.score}}</td>
          <td><button @click="removeItem(user.phone)" class="button-delete">X</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { getScoreList } from "../api.js";
import { removeScore } from "../api.js";

export default {
  name: 'AdminScore',
  data() {
    return {
      scoreboard: [],
      loggedin: false,
      passInput: "",
      passStored: "massasca!2020"
    }
  },
  created() {
    this.requestScoreList();
  },
  methods: {
    async requestScoreList() {
      let res = await getScoreList();
      res = res.sort(this.compare);

      this.scoreboard = res;
    },
    async removeItem(phone) {
      await removeScore(phone);
      this.requestScoreList();
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
    },
    login() {
      if(this.passInput == this.passStored) {
        this.loggedin = true;
      } else {
        //eslint-disable-next-line no-console
        alert("Incorrect password");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  h2 {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  table {
    margin: auto;
    text-align: left;
    width: 80%;
  }

  th {
    border-bottom: 1px solid #707070;
  }

  tr {
    height: 30px;
  }

  tr:nth-child(even) {
    background: #e6e6e6;
  }

  .login-form {
    width: 40%;
    margin: auto;
    margin-top: 15vh;

    h2 {
      margin: 0;
      margin-bottom: 30px;
    }

    input[type="password"] {
      height: 40px;
      width: 80%;
    }

    input[type="submit"] {
      height: 40px;
      width: 20%
    }
  }
  
}

.button-delete {
  height: 25px;
  width: 25px;
  font-size: 1em;
  margin: 0;
  padding: 0;
  float: right;
  background: red;
  color: white;
}
</style>