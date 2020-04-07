<template>
  <div>
    <h2>{{this.headlines.instructions}}</h2>

    <nav class="bottom-right">
      <router-link to="/">
        <button class="button-secondary">{{this.paragraphs.buttonAbort}}</button>
      </router-link>
      <router-link to="/guide">
        <button class="button-primary">{{this.paragraphs.buttonNext}}</button>
      </router-link>
    </nav>

    <div class="wrapper">
      <p>{{this.product_paragraphs.instructions1}}</p>
      <p>{{this.product_paragraphs.instructions2}}</p>

      <div class="point-description">
        <div class="column">
          <p><span class="badge positive">+20 p</span> {{this.paragraphs.positiveScoreDescription1}}</p>
          <p><span class="badge positive">+16 p</span> {{this.paragraphs.positiveScoreDescription2}}</p>
        </div>

        <div class="column">
          <p><span class="badge negative">-16 p</span> {{this.paragraphs.negativeScoreDescription1}}</p>
          <p><span class="badge negative">-80 p</span> {{this.paragraphs.negativeScoreDescription2}}</p>
        </div>
      </div>
    </div>

    <div class="background-image"></div>
  </div>
</template>

<script>
export default {
  name: 'Instructions',
  props: {
    headlines: Object,
    paragraphs: Object,
    product_paragraphs: Object,
  }
}
</script>

<style lang="scss" scoped>
.point-description {
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 40px;
  font-size: 0.8em;
  display: grid;
  padding-top: 40px;
  grid-template-columns: 50% 50%;

  p {
    font-weight: bold;
    font-style: italic;
    margin-bottom: 10px;
  }
  
  .badge {
    width: 66px;
    text-align: center;
    font-style: initial;
    display: inline-block;
    border-radius: 3px;
    padding: 6px 0px;
    color: white;
    margin-right: 5px;

    &.positive {
      background: #389c68;
    }

    &.negative {
      background: #d14658;
    }
  }
}
</style>
