describe.only('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('palindrome should be', () => {
    it('true for mom');
    it('true for madam Im Adam');
    it('false for dude');
    it('false for spaces');
    it('false for whitespace');
    it('false for empty string');
    it('error for NULL');
    it('error for nothing');
    it('error for non-alphabetic characters');
  });
});
