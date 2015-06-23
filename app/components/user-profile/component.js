import Ember from 'ember';

const { computed, isPresent } = Ember;

export default Ember.Component.extend({
  activeSocial: null,
  user: undefined,

  hasActiveSocial: computed('activeSocial', function() {
    return isPresent(this.get('activeSocial'));
  }),

  name: computed('activeSocial', function() {
    if (isPresent(this.get('activeSocial'))) {
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
