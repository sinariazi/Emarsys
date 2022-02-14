//Import Dependencies
const _ = require('lodash')
const fs = require('fs')
const prompt = require('prompt-sync')();
 let flag=false 
 let textArray=[]
 let userInputArray=[]
 let sample=[]
function anageram(userInput){
     userInput = prompt('please enter a word:')
      fs.readFile('./wordlist.txt','utf8',function(err, text){
        if (err){
            return console.error(err)
        }
     userInputArray =userInput.split('').sort()
     textArray= text.split(/\r\n|\r|\n/)

     for(let i=0; i<textArray.length ;i++){
         sample =textArray[i].split('').sort(); 
         if(sample.length==userInputArray.length && _.isEqual(sample,userInputArray )) {
            console.log(`the ${textArray[i]} Anageram has been found with index of ${i}`,textArray[i].split('')) 
             flag=true 
            }} if(flag==false){ console.log(`didnt find any anagram for : ${userInput}`)}
        
         
    } )
}
anageram()
