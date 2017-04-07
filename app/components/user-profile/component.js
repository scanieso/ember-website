import Ember from 'ember';

const {
  computed,
  computed: { bool },
  isPresent
} = Ember;

export default Ember.Component.extend({
  classNames: ['user-profile'],

  hasHoveredSocial: bool('hoveredSocial'),
  hoveredSocial: null,
  user: undefined,

  displayName: computed('hoveredSocial', function() {
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
