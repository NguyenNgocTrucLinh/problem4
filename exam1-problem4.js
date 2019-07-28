var string = 'Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options fg45kjd39 ';

ktChuoiSoKyTu = (strr) => {
    rN = 0; rStr = 0;
    for (let i = 0; i < strr.length; i++) {
        if (strr[i] >= 0 && strr[i] <= 9)
            rN = 1;
        if (strr[i].charCodeAt() < 48 || strr[i].charCodeAt() > 57)
            rStr = 1;
    }
    return (rN + rStr)//trả về 2 thì đúng
}

ktKyTu = (a) => {
    if (a.charCodeAt() < 48 || a.charCodeAt() > 57)
        return 1;//chữ
    else
        return 2;//số
}

//tách từng mảng con chứa chữ+số
tachMangCon = (s) => {
    let vtD = 0, arr = [];
    let t = ktKyTu(s[0]);
    for (i = 1; i < s.length; i++) {
        if (t !== ktKyTu(s[i])) {
            arr = arr.concat(s.substring(vtD, i));
            vtD = i;
            t = ktKyTu(s[i]);
        }
    }
    arr = arr.concat(s.substring(vtD, i));
    return arr;
}

themGach = (arr1) => {
    let s1 = s2 = s = end = '';
    let n = arr1.length;
    if (n < 3) {
        console.log(arr1[0] + '-' + arr1[1]);
    }
    else {
        for (let j = 0; j < n; j++) {
            for (x = 0; x < j; x++) {
                if (s1 == '')
                    s1 = arr1[x];
                else
                    s1 = s1 + '-' + arr1[x];
            }
            for (let h = j; h < (j + 2); h++) {
                if (arr1[h])
                    s = s + arr1[h];
            }

            for (y = j + 2; y < n; y++) {
                if (s2 == '')
                    s2 = arr1[y];
                else
                    s2 = s2 + '-' + arr1[y];
            }
            if (s1 == '')
                console.log(s + '-' + s2);
            else if (s2 == '')
                console.log(s1 + '-' + s);
            else
                console.log(s1 + '-' + s + '-' + s2);
            s1 = s2 = s = '';
        }
    }
}

Main = (strr) => {
    let vtD = 0;
    let vtC = 0;
    let a = '';
    let array = [];
    let mang = [];

    //Xuất mảng các chuỗi con thỏa số+chữ
    for (let i = 0; i <= strr.length; i++) {
        if (strr[i] === ' ') {
            vtC = i;
            a = strr.substring(vtD, vtC);
            if (ktChuoiSoKyTu(a) === 2) {
                array = array.concat(a);
            }
            vtD = i + 1;
            a = '';
        }
    }
    console.log(array);

    for (let j = 0; j < array.length; j++) {
        mang = tachMangCon(array[j]);
        themGach(mang);
    }
}

Main(string);