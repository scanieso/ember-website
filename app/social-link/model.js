import Ember from 'ember';

const { computed } = Ember;

export default Ember.Object.extend({
  handlePrefixes: {
    Github: '@',
    LinkedIn: '/in/',
    Twitter: '@'
  },

  handle: computed('username', function() {
    const type = this.get('type');
    const prefix = this.get('handlePrefixes')[type];
    const username = this.get('username');

    return prefix + username;
  })
});
