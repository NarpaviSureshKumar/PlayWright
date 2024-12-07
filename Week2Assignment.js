

function lenthOfLastWords(s){
     s = s.trim();
    let words = s.split(' ');   //spliting the string by words
    let lastword = words[words.length-1];  //last word
    return lastword.length;   // length of last word


}

let s = "Hello World";
console.log(lenthOfLastWords(s));


let s1 = "fly me  to  the moon";
console.log(lenthOfLastWords(s1));

function isAnagram(s1,s2){
s1 = s1.trim();
s2 =s2.trim();
s1=s1.replace(/[^a-z0-9]/gi, '').toLowerCase();
s2=s2.replace(/[^a-z0-9]/gi, '').toLowerCase();

s1=s1.split('').sort().join();
s2=s2.split('').sort().join();

return s1 === s2;
}

const string1 = 'listen';
const string2 = 'silent';

// const string1 = 'hello';
// const string2= 'world';

if(isAnagram(string1, string2)){
    console.log(`${string1} and ${string2} are Anagrams.`);
}
else{
    console.log(`${string1} and ${string2} are not Anagrams.`)
}