class Node {
  data = null;
  nextNode = null;

  constructor(data) {
    this.data = data;
  }
}

class LinkList {
  rootNode = null;
  len = 0;
  constructor(data) {
    this.rootNode = new Node();
    this.rootNode.data = data;
  }

  length() {
    return this.len;
  }
  _getLastNode() {
    let currentNode = this.rootNode;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  add(data, index) {
    let newNode = new Node();
    newNode.data = data;
    let currentNode = this.rootNode;

    if (index < 0 && index >= len) {
      throw new error("index is out of range");
    }
    // need to do if the user provide an index or not
    // below - if user doesnt provide an index
    if (!index) {
      let lastNode = this._getLastNode();
      lastNode.nextNode = newNode;
      console.log(data + " is added to end of the list");
      this.len++;
    }
    // below - if user put in an index to where the data will be placed
    else {
      let i = 0;
      while (i < index - 1) {
        currentNode = currentNode.nextNode;
        i++;
      }
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
      console.log(data + " is added to " + index);
      this.len++;
    }
  }

  remove(index) {
    let currentNode = this.rootNode;
    let i = 0;
    if (index > -1 && index < this.len) {
      while (i < index - 1) {
        currentNode = currentNode.nextNode;
        i++;
      }
      currentNode.nextNode = currentNode.nextNode.nextNode;
    } else {
      throw new Error("index is out of range");
    }
  }

  get(index) {
    let currentNode = this.rootNode;
    let i = 0;
    if (index > -1 && index < this.len) {
      while (i < index) {
        currentNode = currentNode.nextNode;
        i++;
      }
      console.log(currentNode.data);
    } else {
      throw new Error("index is out of range");
    }
  }

  print() {
    let currentNode = this.rootNode;
    while (true) {
      console.log(currentNode.data);
      currentNode = currentNode.nextNode;
      if (currentNode == null) {
        break;
      }
    }
  }
}

let mylist = new LinkList(10);
mylist.add(20); // this adds to the end of the list
mylist.add(30);
mylist.add(100);
mylist.add(19000);
mylist.add("John");
mylist.add(true);
mylist.add(false);
mylist.add(40, 3);
mylist.remove(2);
mylist.print();
