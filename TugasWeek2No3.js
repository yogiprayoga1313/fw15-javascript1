function NilaiRaraRata() {
    // pendefinisian variable
    const mtk = 90;
    const bahasaIndonesia = 80;
    const bahasaIngrris = 80;
    const ipa = 80;

    // check kondisi
    // kenapa disi 0 karena zero value dari number itu 0
    // Return untuk mengecek kondisi terpenuhi atau tidak dan mengembalikan nilai
    if (mtk === 0) {
        return console.log('Matematika Harus diisi')
    } if (bahasaIndonesia === 0) {
        return console.log('Bahasa Indonesia Harus diisi')
    } if (bahasaIngrris === 0) {
        return console.log('Bahasa Ingrris Harus diisi')
    } if (ipa === 0) {
        return console.log('Bahasa Ingrris Harus diisi')
    }

    const nilaiRataRata = (mtk + bahasaIndonesia + bahasaIngrris + ipa) / 4;

    if (nilaiRataRata >= 90 && nilaiRataRata <= 100) {
        console.log('Grade A')
    }if (nilaiRataRata >= 80 && nilaiRataRata <= 89) {
        console.log('Grade B')
    } if (nilaiRataRata >= 70 && nilaiRataRata <= 79) {
        console.log('Garade C')
    } if (nilaiRataRata >= 60 && nilaiRataRata <= 69) {
        console.log('Garade D')
    }if (nilaiRataRata >= 0 && nilaiRataRata <= 59) {
        console.log('Garade E')
    }
   console.log('Rata-rata Nilai: ' + nilaiRataRata);
}

NilaiRaraRata()
    
   
   
    
