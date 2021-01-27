class Random {
  constructor(seed) {
    this.seed = seed ?? new Date().getTime();
  }

  nextInt() {
    this.seed += 0x6d2b79f5;
    let dummy = this.seed;
    dummy = Math.imul(dummy ^ (dummy >>> 15), dummy | 1);
    dummy ^= dummy + Math.imul(dummy ^ (dummy >>> 7), dummy | 61);
    const result = ((dummy ^ (dummy >>> 14)) >>> 0) / 4294967296;
    return Math.round(result * 1000000);
  }

  nextBool() {
    return this.nextInt() % 2 === 0;
  }
}

export default Random;
