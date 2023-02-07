const nayok = {
    name: 'John',
    id : '123',
    address: 'New York',
    isSingle: true,
    friends: ['Peter', 'Paul', 'Mary'],
    movies: [{name: 'John Wick', year: 2014}, {name: 'John Wick 2', year: 2017}],
    act: function() {
        console.log('John is acting');
    },
    car: {
        brand: 'Ford',
        price: '5000000',
        made: '2015',
        manufacturer: {
            name: 'Tesla',
            ceo: 'Elon Musk',
            country: 'USA'
        }
    }  

}
// console.log(student);

console.log(nayok.act);
nayok.act();