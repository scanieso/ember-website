import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('social-link', 'Unit | Component | social link', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('mouseenter and mouseleave sends correct action', function(assert) {
  assert.expect(2);

  const component = this.subject();
  const targetObject = {
    action1() {
      assert.ok(true, 'onMouseEnter action was called');
    },
    action2() {
      assert.ok(true, 'onMouseLeave action was called');
    }
  };

  component.set('onMouseEnter', 'action1');
  component.set('onMouseLeave', 'action2');
  component.set('targetObject', targetObject);

  this.$().trigger('mouseover');
  this.$().trigger('mouseleave');
});

test('it builds a url from the link\'s type', function(assert) {
  const component = this.subject({
    socialLink: {
      type: 'Twitter',
      username: 'my_user'
    }
  });

  assert.equal(component.get('url'), 'https://twitter.com/my_user');
});
