import Ember from 'ember';

const { computed, isPresent } = Ember;

export default Ember.Component.extend({
  classNames: ['user-profile'],

  hoveredSocial: null,
  user: undefined,

  hasHoveredSocial: computed('hoveredSocial', function() {
    return isPresent(this.get('hoveredSocial'));
  }),

  name: computed('hoveredSocial', function() {
    if (isPresent(this.get('hoveredSocial'))) {
      return this.get('hoveredSocial.handle');
    } else {
      return this.get('user.fullName');
    }
  }),

  actions: {
    setHoveredSocial(socialLink) {
      this.set('hoveredSocial', socialLink);
    },

    resetHoveredSocial() {
      this.set('hoveredSocial', null);
    }
  }
});
