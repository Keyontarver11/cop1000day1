// class Node{
//     constructor(value){
//         this.left = null
//         this.right = null
//         this.value = value;

//     }

// }

// class Tree {
//   constructor(value) {
//       let storage = 
//       this.storage = null;
//       if(!storage)
    
    
//   }

//   insert(value) {
//     if (value >= 3 ) {
//       this.left.storage[value] = "value";
//     } 
//     return this.left.storage;
//   }
  
// }

// let tree = new Tree(10);

// let branch = tree.insert(3);

// console.log(tree)

// function Node(id,value){
//     this.id = id;
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.height = 0;
//     this.duplicate = 0;
// }

// Node.prototype.insert = function(node){
//     if(node.value < this.value){
//         this.height--;
//         if(this.left){
//             return this.left.insert(node)
//         }
//         this.left = node;
        
        

//     }
//     if(node.value > this.value){
//         if(this.right){
//             return this.right.insert(node)
//         }
//         this.right = node;
//         this.height++;
        

//     }

//     if(node.value === this.value){
//         this.duplicate++;
//     }
// }

// function BinarySearchTree(value){
//     this.root = null;
//     this.length = 0;
//     this.nid = 0;
// }

// BinarySearchTree.prototype.insert = function(value){
//     if(!value){
//         return;
//     }

//     let node = new Node(this.nid++,value)
//     this.length++;

//     if(!this.root){
//         this.root = node;
//         return this.length;
//     }

//     this.root.insert(node);
//  }

//  BinarySearchTree.prototype.search = function(value){
//     let node = this.root;
//     while(node){
//         if(value > node.value){
//             node = node.right;
//         }
//         else if(value < node.value){
//             node = node.left;
//         }
//         else{
//             return node;
//         }

//     }
//  }

//  const bst = new BinarySearchTree();
//  bst.insert(63)
//  bst.insert(23)
//  bst.insert(33)
//  bst.insert(43)
//  bst.insert(53)

//  console.log(bst)

//  function inOrder(callback){
//      let node = this.root;
     
//  }

 function Node(id, value) {
    this.id = id;
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
    this.duplicates = 0;
  }
  
  Node.prototype.insert = function(node) {
    if (node.value < this.value) {
      this.height--;
      if (this.left) {
        return this.left.insert(node);
      }
      this.left = node;
    }
  
    if (node.value > this.value) {
      this.height++;
      if (this.right) {
        return this.right.insert(node);
      }
      this.right = node;
    }
  
    if (node.value === this.value) {
      this.duplicates++;
    }
  }
  
  Node.prototype.inOrderTraversal = function(callback) {
    if(this.left) {
      this.left.inOrderTraversal(callback);
    }
  
    callback(this);
  
    if (this.right) {
      this.right.inOrderTraversal(callback);
    }
  }

  Node.prototype.preOrderTraversal = function(callback) {
    callback(this);

      if(this.left){
          this.left.preOrderTraversal(callback);
      }

      if (this.right) {
        this.right.inOrderTraversal(callback);
      }
  }
  
  
  // ==========================================================
  
  
  function BinarySearchTree() {
    this.root = null;
    this.nid = 0;
    this.length = 0;
  }
  
  BinarySearchTree.prototype.insert = function(value) {
    if(!value) return;
  
    let node = new Node(this.nid++, value);
    this.length++;
  
    if (!this.root) {
      this.root = node;
      return this.length;
    }
  
    this.root.insert(node);
  }
  
  BinarySearchTree.prototype.search = function(value) {
    let node = this.root;
  
    while(node) {
      if (value > node.value) {
        node = node.right;
      }
      else if (value < node.value) {
        node = node.left;
      }
      else {
        return node;
      }
    }
    console.log('Not found');
  }
  
  BinarySearchTree.prototype.inOrderTraversal = function (callback = (node)=>console.log(node)) {
    let node = this.root;
  
    if(node && !node.left && !node.right) {
      return callback(node.value);
    }
  
    node.inOrderTraversal(callback);
  } 
  BinarySearchTree.prototype.preOrderTraversal = function (callback = (node)=>console.log(node)) {
    let node = this.root;
  
    if(node && !node.left && !node.right) {
      return callback(node.value);
    }
  
    node.preOrderTraversal(callback);
  } 
  
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(6);
  bst.insert(3);
  bst.insert(1);
  bst.insert(4);
  bst.insert(15);
  bst.insert(20);
  bst.insert(13);
  bst.insert(12);
  bst.insert(14);
  
  bst.inOrderTraversal(node => console.log(node.value));