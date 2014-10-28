/** @jsx React.DOM */

jest.dontMock('../src/js/components/comp-textbox.js');

describe('TextBox', function() {
  it('has text', function() {
    var React = require('react/addons');
    var TextBox = require('../src/js/components/comp-textbox.js');
    var TestUtils = React.addons.TestUtils;

    var textbox = TestUtils.renderIntoDocument(
      <TextBox text='bob' />
    );

    var input = TestUtils.findRenderedDOMComponentWithTag(textbox, 'input');
    expect(input.getDOMNode().value).toEqual('bob');
  });
});