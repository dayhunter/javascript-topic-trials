/*eslint no-param-reassign: "off"*/

describe.only('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let primeFactorsOf = (number) => {
    const factors = [];

    if (number > 1) {
      while (number % 2 === 0) {
        factors.push(2);
        number /= 2;
      }
    }

    if (number > 1) factors.push(number);
    return factors;
  };

  describe('a prime numbers function should', () => {
    it('primeFactorsOf(1).should.deepEqual([])', () => {
      primeFactorsOf(1).should.deepEqual([]);
    });

    it('primeFactorsOf(2).should.deepEqual([2])', () => {
      primeFactorsOf(2).should.deepEqual([2]);
    });

    it('primeFactorsOf(3).should.deepEqual([3])', () => {
      primeFactorsOf(3).should.deepEqual([3]);
    });

    it('primeFactorsOf(4).should.deepEqual([2, 2])', () => {
      primeFactorsOf(4).should.deepEqual([2, 2]);
    });

    it('primeFactorsOf(5).should.deepEqual([5])', () => {
      primeFactorsOf(5).should.deepEqual([5]);
    });

    it('primeFactorsOf(6).should.deepEqual([2, 3])', () => {
      primeFactorsOf(6).should.deepEqual([2, 3]);
    });

    it('primeFactorsOf(7).should.deepEqual([7])', () => {
      primeFactorsOf(7).should.deepEqual([7]);
    });

    it('primeFactorsOf(8).should.deepEqual([2, 2, 2])', () => {
      primeFactorsOf(8).should.deepEqual([2, 2, 2]);
    });

    it('primeFactorsOf(9).should.deepEqual([3, 3])');
  });
});
