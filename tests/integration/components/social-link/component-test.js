import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('social-link', 'Integration | Component | social link', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  integration: true
});

test('mouseenter and mouseleave sends correct action', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{social-link onMouseEnter="action1" onMouseLeave="action2"}}
    `);

  this.on('action1', () => assert.ok(true, 'onMouseEnter action was called'));
  this.on('action2', () => assert.ok(true, 'onMouseLeave action was called'));

  this.$('.social-link').trigger('mouseover');
  this.$('.social-link').trigger('mouseleave');
});

test('it builds the url from the link\'s type', function(assert) {
  this.set('socialLink', {
    type: 'Twitter',
    username: 'my_user'
  });

  this.render(hbs`
    {{social-link socialLink=socialLink}}
    `);

  const $componentLink = this.$('.social-link');
  assert.equal($componentLink.attr('href'), 'https://twitter.com/my_user');
});
