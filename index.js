class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  // get length() {
  //   return this.items.length;
  // }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    // this.items.indexOf(pos);
    if (this.items.indexOf(pos) > -1) {
      return pos;
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.sort((a, b) => b - a).slice(0, 1);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items.sort((a, b) => a - b).slice(0, 1);
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    const sum = this.items.reduce((a, b) => a + b, 0);
    const avgNum = sum / this.length;
    return avgNum;
  }
}

module.exports = SortedList;
