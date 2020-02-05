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
      while (i < index) {
        currentNode = currentNode.nextNode;
        i++;
      }
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
      onsole.log(data + " is added to " + index);
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

let myList = new LinkList(7);
myList.add(5);
myList.add(true);
myList.add(90000000000000);
myList.add("klk");
myList.print();
myList.remove(2);
myList.print();
myList.get(2);
