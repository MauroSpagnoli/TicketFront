import { payer } from './payer';
export class payment{
    id: number = 0;
    name: string = "";
    price: number = 0;
    payer?: payer;
    rutaImagen: string = "";
}