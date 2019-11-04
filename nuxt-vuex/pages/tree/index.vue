<template>
  <section class="container">
    <tree-item
      class="item"
      :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem"
    />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import TreeItem from '../../components/tree/tree-item'

export default {
  name: 'TreeIndex',
  components: { TreeItem },
  computed: mapState('tree', ['treeData']),
  methods: mapActions('tree', ['makeFolder', 'addItem'])
}
</script>

<style>
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>