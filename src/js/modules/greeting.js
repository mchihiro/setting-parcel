export default class greeting {
  constructor(morning, evening) {
    this.morning = morning
    this.evening = evening
  }
  sayHello() {
    console.log(this.morning)
    console.log(this.evening)
  }
}
