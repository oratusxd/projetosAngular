import { Observable, of, from } from 'rxjs';
let arr = ["Ibicaré","Joaçaba","Treze Tílias","Luzerna"]
from (arr).subscribe ({
    next: valor =>{
        let x = 'Cidade: ' + valor;
        console.log(x)
    },
    error: valor => console.log('Erro: ' + valor),
    complete: () => console.log('acabou')
})