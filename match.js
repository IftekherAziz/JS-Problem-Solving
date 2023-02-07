const numbers = [45, 65, 23, 98, 19];

/* Looping through the array and printing each element. */
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);
}

/* Looping through the array and printing each element. */
// For of loop:
for (const number of numbers) {
    //console.log(number);
}

/* Creating an array of objects. */
const products = [
    {id :1, name: 'laptop', price: 19000},
    {id :2, name: 'mobile', price: 100000},
    {id :3, name: 'watch', price: 5000},
    {id :4, name: 'tablet', price: 80000},
    {id :5, name: 'camera', price: 70000},
    {id :6, name: 'tv', price: 20000},
    {id :7, name: 'fridge', price: 30000},
    {id :8, name: 'Mac Laptop', price: 40000},
];

/* It loops through the products array and prints each product. */
for (const product of products) {
    // console.log(product);
}

/**
 * It loops through the products array and pushes the product to the matched array if the product name
 * includes the search string.
 * @param products - an array of objects, each object has a name property
 * @param search - the search term
 * @returns An array of objects that match the search criteria.
 */
function matchProduct(products,search) {
    const matched = [];
    for (const product of products) {
       if (product.name.toLowerCase().includes(search.toLowerCase())) {
           matched.push(product);
       }
    }
    return matched;
}

/* Calling the matchProduct function and passing the products array and the search term 'laptop' as
arguments. */
const result = matchProduct(products, 'laptop');
console.log(result);