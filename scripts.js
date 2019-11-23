function add(a, b) {
    return(
        console.log(a + b),
        console.log(this),
        console.log(arguments)
    )
}

add(5, 4);

