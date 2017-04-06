import Ember from 'ember';
import SocialLink from 'personal/social-link/model';
import User from 'personal/user/model';

export default Ember.Route.extend({
  model() {
    return User.create({
      firstName: 'Sarah',
      lastName: 'Canieso',
      socialLinks: [
        SocialLink.create({ type: 'Github', username: 'scanieso' }),
        SocialLink.create({ type: 'LinkedIn', username: 'scanieso' }),
        SocialLink.create({ type: 'Twitter', username: 'scanieso' })
      ],
      statement: 'web developer at Society of Grownups'
    });
  }
});
