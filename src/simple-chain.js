const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ( position <= 0 || position >= this.chain.length || typeof position !== "number" || !Number.isInteger(position) ) {
      this.chain = [];
      throw Error;
    }

    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const resultChain = this.chain.slice();
    this.chain = [];

    return resultChain.join('~~');
  }
};

module.exports = chainMaker;
