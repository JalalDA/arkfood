const arkFood = (harga, voucher, jarak, pajak)=>{
    let potongan
    let ongKir = 5000
    let subTotal
    if(typeof harga !== 'number'){
        return 'Harga harus berupa angka'
    }
    if(typeof voucher !== 'string'){
        return 'Voucher harus berupa string'
    }
    if(voucher !== 'ARKFOOD5' && voucher !== 'DITRAKTIRDEMY'){
        return 'Voucher tidak ditemukan'
    }
    if(typeof jarak !== 'number'){
        return 'Masukan jarak dengan benar, jarak harus berupa angka'
    }
    if(typeof pajak !== 'boolean'){
        return 'Masukan pajak dengan benar, pajak harus berupa boolean'
    }
    if(harga < 25000){
      potongan = 0
    }
    if( harga >= 25000 && voucher === 'DITRAKTIRDEMY'){
        potongan = harga * 30/100
        if(potongan>=30000){
            potongan = 30000 
        }
    }
    if((harga >= 25000 || harga < 50000) && voucher === "ARKFOOD5"){
        potongan = 0
    }
    if( harga >= 50000 && voucher === 'ARKFOOD5'){
        potongan = (harga * 50 )/100
        if(potongan >= 50000){
            potongan = 50000
        }
    }
    if (jarak > 2){
        ongKir = (jarak - 2) * 3000 + 5000
    }
    if(pajak){
        pajak = harga * 5 / 100
    }else{
        pajak = 0
    }
    subTotal = harga + ongKir + pajak - potongan
    return `Harga : ${harga}
Potongan : ${potongan}
Biaya Antar : ${ongKir}
Pajak : ${pajak}
SubTotal : ${subTotal} `
}

console.log(arkFood(35000,'ARKFOOD5',  5, true));