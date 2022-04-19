//Buatlah function deret angka yang menjadikan angka 0 sebagai pemisah, lalu bilangan tersebut akan di urutkan dan digabung kembali tanpa bilagngan 0

function deretAngka(param){

    if(typeof param !== 'number'){
        return 'Parameter harus berupa angka'
    }
    if(param.toString().split('').length <=1){
        return 'Parameter harus berupa deret angka (lebih dari 1 angka)'
    }
    let b = param.toString().split('0')
    let hasil = ''
    for(i=0; i<= b.length-1; i++){
        hasil += b[i].split('').sort((a,b)=>a-b).join('')
    }
    return hasil
}

console.log(deretAngka(5956560159466056));