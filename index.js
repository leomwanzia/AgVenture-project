const getProducts = ()=>{
    document.getElementById("pdcts").addEventListener("click", async(e)=>{
        e.preventDefault
        const productName = document.getElementsByClassName("card-1").name
        const fetchProducts = await fetch(`http://localhost:3000/products/${productName}`)
        const fetchedProducts = await fetchProducts.text()

        document.getElementsByClassName('card-1').innerText= fetchedProducts
    });

    getProducts()
}

