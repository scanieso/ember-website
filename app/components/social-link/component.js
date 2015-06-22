import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  onMouseEnter: undefined,
  onMouseLeave: undefined,

  urlPrefixes: {
    Github: 'https://github.com/',
    LinkedIn: 'https://www.linkedin.com/in/',
    Twitter: 'https://twitter.com/'
  },

  url: computed('socialLink.name', function() {
    const type = this.get('socialLink.type');
    const username = this.get('socialLink.username');
    return this.get('urlPrefixes')[type] + username;
  }),

  mouseEnter() {
    console.log(this.get('socialLink'));
    this.sendAction('onMouseEnter', this.get('socialLink'));
  },

  mouseLeave() {
    this.sendAction('onMouseLeave');
  }
});
