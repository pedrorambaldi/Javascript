const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '18',
    },
    {
        nome: 'Sofia',
        nota: 8,
        turma: '18',
    },
    {
        nome: 'Pedro',
        nota: 6,
        turma:'2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma:'2C',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i =0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));