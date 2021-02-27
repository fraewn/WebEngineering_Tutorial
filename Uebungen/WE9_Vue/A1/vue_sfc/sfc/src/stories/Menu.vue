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
import './menu.css';
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