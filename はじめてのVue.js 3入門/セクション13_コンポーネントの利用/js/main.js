/* Lesson 108 コンポーネント定義（グローバル）
const app = Vue.createApp({
    data: () => ({

    }),
})

app.component('hello-component', {
    template: '<p>Hello!</p>'
})

app.mount('#app')
*/

/* Lesson 109 コンポーネント定義（ローカル）
const helloComponent = {
    template: '<p>Hello!</p>'
}

const app = Vue.createApp({
    data: () => ({

    }),
    components: {
        'hello-component': helloComponent
    }
})

app.mount('#app')
*/

/* Lesson 111 コンポーネントを利用した動的処理
const buttonCounter = {
    template: '<div><span>count: </span><button v-on:click="countUp">{{ count }}</button></div>',
    data: () => ({
        count: 0
    }),
    methods: {
        countUp: function (event) {
            this.count++
        }
    }
}

const app = Vue.createApp({
    data: () => ({

    }),
    components: {
        'button-counter': buttonCounter
    }
})

app.mount('#app')

*/