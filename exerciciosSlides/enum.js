var Curso;
(function (Curso) {
    Curso[Curso["TADS"] = 0] = "TADS";
    Curso[Curso["TNI"] = 1] = "TNI";
    Curso[Curso["TCI"] = 2] = "TCI";
})(Curso || (Curso = {}));
console.log(Curso);
var Curso1;
(function (Curso1) {
    Curso1[Curso1["TADS"] = 5] = "TADS";
    Curso1[Curso1["TNI"] = 6] = "TNI";
    Curso1[Curso1["TCI"] = 7] = "TCI";
})(Curso1 || (Curso1 = {}));
console.log(Curso1);
var Curso2;
(function (Curso2) {
    Curso2["TADS"] = "An\u00E1lise e Desenvolvimento de Sistemas";
    Curso2["TNI"] = "Neg\u00F3cios Imobili\u00E1rios";
    Curso2["TCI"] = "Comunica\u00E7\u00E3o Institucional";
})(Curso2 || (Curso2 = {}));
console.log(Curso2);
console.log(Curso2.TADS);
