
class SorView{

    #obj={}
    #index;
    constructor(obj, szuloElem, index){
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#sor();

        this.sorElem = this.szuloElem.children("tr:last-child");
        
        
    }

    #sor(){
        let txt = `<tr>`; 
        for (let x in this.#obj) {
            txt+=`<td>${this.#obj[x]}</td>`;
        }
        txt+=`</tr>`;
        this.szuloElem.append(txt);
    }

    #esemenyTrigger(esemenyneve){
        const esemenyem = new CustomEvent(esemenyneve,
            {detail:this.#index})

        window.dispatchEvent(esemenyem);
    }


} export default SorView