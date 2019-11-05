import {
  TREE_SET_ITEMS, TREE_ADD_ITEM, TREE_TOGGLE_ITEM
} from '../consts/mutation-type'

import { getTreeData } from '../src/route/tree'

export const state = () => ({
  treeData: {
    name: '',
    isOpen: false,
    children: []
  }
})

export const getters = {
  isChild: () => item => item.children && item.children.length
}

export const mutations = {
  [TREE_SET_ITEMS]: (state, treeData) => {
    state.treeData = treeData
  },
  [TREE_ADD_ITEM]: (state, item) => {
    item.isOpen = true
    item.children.push({
      name: 'new stuff',
      isOpen: false,
      children: []
    })
  },
  [TREE_TOGGLE_ITEM]: (state, item) => {
    item.isOpen = !item.isOpen
  }
}

export const actions = {
  fetch ({ commit }) {
    const d = getTreeData()
    commit(TREE_SET_ITEMS, d)
  },
  makeFolder ({ dispatch }, item) {
    dispatch('addItem', item)
  },
  addItem ({ commit }, item) {
    commit(TREE_ADD_ITEM, item)
  },
  toggle ({ commit }, item) {
    commit(TREE_TOGGLE_ITEM, item)
  }
}
