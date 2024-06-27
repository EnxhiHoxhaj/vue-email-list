// creiamo una lista di 10 e-mail e stampiamoli in pagina
// struttura dati Vue
const {createApp} = Vue;

createApp ({
    data () {
        return {
            // titolo da stampare in pagina
            title: "Lista di e-mail",
            // lista e-mail da generare
            mailList: [
                "",
            ]
        }
    },

    // le funfioni per stampare le 10 mail random
    mounted () {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ((mailItem) =>{
                const eMail = mailItem.data.response;
                console.log(eMail);
                this.mailList= eMail;
            })
    }
    
}).mount('#app')

