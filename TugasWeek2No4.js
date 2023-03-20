// variable
const text = 'malam'


function checkPalindrome(text) {

    if (text.length <= 2) {
        console.log('text harus lebih dari 2 huruf!!')
    }
    //('Mengecek palindrome kata : ', text)
    const textSplit = text.split('');
    // console.log('Pertama split text by huruf dijadikan array ', textSplit)
    const textReverse = textSplit.reverse();
    // console.log('Didalam array ada fungsi reverse untuk membalikan posisi array ', textReverse)
    const textReverseJoin = textReverse.join('');
    // console.log('Join hasil reverse tadi agar menjadi kata yang utuh', textReverseJoin)
    if (text === textReverseJoin) {
       console.log('Palindrome')
    } else {
      return  console.log('bukan palindrome')
    }
}

checkPalindrome('malam')