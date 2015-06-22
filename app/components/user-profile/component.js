import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  activeSocial: null,
  user: undefined,

  name: computed('activeSocial', function() {
    if (Ember.isPresent(this.get('activeSocial'))) {
      return this.get('activeSocial.handle');
    } else {
      return this.get('user.fullName');
    }
  }),

  actions: {
    setActiveSocial(socialLink) {
      this.set('activeSocial', socialLink);
    },

    resetActiveSocial() {
      this.set('activeSocial', null);
    }
  }
});
