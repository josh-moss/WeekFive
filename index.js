function add(a, b) {
    return a + b
}

add(5, 10);

// arguments are the value you pass in 
// param are the named variables inside the function that receive 
9

function sub(x, y) {
    return x - y
}

sub(5, 10);

function foo(z =3) {
    console.log(z)
}

foo(undefined);


function example(a,b,c) {
    return (a + b + c)
}

example (10, 5, 3)
console.log('example = ' + example.length)


if(example.length == 3) {
   return example(10 - 5 - 3)

}
 

function qoo(qa,ws,ed, ...args) {
    return console.log (qa,ws,ed, args)
}

qoo(1, 2, 3, 4, 5, 6, 7)