describe.only('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let makeStack = (capacity = 2) => {
    let current = 0;
    let queue = null;

    const isEmpty = () => true;
    const pop = () => {
      if (current === 0 ) throw new Error('underflow error');
      current--;
      return queue;
    };

    const push = (element) => {
      if (current === capacity) throw new Error('overflow error');
      queue = element;
      current++;
    };

    const size = () => current;

    return {
      isEmpty,
      pop,
      push,
      size
    };
  };

  describe('a stack', () => {
    let stack = null;
    beforeEach(() => {
      stack = makeStack();
    });

    it('starts empty', () => {
      stack.isEmpty().should.be.true();
    });

    it('is not empty', () => {
      stack.push({});
      stack.isEmpty().should.be.false();
    });

    it('leaves stack size 1 when pushed', () => {
      stack.push();
      stack.size().should.equal(1);
    });

    it('leaves stack empty when pushed and popped', () => {
      stack.push();
      stack.pop();
      stack.isEmpty().should.be.true();
    });

    it('overflows', () => {
      (() => { stack.push(); }).should.not.throw('overflow error');
      (() => { stack.push(); }).should.not.throw('overflow error');
      (() => { stack.push(); }).should.throw('overflow error');
    });

    it('underflows', () => {
      (() => { stack.pop(); }).should.throw('underflow error');
    });

    it('gets same one back when pushed then popped', () => {
      const element = {};
      stack.push(element);
      stack.pop().should.equal(element);
    });

    it('leaves stack empty when pushed twice and popped twice');

    it('handles stack with negative size');
  });
});
