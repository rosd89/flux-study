export const getTreeData = () => {
  return {
    name: 'My Tree',
    isOpen: false,
    children: [
      { name: 'hello', isOpen: false, children: [] },
      { name: 'wat', isOpen: false, children: [] },
      {
        name: 'child folder',
        isOpen: false,
        children: [
          {
            name: 'child folder',
            isOpen: false,
            children: [
              { name: 'hello',isOpen: false, children: [] },
              { name: 'wat' ,isOpen: false, children: [] }
            ]
          },
          { name: 'hello', isOpen: false, children: [] },
          { name: 'wat', isOpen: false, children: [] },
          {
            name: 'child folder',
            isOpen: false,
            children: [
              { name: 'wat', isOpen: false, children: [] },
              { name: 'hello', isOpen: false, children: [] }
            ]
          }
        ]
      }
    ]
  }
}