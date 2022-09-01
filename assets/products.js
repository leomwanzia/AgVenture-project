function getProducts(){
    fetch("https://my-json-server.typicode.com/leomwanzia/AgVenture").then((response) => response.json()).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log("products not found", err);
    });
}

getProducts()

