import { moduleFor, test } from 'ember-qunit';
import SocialLink from 'personal/social-link/model';

moduleFor('model:social-link', 'Unit | social-link');

test('it computes handle from username and type', function(assert) {
  const model = SocialLink.create({
    type: 'Twitter',
    username: 'h_tothe_p'
  });

  assert.equal(model.get('handle'), '@h_tothe_p');

});
