describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let stack = {
    isEmpty() {return true;}
  };

  describe('a stack should', () => {
    it('be empty', () => {
      stack.isEmpty().should.be.true();
    });

    it('leave stack size 1 when pushed', () => {
      stack.push({});
      stack.size().should.equal(1);
    });

    it('leave stack empty when pushed and popped');

    it('overflow');

    it('underflow');

    it('get same one back when pushed then popped');

    it('leave stack empty when pushed twice and popped twice');

    it('handle stack with negative size');
  });
});
