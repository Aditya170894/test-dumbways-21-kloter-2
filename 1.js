function hitungGaji(golongan, gender, status, anak){

let gaji = 0;
let tunjangan = 0;
let tunjanganIstri = 0;
let tunjanganAnak = 0;
let pensiun = 200000;
let bpjs = 150000;
console.log('HASIL PERHITUNGAN GAJI');
console.log('==========================');
console.log('INFO PEGAWAI');
console.log('==========================');
console.log('Pegawai yang bersangkutan');
if (golongan === "Golongan 1") {
  gaji = 1500000;
  tunjangan = 200000;
} else if (golongan === "Golongan 2"){
  gaji = 2000000;
  tunjangan = 400000;
} else if (golongan === "Golongan 3") {
  gaji = 3000000;
  tunjangan = 6000000;
} else (golongan === "Golongan 4") 
  gaji = 4000000;
  tunjangan = 1000000;

console.log(`Golongan : ${golongan}`)
if (gender === "Laki-laki"){
  tunjanganIstri = 200000;
}
console.log(`Jenis Kelamin : ${gender}`)
if (status === "Menikah") {
console.log(`Jumlah Anak : ${anak}`);
if (anak > 2) {
  anak = 2;
}
tunjanganAnak = 100000*anak;
}
let total = gaji + tunjangan + tunjanganIstri + tunjanganAnak;
let pajak = total * 0.1;
let gajiSementara = total - pajak;
let gajiBersih = gajiSementara - (pensiun + bpjs);
console.log('==========================');
console.log('GAJI DAN TUNJANGAN');
console.log('==========================');
console.log(`Gaji Pokok : ${gaji}`);
console.log(`Tunjangan : ${tunjangan}`);
console.log(`Tunjangan Istri : ${tunjanganIstri}`);
console.log(`Tunjangan Anak : ${tunjanganAnak}`);
console.log(`Total : ${total}`);
console.log(`Pajak 10% : ${pajak}`);
console.log(`Gaji Sementara : ${gajiSementara}`);
console.log('==========================');
console.log('GAJI BERSIH');
console.log('==========================');
console.log(`Potongan Pensiun : ${pensiun}`);
console.log(`Potongan BPJS : ${bpjs}`);
console.log(`Gaji Bersih : ${gajiBersih}`);
}
hitungGaji("Golongan 4", "Laki-laki", "Menikah", 1)