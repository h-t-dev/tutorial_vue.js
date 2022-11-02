/* Lesson 85 インラインメソッドハンドラ
const app = Vue.createApp({
    data: () => ({
        counter: 0
    })
})
app.mount('#app')
*/

/* Lesson 86 メソッドイベントハンドラ
const app = Vue.createApp({
    data: () => ({
        counter: 0
    }),
    methods: {
        clickHandler: function (event) {
            this.counter++
            // console.log(event)
            console.log(event.target)
            console.log(event.target.tagName)
            console.log(event.target.innerHTML)
            console.log(event.target.type)
            console.log(event.target.id)
        }
    }
})
app.mount('#app')
*/

/* Lesson 87 イベントオブジェクトの参照
const app = Vue.createApp({
    data: () => ({
        message: ''
    }),
    methods: {
        clickHandler: function (message) {
            // console.log(message)
            this.message = message
        }
    }
})
app.mount('#app')
*/

/* Lesson 88 イベントハンドラに引数を渡す
const app = Vue.createApp({
    data: () => ({
        message: ''
    }),
    methods: {
        clickHandler: function (message) {
            // console.log(message)
            this.message = message
        }
    }
})
app.mount('#app')
*/


/* Lesson 89 $イベントの利用
const app = Vue.createApp({
    data: () => ({
        message: ''
    }),
    methods: {
        clickHandler: function ($event, message) {
            // console.log(message)
            this.message = message
            console.log($event)
        }
    }
})
app.mount('#app')
*/

/* Lesson 91  イベント修飾子の利用例
const app = Vue.createApp({
    data: () => ({
        message: ''
    }),
    methods: {
        clickHandler: function () {
            this.message = new Date().toLocaleTimeString()
        }
    }
})
app.mount('#app')
*/

/* Lesson 92 v-onの省略記法
const app = Vue.createApp({
    data: () => ({
        message: ''
    }),
    methods: {
        clickHandler: function () {
            this.message = new Date().toLocaleTimeString()
        }
    }
})
app.mount('#app')
*/