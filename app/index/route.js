import Ember from 'ember';
import SocialLink from 'personal/social-link/model';
import User from 'personal/user/model';

export default Ember.Route.extend({
  model() {
    return User.create({
      firstName: 'Sarah',
      lastName: 'Canieso',
      socialLinks: [
      SocialLink.create({ type: 'Twitter', username: 'sarahcanieso' }),
      SocialLink.create({ type: 'Github', username: 'scanieso' }),
      SocialLink.create({ type: 'LinkedIn', username: 'sarahcanieso' })
      ],
      statement: 'I am a front-end developer with a passion for both beautiful user experiences and beautiful developer experiences.'
    });
  }
});
