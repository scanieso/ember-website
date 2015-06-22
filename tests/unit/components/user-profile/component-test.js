import { moduleForComponent, test } from 'ember-qunit';
import SocialLink from 'personal/social-link/model';
import User from 'personal/user/model';

moduleForComponent('user-profile', 'Unit | Component | user profile', {
  // Specify the other units that are required for this test
  needs: ['component:social-link'],
  unit: true
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

test('it sets and resets the currently hovered social link', function(assert) {
  const component = this.subject({ user: USER });

  component.send('setActiveSocial', SOCIALLINKS[0]);
  assert.deepEqual(component.get('activeSocial'), SOCIALLINKS[0]);

  component.send('resetActiveSocial');
  assert.equal(component.get('activeSocial'), null);
});

test('it updates the visible name', function(assert) {
  const component = this.subject({
    activeSocial: SOCIALLINKS[0],
    user: USER
  });

  assert.equal(component.get('name'), '@hp_wizard', 'shows hovered social-link name');

  component.set('activeSocial', null);
  assert.equal(component.get('name'), 'Harry Potter', 'shows user name');
});
