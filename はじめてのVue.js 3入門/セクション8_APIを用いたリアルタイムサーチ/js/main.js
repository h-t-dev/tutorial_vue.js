/* Lesson 63 開発準備
const app = Vue.createApp({
    data: () => ({

    }),
})
app.mount('#app')
*/
/* Lesson 64 空オプションの用意
const app = Vue.createApp({
    data: () => ({

    }),
    watch: {

    },
    moutend: function () {

    },
    methods: {

    }
})
app.mount('#app')
*/
/* Lesson 65 dataオプションの実装
const app = Vue.createApp({
    data: () => ({
        items: null,
        keyword: '',
        message: ''
    }),
    watch: {

    },
    moutend: function () {

    },
    methods: {

    }
})
app.mount('#app')
*/
/* Lesson 66 APIからデータ取得
const app = Vue.createApp({
    data: () => ({
        items: null,
        keyword: '',
        message: ''
    }),
    watch: {

    },
    mounted: function () {
        this.keyword = 'JavaScript'
        this.getAnswer()
    },
    methods: {
        getAnswer: function () {
            if (this.keyword === '') {
                console.log('karamoji')
                this.items = null
                return
            }

            this.message = 'Lading...'
            const vm = this
            const params = { page: 1, per_page: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function (response) {
                    // console.log(response)
                    vm.items = response.data
                })
                .catch(function (error) {
                    vm.message = 'Error!' + error
                })
                .finally(function () {
                    vm.message = ''
                })
        }
    }
})
app.mount('#app')
*/
/* Lesson 67 テンプレート側実装
const app = Vue.createApp({
    data: () => ({
        items: null,
        keyword: '',
        message: ''
    }),
    watch: {

    },
    mounted: function () {
        this.keyword = 'JavaScript'
        this.getAnswer()
    },
    methods: {
        getAnswer: function () {
            if (this.keyword === '') {
                console.log('karamoji')
                this.items = null
                return
            }

            this.message = 'Lading...'
            const vm = this
            const params = { page: 1, per_page: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function (response) {
                    // console.log(response)
                    vm.items = response.data
                })
                .catch(function (error) {
                    vm.message = 'Error!' + error
                })
                .finally(function () {
                    vm.message = ''
                })
        }
    }
})
app.mount('#app')
*/
/* Lesson 68 フォーム監視
const app = Vue.createApp({
    data: () => ({
        items: null,
        keyword: '',
        message: ''
    }),
    watch: {
        keyword: function (newKeyword, oldKeyword) {
            console.log(newKeyword)
            this.message = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    mounted: function () {
        // this.keyword = 'JavaScript'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function () {
            if (this.keyword === '') {
                console.log('karamoji')
                this.items = null
                return
            }

            this.message = 'Lading...'
            const vm = this
            const params = { page: 1, per_page: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function (response) {
                    // console.log(response)
                    vm.items = response.data
                })
                .catch(function (error) {
                    vm.message = 'Error!' + error
                })
                .finally(function () {
                    vm.message = ''
                })
        }
    }
})
app.mount('#app')
*/