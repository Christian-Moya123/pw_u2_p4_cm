const arreglo = [{ nombre: "nombre1", apellido: "apellido1", ciudad: "ciudad1", edad: "edad1" }]

const app = Vue.createApp({
    data() {
        return {
            miArreglo: arreglo,
            nombre: '',
            apellido: '',
            ciudad: '',
            edad: ''

        }
    },
    methods: {
        agregarPersona() {
            const nuevaPersona = {
                nombre: this.nombre,
                apellido: this.apellido,
                ciudad: this.ciudad,
                edad: this.edad
            };
            this.miArreglo.unshift(nuevaPersona)
            this.nombre = '';
            this.apellido = '';
            this.ciudad = '';
            this.edad = '';
        }
    }

})

app.mount('#myApp3')