export default class Node {
  constructor(value, next, previous) {
    this.value = value || null;
    this.next = next || null;
  }
}
