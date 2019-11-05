import { getTreeData } from './index'

test('트리 데이터 조회', () => {
  const treeData = getTreeData()

  expect(treeData.name).toBe('My Tree')
})
