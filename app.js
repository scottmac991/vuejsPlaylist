new Vue({
  el: '#vue-app',
  data: {
    name: 'Scott',
    job: 'Ninja',
    website: 'http://www.thenetninja.com'
  },

  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
