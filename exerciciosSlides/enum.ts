enum Curso {
    'TADS',
    'TNI',
    'TCI'
}
console.log(Curso)
enum Curso1 {
    'TADS' = 5,
    'TNI',
    'TCI'
}
console.log(Curso1)

enum Curso2 {
    TADS = "Análise e Desenvolvimento de Sistemas",
    TNI = "Negócios Imobiliários",
    TCI = "Comunicação Institucional"
    }
    console.log(Curso2);
    console.log(Curso2.TADS);