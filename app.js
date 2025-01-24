import { say } from "cowsay";

console.log(
  say({
    text: "new name",
    e: "oO", // Eyes
    T: "U ", // Tongue
  })
)

console.log('1. git stash title ---------', )

console.log('1. git stash  sub title ---- change this  hash!!!', )

console.log('3. git stash body ----------', )

const items = [
  { id: 1, name: "Root 1", parentId: null }, 
  { id: 2, name: "Child 1.1", parentId: 1 },
  { id: 3, name: "Child 1.2", parentId: 1 },
  { id: 4, name: "Child 2.1", parentId: 2 },
  { id: 5, name: "Root 2", parentId: null },
  { id: 6, name: "Child 2.1", parentId: 5 }
];

// Recursive function to build the tree
function buildTree(data, parentId = null) {
  return data
    .filter(item => item.parentId === parentId)
    .map(item => ({
      ...item,
      children: buildTree(data, item.id) // Recursively build children
    }));
}

// Build the tree
const tree = buildTree(items);

console.log(JSON.stringify(tree, null, 2));


