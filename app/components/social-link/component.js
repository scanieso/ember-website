import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  attributeBindings: ['href', 'target'],
  classNames: ['social-link'],

  onMouseEnter: undefined,
  onMouseLeave: undefined,

  target: '_blank',

  _urlPrefixes: {
    Github: 'https://github.com/',
    LinkedIn: 'https://www.linkedin.com/in/',
    Twitter: 'https://twitter.com/'
  },

  href: computed('socialLink.type', function() {
    const type = this.get('socialLink.type');
    const username = this.get('socialLink.username');
    return this.get('_urlPrefixes')[type] + username;
  }),

  mouseEnter() {
    this.sendAction('onMouseEnter', this.get('socialLink'));
  },

  mouseLeave() {
    this.sendAction('onMouseLeave');
  }
});
