const app = new Vue({
  el: '#app',

  data:{
    listItem: [
      {
        text: 'Fare la spesa',
        done: 'false'
      },
      {
        text: 'Fare L\'esercizio di boolean',
        done: 'false'
      },
      {
        text: 'Ricordarsi di pushare spesso',
        done: 'false'
      },
    ]
  },

  methods: {
    changeDone: function(item){
      item.done = true
      console.log('click')
    },
    
    deleteItem: function(i){
      this.listItem.splice(i, 1)
    }
  }
})