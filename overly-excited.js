// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let exclamation = "!"

/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
function addExcitement (theWordArray, question) {
    let sentenceToWrite = ""
    for (let index = 0; index <theWordArray.length; index++) {
        let thirdword = theWordArray[index]  
        if (index % 3 === 2){ 
            thirdword += question + " "
        }
        else {thirdword += " "}
        sentenceToWrite += thirdword + " "
        console.log(sentenceToWrite)
      }
}

// I want to use a question mark
addExcitement(sentence, "?");

// I added a section to better understand !!
addExcitement(sentence, "*");
