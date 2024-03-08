import SorView from "./SorView.js";

class PublikusView{
    #lista=[]
    #szuloElem;
    constructor(lista, szuloElem){
        this.#szuloElem = szuloElem;
        this.#lista = lista;
        this.urlap();
        szuloElem.append(`<table class="table table-hover table-bordered">`);
        this.tablaElem = szuloElem.children("table");
        this.megjelenit();
    }

    megjelenit(){
        this.tablaElem.append(`<tr><td>id</td><td>Tevékenység id</td><td>Osztály</td><td>Állapot</td></tr>`);
        this.#lista.forEach((element, index )=> {
            new SorView(element, this.tablaElem, index)
        });
    }

    urlap(){
        let select = `<select id="select1" name="select1">`;


            
        select += '<option value="option1">Option 1</option>';

        select += '</select>';
        select += '<select id="select2" name="select2">';

        select += '<option value="optionB">Option B</option>';

        select += '</select>';

        select += '<button type="submit">Küld</button>';
        this.#szuloElem.append(select);
    }
} export default PublikusView