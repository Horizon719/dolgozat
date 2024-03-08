//import AdminController from "./Controll/AdminController.js";
import PublikusController from "./Controll/PublikusController.js";

//const ADMIN = new AdminController();
//const PUBLIKUS = new PublikusController();

$(function () {
     publikus();
     $("#admin").on("click", () => {
          admin();
     });
     $("#publikus").on("click", () => {
          publikus();
     });
})


function admin(){
     let txt = `<div class="">asd</div>`;
     $("#alticle").html(txt);
     ADMIN.init();
};

function publikus(){
     let txt = `<div class="publikus"></div>`;
     $("#alticle").html(txt);
     new PublikusController()
};
