function countVowels(){
    let paragraph = document.getElementById("paragraph").value;
    let vowels = ['a','e','i', 'o','u'];
    let vowelCount = 0;
    for(let i =0; i < paragraph.length; i++){
        if(vowels.includes(paragraph[i])){
            vowelCount++
        }
    }
    document.getElementById('result').innerHTML = `${vowelCount}`
}