import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlAPI) {
    console.log("fetchData Fn Inicia");
    const response = await fetch(urlAPI);
    console.log("fetchData Fn despues de resonse");

    const data = await response.json();
    console.log("fetchData Fn Despues de data");

    return data;
}

const anotherFunction = async (urlAPI) => {
    try {
        const products = await fetchData(`${urlAPI}/products`);
        const product = await fetchData(`${urlAPI}/products/${products[0].id}`);
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) {
        console.log(error);
    }
}

anotherFunction(API);