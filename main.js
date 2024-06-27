const {createApp} = Vue;

createApp ({
    data () {
        return {
            title: "Lista di e-mail",
            mailList: [
                "",
            ]
        }
    },
    
}).mount('#app')

