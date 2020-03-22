module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr.length == 0) {
        return 1;
      } else {
        return 1 + Math.max(...arr.map(e => this.calculateDepth(e)));
      }
    } else {
      return 0;
    }
  }
};
