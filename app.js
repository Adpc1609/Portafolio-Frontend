(function(){
    emailjs.init("user_DDyOc62i22ZRGD7H8OSDq");
 })();
const vue = new Vue({
    el: '#app',
    data(){
        console.log("send data0");
        return {
            from_name: '',
            from_email: '',
            message: ''
        }
    },
    methods: {
        enviar(){
            
            let data = {
                from_name: this.from_name,
                from_email: this.from_email,
                message: this.message,
                from_subject:"La Persona" + this.from_name + "quiere comunicarse contigo"
            };
            console.log("send data", data);
            emailjs.send("adpc1609@gmail.com","contactoportafolio", data)
            .then(function(response) {
                if(response.text === 'OK'){
                    alert('El correo se ha enviado de forma exitosa');
                }
               console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                alert('Ocurrió un problema al enviar el correo');
               console.log("FAILED. error=", err);
            });
        }
    }
});