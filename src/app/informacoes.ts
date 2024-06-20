export interface IAluno {
    id: number
    nome: string,
    nota1: number,
    nota2: number,
    media: number,
    condicao: string
}

export const alunos: IAluno[] = [
    {id: 1, nome: "Pedro", nota1: 6, nota2: 6, media: 6, condicao: "Reprovado(a)"},
    {id: 2, nome: "Joana", nota1: 7, nota2: 7, media: 7, condicao: "Aprovado(a)"},
]