function cetakPola() {
    let str = '';
    const maxi = 5
    // up
    for(let i = 0; i <= maxi; i++){
        str = '';
        const maxj = 5; 
        for (let j = 0; j <= maxj; j++) {
            if (j === maxj - i || i === maxi) {
                str += '*'
            } else {
                str += '-'   
            }
        }
        for (let k = 0; k < 6; k++) {
            if (i === 0 || k === maxj - i) {
                str += '*'
            } else {
                str += '-'
            }
        }
        console.log(str);
    }

    //bottom
    for(let i = 0; i <= maxi; i++){
        str = '';
        const maxj = 5; 
        for (let j = 0; j <= maxj; j++) {
            if (j === i || i === 0) {
                str += '*'
            } else {
                str += '-'   
            }
        }
        for (let k = 0; k < 6; k++) {
            if (i === maxi || k === i) {
                str += '*'
            } else {
                str += '-'
            }
        }
        console.log(str);
    }
}

cetakPola()