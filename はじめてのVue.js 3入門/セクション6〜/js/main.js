/*  Lesson 51
    const app = Vue.createApp({
    data: () => ({
      message: 'Hello Vue.js!'
    }),
    computed: {
      reversedMessage: function() {
        return this.message.split('').reverse().join('')
      }
    }
  })
  app.mount('#app')
  */
/* Lesson 52
const app = Vue.createApp({
   data: () => ({
       message: 'Hello Vue.js!'
   }),
   computed: {
       reversedMessage: function () {
           return this.message.split('').reverse().join('')
       }
   },
   methods: {
       reversedMessageMethod: function () {
           return this.message.split('').reverse().join('')
       }
   }
})
app.mount('#app')
*/
/* Lesson 54
const app = Vue.createApp({
    data: () => ({
        basePrice: 100
    }),
    computed: {
        taxIncludedPrice: {
            get: function () {
                return this.basePrice * 1.1
            },
            set: function (value) {
                this.basePrice = value / 1.1
            }
            
        }
    }
})
app.mount('#app')
*/
/* Lesson 55
const app = Vue.createApp({
    data: () => ({

    }),
    computed: {
        computedNumber: function () {
            console.log('computed!')
            return Math.random()
        }
    },
    methods: {
        methodsNumber: function () {
            console.log('methods!')
            return Math.random()
        }
    }
})
app.mount('#app')
*/