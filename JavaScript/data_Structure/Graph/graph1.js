/* Undirected Graph */
class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = this.nodes[node] || [];
  }

  contains(node) {
    return !!this.nodes[node];
  }

  removeNode(node) {
    if (this.contains(node)) {
      for (let i = 0; i < this.nodes[node].length; i += 1) {
        this.removeEdge(this.nodes[node][i], node);
      }
      delete this.nodes[node];
    }
  }
  //fromNode가 toNode Edge를 가지고 있는지 여부 확인 
  hasEdge(fromNode, toNode) {
    if (!this.contains(fromNode)) {
      return false;
    }
    return !!this.nodes[fromNode].includes(toNode);
  }

  addEdge(fromNode, toNode) {
    //this가 fromNode 와 toNode를 포함하고 있다면, 아래 if구문을 통과한다. 
    if (!this.contains(fromNode) || !this.contains(toNode)) {
      return;
    }

    // Add an edge to each node pointing to the other
    if (!this.hasEdge(fromNode, toNode)) {
      this.nodes[fromNode].push(toNode);
    }

    if (!this.hasEdge(toNode, fromNode)) {
      this.nodes[toNode].push(fromNode);
    }
  }

  removeEdge(fromNode, toNode) {
    //this가 fromNode 와 toNode를 포함하고 있다면, 아래 if구문을 통과한다. 
    if (!this.contains(fromNode) || !this.contains(toNode)) {
      return;
    }

    // Remove edges from each node's edge list
    if (this.hasEdge(fromNode, toNode)) {
      const index1 = this.nodes[fromNode].indexOf(toNode);
      this.nodes[fromNode].splice(index1, 1);
    }

    if (this.hasEdge(toNode, fromNode)) {
      const index2 = this.nodes[toNode].indexOf(fromNode);
      this.nodes[toNode].splice(index2, 1);
    }
  }
}