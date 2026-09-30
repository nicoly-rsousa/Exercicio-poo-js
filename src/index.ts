class pessoa {

    constructor(
        public nome: string,
        public idade: number,
        private cpf: string
    ) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    apresentar(): void {
        console.log(
            "Olá meu nome é " + this.nome,
            "e tenho " + this.idade + " anos"
        );
    }

    testeCPF(): boolean {
        if (this.cpf.length == 11) {
            return true;
        } else {
            return false;
        }
    }
}

let p1 = new pessoa("Nicoly", 15, "12345678901");

p1.apresentar();

console.log(p1.testeCPF());