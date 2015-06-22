import Ember from 'ember';

const { computed } = Ember;

export default Ember.Object.extend({
  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
