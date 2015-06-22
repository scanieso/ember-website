import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  user: computed.alias('model')
});
