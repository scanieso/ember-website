import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it aliases model to user', function(assert) {
  const controller = this.subject();
  controller.set('model', 'model_here');

  assert.equal(controller.get('user'), 'model_here');
});
