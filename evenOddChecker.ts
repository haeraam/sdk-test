export default class EvenOddChecker {
  constructor(private number: number) {}

  isEven(): boolean {
    return this.number % 2 === 0;
  }

  isOdd(): boolean {
    return this.number % 2 !== 0;
  }
}