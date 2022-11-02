/* Lesson 57 監視プロパティ
const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js!'
    }),
    watch: {
        message: function (newValue, oldValue) {
            console.log('new: %s, old: %s', newValue, oldValue)
        }
    }
})
app.mount('#app')
*/
/* Lesson 58 単位変換アプリ
const app = Vue.createApp({
    data: () => ({
        km: 0,
        m: 0
    }),
    watch: {
        km: function (value) {
            console.log(value)
            this.km = value
            this.m = value * 1000
        },
        m: function (value) {
            this.km = value / 1000
            this.m = value
        }
    }
})
app.mount('#app')
*/
/* Lesson 59 算出プロパティと監視プロパティの比較
// const app = Vue.createApp({
//   data: () => ({
//     firstName: '',
//     lastName: '',
//     fullName: ''
//   }),
//   watch: {
//     firstName: function(value) {
//       this.fullName = value + ' ' + this.lastName
//     },
//     lastName: function(value) {
//       this.fullName = this.firstName + ' ' + value
//     }
//   }
// })

const app = Vue.createApp({
    data: () => ({
        firstName: '',
        lastName: ''
    }),
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})
app.mount('#app')
*/
/* Lesson 60 deepオプション
const app = Vue.createApp({
    data: () => ({
        colors: [
            { name: 'Red' },
            { name: 'Green' },
            { name: 'Blue' }
        ]
    }),
    watch: {
        colors: {
            handler: function (newValue, oldValue) {
                console.log('Update!')
            },
            deep: true
        }
    },
    methods: {
        onClick: function (event) {
            this.colors[1].name = 'White'
        }
    }
})
app.mount('#app')
*/