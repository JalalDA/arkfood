//Membuat sebuah program untuk mengubah urutan kata - kata dalam sebuah kalimat menjadi terbalik

function reverseWord (words){
    let hasil = ""
    let kata = ''
    if(typeof words !== 'string'){
        return 'Words harus berupa string'
    }
    if(words.length > 0){
        for (i = 0; i <= words.length - 1; i++){
            if(words[i] !== " "){
                kata = kata + words[i]
            }else{
                hasil = kata + " " + hasil 
                kata = ""
            }
        }
        return hasil = kata + " " + hasil
    }
}

console.log(reverseWord('saya belajar javascript'));