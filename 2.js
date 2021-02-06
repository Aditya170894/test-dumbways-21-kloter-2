const array1 = ['apa', 'saya', 'anda', 'kamu', 'hallo'];
const array2 = [
    'apa yang anda lakukan?',
    'selamat pagi',
    'kamu ternyata cantik juga ya',
    'yukk belajar javascript',
    'kamu itu adalah kebanggaan saya',
    'music hari ini yang akan di putar oleh gabut FM apa ya?'];

function filterKoneversiArr(array1, array2, vocal) {
    let countArray1 = {};
    const newArray = array2.map((item) => {
        return item.split(' ').map((str) => {
            let newStr = str;
            array1.forEach(element => {
                if (countArray1[element] === undefined) {
                    countArray1[element] = 0;
                }
                if (element === str) {
                    newStr = str.replace(/a|i|u|o|e/g, vocal);
                        countArray1[element] += 1
                }
            });
            return newStr
        }).join(' ')
    })

    array1.forEach(letter => {
        console.log('Kata ' + letter + ' muncul sebanyak: ' + countArray1[letter]);
    });
    console.log(newArray);
    console.log(countArray1);
    return newArray;
}
filterKoneversiArr(array1, array2, 'i');