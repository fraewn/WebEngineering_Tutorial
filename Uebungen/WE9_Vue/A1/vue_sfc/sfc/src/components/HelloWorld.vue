<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <label for="eingabe">Eingabe: </label>
      <input type="text" v-model="input" id="eingabe" name="eingabe"><br>
      <label>Anzahl Buchstaben: </label><span>{{ countLetters }}</span><br>
      <label>Anzahl Leerzeichen: </label><span>{{ countWhitespaces }}</span><br>
      <label>Anzahl Wörter: </label><span>{{ countWords }}</span><br>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    input: String
  },
  computed: {
    countLetters: function(){
      return this.input.length - this.countWhitespaces;
    },
    countWhitespaces: function(){
      return this.input.split(" ").length-1;
    },
    countWords: function(){
      let inputLength = this.input.length
      if(inputLength === 0){
        return 0;
      }
      if(this.input[inputLength-1] !== " "){
        console.log(this.input[inputLength-1]);
        return this.input.split(" ").length;
      }
      return this.input.split(" ").length-1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
