for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++) {
    //eturn (i % 3 == 0) ? 'FizzBuzz' : i;
    console.log((i % 3 == 0 && i % 5 == 0) ? 'FizzBuzz' : ((i % 3 == 0) ? 'Buzz' : ((i % 5 == 0) ? 'Fizz' : i)));

}