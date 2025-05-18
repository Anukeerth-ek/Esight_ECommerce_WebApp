 export const fetchProductDetails= async(productId:any)=> {

     const response = await fetch(`https://fakestoreapi.com/products/${productId}`).then(data=> data.json());

     return response;
};