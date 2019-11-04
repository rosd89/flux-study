<template>
  <li>
    <div
      :class="{ bold: isFolder }"
      @click="toggle(item)"
      @dblclick="makeFolder(item)"
    >
      {{ item.name }}
      <span v-if="isFolder">[{{ item.isOpen ? '-' : '+' }}]</span>
    </div>
    <ul
      v-show="item.isOpen"
      v-if="isFolder"
    >
      <tree-item
        v-for="(child, index) in item.children"
        :key="`${child.name}@${index}`"
        class="item"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      />
      <li
        class="add"
        @click="$emit('add-item', item)"
      >
        +
      </li>
    </ul>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TreeItem',
  props: {
    item: Object
  },
  computed: {
    ...mapGetters('tree', ['isChild']),
    isFolder () {
      return this.isChild(this.item)
    }
  },
  methods: mapActions('tree', ['toggle', 'makeFolder'])
}
</script>
