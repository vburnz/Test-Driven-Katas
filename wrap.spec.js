const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('Returns unwrapped string if maxLen is greater then line length', () => {
    expect(wrap("Hello", 10)).to.equal("Hello");
  });

  it('Wraps a string where max char is a space', () => {
    expect(wrap("The dog said hi", 8)).to.equal("The dog\nsaid hi");
  })

  it('Does not break up a word when wrapping', () => {
      expect(wrap("The dog said hi", 10)).to.equal("The dog\nsaid hi")
  })

  it('Breaks up a longer string into multiple lines', () => {
      expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.")
  })
});