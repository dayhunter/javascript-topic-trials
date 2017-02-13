describe.only('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let makeStack = () => {
    let current = 0;

    const isEmpty = () => true;
    const pop = () => current--;
    const push = () => current++;
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

    it('leaves stack size 1 when pushed', () => {
      stack.push({});
      stack.size().should.equal(1);
    });

    it('leave stack empty when pushed and popped', () => {
      stack.push({});
      stack.pop();
      stack.isEmpty().should.be.true();
    });

    it('overflow');

    it('underflow');

    it('get same one back when pushed then popped');

    it('leave stack empty when pushed twice and popped twice');

    it('handle stack with negative size');
  });
});
