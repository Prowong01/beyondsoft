const list = [
    { lang: 'nodejs' },
    { lang: 'golang' },
    { lang: 'php' },
    { lang: 'nodejs' },
    { lang: 'php' },
    { lang: 'php'},
];

const count = {};

list.forEach(item => {
    if (count[item.lang]) {
        count[item.lang]++;
    } else {
        count[item.lang] = 1;
    }
})

console.log(count);
