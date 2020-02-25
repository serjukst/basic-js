const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    
  }
};

module.exports = chainMaker;
