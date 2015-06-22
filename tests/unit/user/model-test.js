import { moduleFor, test } from 'ember-qunit';
import User from 'personal/user/model';

moduleFor('model:user', 'Unit | user');

test('it computes fullName from firstName and lastName', function(assert) {
  const model = User.create({
    firstName: 'Harry',
    lastName: 'Potter'
  });

  assert.equal(model.get('fullName'), 'Harry Potter');
});
