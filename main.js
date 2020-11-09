// version 0
console.log('\u0007');

// version 1
// setTimeout(function() {
//     process.stdout.write('\u0007');
// }, 3000);

// version 2
// const time = process.argv[2];
// setTimeout(function() {
//     process.stdout.write('\u0007');
// }, time * 1000);

// version 3
// const times = process.argv.slice(2);
// for (const time of times) {
//     setTimeout(function() {
//         process.stdout.write('\u0007');
//     }, time * 1000)
// }

// version 4
// const times = process.argv.slice(2);
// for (const time of times) {
//     setTimeout(function() {
//         process.stdout.write('\u0007');
//         console.log(time + ' seconds have passed!');
//     }, time * 1000)
// }

// version 5
const times = process.argv.slice(2);
for (const time of times) {
    let ms = time;
    if (ms.endsWith('m')) {
        ms = ms.slice(0, -1) * 60000;
    } else if (ms.endsWith('h')) {
        ms = ms.slice(0, -1) * 3600000;
    } else {
        ms = time * 1000
    }

    setTimeout(function() {
        process.stdout.write('\u0007');
        console.log(time + ' has passed!');
    }, ms)
}
