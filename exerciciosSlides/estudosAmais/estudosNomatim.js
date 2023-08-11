import { NominatimClient } from "nominatim-client";
const query = {
    q: 'Av. Nossa Sra. de Lourdes',
    addressdetails: '63'
}

NominatimClient.search(query).then.((result) => console.log(result))