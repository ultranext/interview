//
function toThousand(num) {
    const str = num.toString();
    let count = 0;
    const res = [];
    for (let i = str.length - 1; i--; i > 0) {
        count++;
        res.push(str[i]);
        if (count % 3) {
            res.push(',');
        }
    }
}

/(\d)(?=(?:\d{3}+))$/g