<template>
  <div class="forest-background">
    <h2>{{this.headlines.guide}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/instructions">
          <button class="button-secondary">{{this.paragraphs.buttonAbort}}</button>
        </router-link>
        <router-link to="/userform">
          <button class="button-primary">{{this.paragraphs.buttonNext}}</button>
        </router-link>
      </ul>
    </nav>

    <p>{{this.paragraphs.guide1}}</p>

    <div class="wrapper">
      <div class="column">
        <span class="number-badge">1</span>
        <img src="../assets/images/sample1.jpg" />
        <p>{{this.paragraphs.guide2}}</p>
      </div>

      <div class="column">
        <span class="number-badge">2</span>
        <img src="../assets/images/sample2.jpg" />
        <p>{{this.paragraphs.guide3}}</p>
      </div>

      <div class="column">
        <span class="number-badge">3</span>
        <img src="../assets/images/sample3.jpg" />
        <p>{{this.paragraphs.guide4}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  props: {
    headlines: Object,
    paragraphs: Object
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 5%;
}

.column {
  img {
    border: 1px solid #707070;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1.2em;
    margin-top: 10px;
    font-weight: 600;
    width: 90%;
  }

  .number-badge {
    background: #00205B;
    font-size: 2em;
    color: white;
    width: 50px;
    height: 50px;
    padding: 7px;
    display: block;
    z-index: 1000;
    text-align: center;
    border-radius: 50px;
    font-weight: bold;

    position: relative;
    top: 30px;
    right: 25px;
  }
}
</style>
