import { Observable, of, from } from 'rxjs';
from(["Curitiba", "SJP", "Pinhais", "Colombo"]).subscribe(
valor => console.log(valor)
);