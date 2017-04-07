import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'personal/tests/helpers/start-app';

let application;

module('Acceptance | user profile', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('visiting / displays user profile', function(assert) {
  assert.expect(4);

  visit('/');

  andThen(function() {
    const name = find('[data-test="display-name"]');
    const jobTitle = find('[data-test="job-title"]');
    const jobCompany = find('[data-test="job-company"]');
    const socialLinks = find('.social-link');

    assert.equal(name.text(), 'Sarah Canieso', 'name is displayed');
    assert.equal(jobTitle.text(), 'web developer', 'job title is displayed');
    assert.equal(jobCompany.text(), 'Society of Grownups', 'job company is displayed');
    assert.equal(socialLinks.length, 3, 'social links are displayed');
  });
});

test('hovering social link updates visible name', function(assert) {
  assert.expect(1);

  visit('/');

  andThen(function() {
    const firstSocialLink = find('.social-link').first();
    triggerEvent(firstSocialLink, 'mouseover');
  });

  andThen(function() {
    const name = find('.profile-name');
    assert.equal(name.text(), '@scanieso', 'name displays Twitter handle');
  });
});
