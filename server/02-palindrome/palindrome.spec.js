function palindrome() {
  return true;
}

describe('the palindrome canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('palindrome should be', () => {
    it('yes for mom', () => {
      palindrome('mom').should.be.true();
    });

    it('no for dude');

    it('yes for mom ada mom');

    it('no for not a palindrome');

    it('no for ""');

    it('no for "    "');
  });
});
