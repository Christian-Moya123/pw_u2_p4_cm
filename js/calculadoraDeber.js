const app = Vue.createApp({
    data() {
        return {
            resultado: '',
            operandoa: 0,
            operandob: 0,
            operacion: '',
        };
    },
    methods: {
        agregarNumero(numero) {
            this.resultado += numero;
        },
        limpiar() {
            this.resultado = '';
        },
        resetear() {
            this.resultado = '';
            this.operandoa = 0;
            this.operandob = 0;
            this.operacion = '';
        },
        resolver() {
            const a = parseFloat(this.operandoa);
            const b = parseFloat(this.operandob);
            let res = 0;

            if (this.operacion === '+') {
                res = a + b;
            } else if (this.operacion === '-') {
                res = a - b;
            } else if (this.operacion === '*') {
                res = a * b;
            } else if (this.operacion === '/') {
                res = a / b;
            }

            this.resultado = res.toString();
        },
        calc(num) {
            if (this.operacion === '') {
                this.operandoa += num;
            } else {
                this.operandob += num;
            }
            this.resultado += num;
        },
        calcClear() {
            this.resetear();
        },
        calcRes() {
            
                const resNumerico = parseFloat(eval(this.resultado));
                this.resultado = "Resultado: " + resNumerico;
                console.log(resNumerico);
            
        },
        setOperacion(op) {
            if (this.operandoa !== '') {
                this.operacion = op;
                this.resultado += op;
            }
        },
    },
});

app.mount('#app');
