<template>
  <div>
    <h2>{{this.headlines.userForm}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/guide">
          <li class="button-secondary">{{this.paragraphs.buttonAbort}}</li>
        </router-link>
        <router-link to="/game">
          <button class="button-primary" :disabled="disabled" @click="submitForm">{{this.paragraphs.buttonStartGame}}</button>
        </router-link>
      </ul>
    </nav>

    <form @change="checkFormCompletion">
      <label for="name">{{this.paragraphs.userFormName}}</label>
      <input id="name" type="text" v-model="name">

      <label for="company">{{this.paragraphs.userFormCompany}}</label>
      <input id="company" type="text" v-model="company">

      <label for="phone">{{this.paragraphs.userFormPhone}}</label>
      <input id="phone" type="number" v-model="phone">
      <span class="sidenote">{{this.paragraphs.userFormNote}}</span>

      <div>
        <input id="privacy-agreement" class="checkbox" type="checkbox" v-model="checkbox">
        <label for="privacy-agreement" class="sidenote">{{this.paragraphs.userFormAgreement}}</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    headlines: Object,
    paragraphs: Object,
  },
  data() {
    return {
      name: "",
      company: "",
      phone: "",
      checkbox: false,
      disabled: true,
    }
  },
  methods: {
    checkFormCompletion() {
      var name = this.name;
      var phone = this.phone;
      var checkbox = this.checkbox;

      if(name && phone && checkbox) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    submitForm() {
      const current_player = {
        name: this.name,
        company: this.company,
        phone: this.phone,
      };

      this.$emit('submit-form', current_player);
    }
  }
}
</script>

<style lang="scss" scoped>
input[type="text"], input[type="number"] {
  display: block;
  height: 50px;
  width: 60%;
  border-radius: 3px;
  border: 1px solid #707070;
  background: #fff;
  margin-bottom: 30px;
  padding: 0px 20px;
  font-size: 1.5em;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  margin-bottom: 0;
}

.checkbox {
  position: relative;
  top: 15px;
  width: 40px;
  height: 40px;
  margin: 0;
  margin-right: 10px;
  margin-top: 30px;
}

label {
  margin-bottom: 30px;
  font-size: 1.3em;
}

.sidenote {
  font-size: 1em;
}

.disabled {
  background-color: #707070;
  opacity: 0.7;
}

</style>
