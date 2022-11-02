/* Lesson 71 クラスのデータバインディング基礎
const app = Vue.createApp({
    data: () => ({
        isLarge: false
    })
})
app.mount('#app')
*/

/* Lesson 72 複数クラスの動的切り替え
const app = Vue.createApp({
    data: () => ({
        isLarge: false,
        hasError: false
    })
})
app.mount('#app')
*/

/* Lesson 73 プレーンなクラス属性との共存
const app = Vue.createApp({
    data: () => ({
        isLarge: true,
        hasError: true
    })
})
app.mount('#app')
*/

/* Lesson 74 配列構文によるクラスのデータバインディング
const app = Vue.createApp({
    data: () => ({
        largeClass: 'large',
        dangerClass: 'text-danger'
    })
})
app.mount('#app')
*/

/* Lesson 75 オブジェクトデータの利用
const app = Vue.createApp({
    data: () => ({
        classObject: {
            large: true,
            'text-danger': true
        }
    })
})
app.mount('#app')
*/

/* Lesson 76 クラスの判定条件に三項演算子を利用
const app = Vue.createApp({
    data: () => ({
        largeClass: {
            'large': true,
            'bg-gray': true
        },
        dangerClass: {
            'text-danger': true
        },
        isLarge: true
    })
})
app.mount('#app')
*/

/* Lesson 77 インラインスタイルのデータバインディングの使用
const app = Vue.createApp({
    data: () => ({
        color: 'blue',
        fontSize: 36
    })
})
app.mount('#app')
*/

/* Lesson 78 インラインスタイルのデータバインディングにオブジェクトデータを利用
const app = Vue.createApp({
    data: () => ({
        styleObject: {
            color: 'red',
            fontSize: '80px'
        }
    })
})
app.mount('#app')
*/