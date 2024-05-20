const list = [
    { lang: 'nodejs' },
    { lang: 'golang' },
    { lang: 'php' },
    { lang: 'nodejs' },
    { lang: 'php' },
    { lang: 'php' }
];

const output = list.reduce((acc, current) => {
    const lang = current.lang;
    if (acc[lang]) {
        acc[lang]++;
    } else {
        acc[lang] = 1;
    }
    return acc;
}, {});

console.log(output);
