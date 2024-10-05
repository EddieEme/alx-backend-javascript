export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method to cas the class to a number
  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
