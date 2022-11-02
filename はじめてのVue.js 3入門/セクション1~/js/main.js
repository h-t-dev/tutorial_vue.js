const app = Vue.createApp({
    data: () => ({
        newItem: '',
        todos: []
    }),
    methods: {
        addItem: function(event) {
            // console.log('Clicked!')
            // 未入力の場合は追加しない。
            if(this.newItem === '') return
            let todo = {
                item:this.newItem,
                isDone: false

            }
            this.todos.push(todo)
            this.newItem = ''
        },
            deleteItem: function(index) {
                // console.log('Deleted!')
                // console.log(index)
                this.todos.splice(index,1)
            }
    }
})
app.mount('#app')