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
  visit('/');

  andThen(function() {
    const name = find('.page-name');
    const socialLinks = find('.social-link');

    assert.equal(currentURL(), '/');

    assert.equal(name.text(), 'Sarah Canieso', 'name is displayed');
    assert.equal(socialLinks.length, 3, 'social links are displayed');
  });
});

test('hovering social link updates visible name', function(assert) {
  visit('/');

  andThen(function() {
    const firstSocialLink = find('.social-link');
    triggerEvent(firstSocialLink, 'mouseover');
  });

  andThen(function() {
    const name = find('.page-name');
    assert.equal(name.text(), '@scanieso', 'name displays Twitter handle');
  });
});
