function reverse (str) {
    return str.split('').reverse().join('')
}

function reverse2 (str) {
    let reversed = '';
    for (let el of str) {
        reversed = el + reversed;
    }
    return reversed;
}

function reverse3 (str) {
    //debugger;
    return str.split('').reduce((reversed, el) => el + reversed , '') //reversed = accumulator, el = string's letter
}                                                                           //'' = initial value to be added to
console.log(reverse('practice'))
reverse2('javascript');
reverse3('helloWorld');
