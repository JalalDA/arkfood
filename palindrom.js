//Membuat sebuah program untuk mengecek apakah sebuah kata adalah palindrom atau bukan

function cekPalindrom(word){
    let hasil = ""
    x = word.length - 1
    if (typeof word !== 'string'){
        return `word harus berupa string`
    }
    if(x > 0){
        for (let i = x ; i>= 0 ; i --){
            hasil += word[i]
        }
    }
    if( hasil.toLocaleLowerCase() !== word.toLocaleLowerCase()){
        return 'Bukan palindrom'
    }else{
        return 'Palindrom'
    }
}

console.log(cekPalindrom(1234));