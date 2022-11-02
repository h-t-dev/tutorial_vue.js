/* Lesson45
const app = Vue.createApp({
    data: () =>({
        //Lesson 45
        //message: 'Hello <span style="color:red;">Vue.js</span>'
        message: 'Hello <span style="color:red;">Vue.js</span>'
    }),
    methods: {
        clickHandler: function(event){
            this.message = this.message.split('').reverse().join('')
        }
    },
})
app.mount('#app')
*/

/* Lesson48
const app = Vue.createApp({
    data: () => ({
      message: 'Hello Vue.js!',
      number: 100,
      ok: true
    })
  })
  app.mount('#app')
  */

/* Lesson49 
const app = Vue.createApp({
    data: () => ({
        url: 'https://www.google.co.jp/'
    })
})
app.mount('#app')
*/