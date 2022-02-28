const app = new Vue({
  el: '#app',

  data:{
    
    newItem: '',
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
    changeDoneTrue: function(item){
      item.done = true;
      console.log('click');
    },

    deleteItem: function(i){
      this.listItem.splice(i, 1);
    },
    addItem: function(newItem){
      if(this.newItem !== ''){
        const item = {
          text: this.newItem,
          done: false,
        };
        this.listItem.push(item);
        this.newItem = '';
      }
    },
  }
})