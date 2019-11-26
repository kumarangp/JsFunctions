function add(a, b) {
    return(
        console.log(a + b),
        console.log(this),
        console.log(arguments)
    )
}

//add(5, 4);

const items = [
    {name: 'Bike',     price: 100},
    {name: 'TV',       price: 200},
    {name: 'Album',    price: 10},
    {name: 'Book',     price: 5},
    {name: 'Phone',    price: 500},
    {name: 'Computer', price: 300},
    {name: 'Keyboard', price: 2220}
]

//Filter
const filteredItems = items.filter((item) => {
    return item.price > 200    
})

//Map
const ItemNames = items.map((item) => {
    return item.name
})

//Find
const foundItem = items.find((item) => {
    return item.name === 'Phone'
})

//ForEach
// items.forEach((item)=> {
//     console.log(item.price)
// })

//some
const hasInExpensiveItems = items.some((item)=> {
    return item.price < 100
})

//Every
const ExpensiveItem = items.every((item)=> {
    return item.price < 1000
})

//Reduce
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
},0)

//Includes
const sItems = [1,5,6,3,7]
const IncludeTwo = sItems.includes(7)
console.log(IncludeTwo)

