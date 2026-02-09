function Calculadora() {
    this.display = document.querySelector('.display');

    this.clickCapture = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.delete();
            if (el.classList.contains('btn-eq')) this.doCalculation();

        });
    };

    this.enterCapture = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode !== 13) return;
            this.doCalculation();
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0, -1); 
    this.doCalculation = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta Inválida!');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta Inválida!');
            return;
        }
    };
    this.start = () => {
        this.clickCapture();
        this.enterCapture();
    };
};

const calculadora = new Calculadora();
calculadora.start();