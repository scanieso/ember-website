import Ember from 'ember';
import SocialLink from 'personal/social-link/model';
import User from 'personal/user/model';
import Job from 'personal/job/model';

export default Ember.Route.extend({
  model() {
    const job = Job.create({
      company: 'Society of Grownups',
      title: 'web developer'
    });

    const socialLinks = [
      SocialLink.create({ type: 'Github', username: 'scanieso' }),
      SocialLink.create({ type: 'LinkedIn', username: 'scanieso' }),
      SocialLink.create({ type: 'Twitter', username: 'scanieso' })
    ];

    return User.create({
      firstName: 'Sarah',
      job,
      lastName: 'Canieso',
      socialLinks
    });
  }
});
