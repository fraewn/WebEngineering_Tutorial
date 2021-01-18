<template>
    <header class="header">
      <ul>
        <li :class="{ inline: inline, stylized_linkbox: true }">
          <a class=links><h1 id="html">{{item1}}</h1></a>
        </li>
        <li :class="{inline: inline, stylized_linkbox: true }">
          <a class=links><h1 id="css">{{item2}}</h1></a>
        </li>
        <li :class="{inline: inline, stylized_linkbox: true }">
          <a class=links><h1 id="javascript">{{item3}}</h1></a>
        </li>
        <li :class="{inline: inline, stylized_linkbox: true }">
          <a class=links href="staff.html"><h1>{{item4}}</h1></a>
        </li>
      </ul>
    </header>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    item1: String,
    item2: String,
    item3: String,
    item4: String,
    inline: Boolean
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inline {
  display: inline-block;
}
.stylized_linkbox {
  background-color: #6a709f;
  border: 3px solid;
  border-radius: 10px;
  color: #6a709f;
  border-color: black;
  width: 10%;
  line-height: 5px;
  text-align: center;
  margin: 1em;
}

.links {
  color: #000000;
  text-decoration: none;
  font-size: 13px;
  font-weight: inherit;
}
</style>
