new Vue({
  el: '#vue-app',
  data: {
    name: 'Scott',
    job: 'Ninja',
    website: 'http://www.thenetninja.com.uk',
    websiteTag: '<a href="http://www.thenetninja.com.uk">The Website</a>',
    age: 25,
    x: 0,
    y: 0
    },

  methods: {
    greet: function(time) {
      return 'Good ' + time + ' ' + this.name;
    },

    addAge: function(years_to_add) {
      console.log("In vue-app::addAge()")
      this.age += years_to_add;
    },

    subtractAge: function(years_to_subtract) {
      console.log("In vue-app::subtractAge()")
      this.age -= years_to_subtract;
    },

    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
