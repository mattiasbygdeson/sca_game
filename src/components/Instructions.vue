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
      <div class="column">
        <p>{{this.paragraphs.instructions1}}</p>
        <p>{{this.paragraphs.instructions2}}</p>

        <!-- <div class="point-description">
          <div class="column">
            <p><span class="badge positive">+20 p</span> {{this.paragraphs.instructions3}}</p>
            <p><span class="badge positive">+16 p</span> {{this.paragraphs.instructions4}}</p>
          </div>
          
          <div class="column">
            <p><span class="badge negative">-16 p</span> {{this.paragraphs.instructions5}}</p>
            <p><span class="badge negative">-80 p</span> {{this.paragraphs.instructions6}}</p>
          </div>
        </div> -->
      </div>

      <div class="column">
        <!-- <img src="https://via.placeholder.com/446x297" /> -->
        <div class="point-description">
          <p><span class="badge positive">+20 p</span> {{this.paragraphs.instructions3}}</p>
          <p><span class="badge positive">+16 p</span> {{this.paragraphs.instructions4}}</p>
          <p><span class="badge negative">-16 p</span> {{this.paragraphs.instructions5}}</p>
          <p><span class="badge negative">-80 p</span> {{this.paragraphs.instructions6}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Instructions',
  props: {
    headlines: Object,
    paragraphs: Object
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 50% auto;
  grid-gap: 20px;
}

.point-description {
  // margin-top: 50px;
  font-size: 0.9em;
  display: grid;
  // grid-template-columns: 50% 50%;
  // background: rgba(0,0,0,0.1);
  // padding: 20px;

  p {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .badge {
    width: 80px;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    padding: 6px 15px;
    color: white;
    margin-right: 5px;

    &.positive {
      background: #00205B;
    }

    &.negative {
      background: #873742;
    }
  }
}
</style>
