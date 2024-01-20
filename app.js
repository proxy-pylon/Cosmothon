const app = Vue.createApp({
    data() {
        return {
            selectedFile: null,
        }
    },
    methods: {
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0]
        },

        onUpload() {
            // call to server
        }
    }
})

app.mount('#app')