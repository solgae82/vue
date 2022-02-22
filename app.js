<<<<<<< HEAD
Vue.component('child-component',{
  props: ['propsdata'],
  template:'<p>{{propsdata}}</p>'
});

var app = new Vue({

  el : '#app',
  data: {
    message:'Hello Vue! passed from Parent Component',
    anotherMessage: '다른 메시지'
  }
});
=======
var app = null;
var app2 = null;
>>>>>>> 2df9fc6903236e9f60424619b841d081f2a8af54
