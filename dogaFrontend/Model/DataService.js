
class DataService{
    constructor(){
        axios.defaults.baseURL = "http://localhost:8003/";
    }
    getData(vegpont, callback, hibaCallback){
        axios.get(vegpont)
        .then(function (response) {
            callback(response.data);
        })
        .catch(function (error) {
            hibaCallback(error);
        })
        .finally(function () {
        });
    }

    postAxiosData (url, data) { 
        console.log(data)
        axios
            .post(url, data)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }

    putAxiosData (url, data, id) { 
        console.log(data)
        console.log(`${url}/${id}`);
        axios
            .put(`${url}/${id}`, data)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }

    deleteAxiosData(url, id) {
        console.log(`${url}/${id}`);
        axios
            .delete(`${url}/${id}`)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }

} export default DataService