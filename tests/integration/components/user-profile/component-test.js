import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import SocialLink from 'personal/social-link/model';
import User from 'personal/user/model';

moduleForComponent('user-profile', 'Integration | Component | user profile', {
  // Specify the other units that are required for this test
  // needs: ['component:social-link'],
  integration: true
});

const SOCIALLINKS = [
SocialLink.create({ type: 'Twitter', username: 'hp_wizard' }),
SocialLink.create({ type: 'Github', username: 'harry_p' })
];

const USER = User.create({
  firstName: 'Harry',
  lastName: 'Potter',
  socialLinks: SOCIALLINKS
});

test('it updates the profile name', function(assert) {
  assert.expect(2);

  this.set('user', USER);
  this.render(hbs`{{user-profile user=user}}`);

  const $name = this.$('.user-profile .profile-name');

  this.$('.social-link:eq(0)').trigger('mouseover');
  assert.equal($name.text().trim(), '@hp_wizard');

  this.$('.social-link:eq(0)').trigger('mouseout');
  assert.equal($name.text().trim(), 'Harry Potter');
});
