<template>
  <div>
    <h2>{{this.headlines.score}}</h2>

    <nav class="bottom-right">
      <ul>
        <router-link to="/"><li class="button-secondary">Go back</li></router-link>
      </ul>
    </nav>

    <table>
      <tr>
        <th>Name</th>
        <th>Company</th>
        <th>Score</th>
      </tr>
    
      <tr>
        <td>John Doe</td>
        <td>Cybercom</td>
        <td>20 / 20</td>
      </tr>

      <tr>
        <td>John Doe</td>
        <td>Cybercom</td>
        <td>17 / 20</td>
      </tr>

      <tr>
        <td>John Doe</td>
        <td>Cybercom</td>
        <td>15 / 20</td>
      </tr>

      <tr>
        <td>John Doe</td>
        <td>Cybercom</td>
        <td>12 / 20</td>
      </tr>

      <tr>
        <td>John Doe</td>
        <td>Cybercom</td>
        <td>9 / 20</td>
      </tr>

            <tr>
        <td>John Doe</td>
        <td>Cybercom</td>
        <td>7 / 20</td>
      </tr>

      <tr>
        <td>John Doe</td>
        <td>Cybercom</td>
        <td>4 / 20</td>
      </tr>

      <tr>
        <td>John Doe</td>
        <td>Cybercom</td>
        <td>3 / 20</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Score',
  props: {
    headlines: Object
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
