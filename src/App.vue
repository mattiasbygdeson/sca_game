<template>
  <div id="app">
    <Header 
      v-on:change-lang="setLanguage"
      v-on:set-content="setContent"
      :paragraphs="paragraphs"
    />

    <main>
      <router-view 
        :headlines="headlines" 
        :paragraphs="paragraphs"
        :product_paragraphs="product_paragraphs"
        :current_player="this.current_player"
        :products="products"
        :guide_images="guide_images"
        v-on:submit-form="setUser"
      ></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./layout/Header";
import { headlines_eng, general_paragraphs_eng } from "./strings.js";
import { headlines_swe, general_paragraphs_swe } from "./strings.js";

// Import products
import * as decking from "./products/decking/decking.js";
import * as ducks from "./products/ducks/ducks.js";

export default {
  name: 'app',
  components: {
    Header
  },
  data() {
    return {
      lang: "eng",
      product_type: "decking",
      headlines: headlines_eng,
      paragraphs: general_paragraphs_eng,
      current_player: {},

      products: decking.products,
      product_paragraphs: decking.paragraphs_eng,
      guide_images: decking.guide_images,
    }
  },
  methods: {
    setContent(type) {
      this.product_type = type;

      switch(type) {
        case 'ducks':
          this.products = ducks.products;
          this.guide_images = ducks.guide_images;
          if(this.lang == "eng") { this.product_paragraphs = ducks.paragraphs_eng; }
          if(this.lang == "swe") { this.product_paragraphs = ducks.paragraphs_swe; }
          break;
        case 'decking':
          this.products = decking.products;
          this.guide_images = decking.guide_images;
          if(this.lang == "eng") { this.product_paragraphs = decking.paragraphs_eng; }
          if(this.lang == "swe") { this.product_paragraphs = decking.paragraphs_swe; }
          break;
        default:
          this.products = decking.products;
          this.guide_images = decking.guide_images;
          if(this.lang == "eng") { this.product_paragraphs = decking.paragraphs_eng; }
          if(this.lang == "swe") { this.product_paragraphs = decking.paragraphs_swe; }
          break;
      }
    },
    setUser(current_player) {
      this.current_player = current_player;
    },
    setLanguage(lang) {
      this.lang = lang;

      if(lang == "eng"){
        this.headlines = headlines_eng;
        this.paragraphs = general_paragraphs_eng;
      }

      if(lang == "swe"){
        this.headlines = headlines_swe;
        this.paragraphs = general_paragraphs_swe;
      }

      // Reset content to display correct language
      this.setContent(this.product_type);
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: SCAsans;
  src: url("./assets/fonts/SCAsans.otf");
}

@font-face {
  font-family: HelveticaNeue;
  src: url("./assets/fonts/HelveticaNeue.otf");
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html, body {
  height: 100% !important;
  width: 100% !important;
  overflow: hidden !important;
  position: relative !important;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: HelveticaNeue, sans-serif;
  color: #204440;
}

ol, ul {
  list-style: none;
}

h1, h2, h3 {
  font-family: SCAsans, sans-serif;
  margin-bottom: 50px;
}

h1 {
  font-size: 3.5em;
  margin-top: 40px;
}

h2 {
  font-size: 2.15em;
  font-weight: 600;
}

p {
  font-size: 1.1em;
  font-weight: 100;
  line-height: 1.45em;
  margin-bottom: 20px;
}

img {
  max-width: 100%;
  height: auto;
}

#app {
  height: 100vh;
  // background-image: url("./assets/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.background-image {
  height: 40px;
  width: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1000;
  background-image: url("./assets/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

main {
  padding: 3% 7% 7% 7%;
}

a {
  color: #44986b;
  margin-right: 20px;
  text-decoration: none;
}

li, button {
  display: inline-block;
  padding: 15px;
  width: 210px;
  height: 60px;
  border-radius: 5px;
  text-align: center;
  font-size: 1.5em;
  border: 0;
}

button:disabled {
  background-color: #707070;
  opacity: 0.7;
}

.button-primary {
  background: #44986b;
  color: white;
  font-weight: 600;
}

.button-secondary {
  // background: #fff;
  background: linear-gradient(167deg, rgba(255,255,255,1) 0%, rgba(226,232,236,1) 100%);
  border-top: 1px solid #707070;
  color: #204440;

  // box-shadow: 0px 6px 0px #5b606b;
  border-top: 1px solid #999ea0;
  border-right: 1px solid #696f72;
  border-left: 1px solid #999ea0;
  border-bottom: 1px solid #696f72;
}

.bottom-right {
  position: fixed;
  bottom: 7%;
  right: 7%;
}
</style>
