import DataService from "../Model/DataService.js";
import HibaView from "../View/HibaView.js";
import PublikusView from "../View/PubikusView.js";

class PublikusController{
    loader;
    constructor(){
        this.init();
    }

    init(){
        this.dataService = new DataService();
        this.dataService.getData("api/getall", this.megjelenit, this.hibaMegjelenit);
    }
    
    megjelenit(lista){
        new  PublikusView(lista, $(".publikus"));
    }

    hibaMegjelenit(error){
        new HibaView(error, $(".publikus"));
    }

} export default PublikusController