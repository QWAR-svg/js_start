function* generator() {
    yield 'B';
    yield 'K';
    yield 'p';
};

const str = generator();

console.log(str.next());
console.log(str.next());
console.log(str.next());