class StrangerStrings {

    getHelloWorld(){
        let str = "Hello World";
        return str;
    }

    concatenation(firstSegment, secondSegment){
        let str = firstSegment + secondSegment;
        return str;
    }

    getPrefix(input){
        let prefix = input.split("",3).join("");
         return prefix;
    }

    getSuffix(input){
        let characterArray = input.split("");
        let sliceStart = characterArray.length - 3;
        let sliceEnd = characterArray.length - 1;
        let suffix = "";
        for(let i = sliceStart; i <= sliceEnd; i++){
            suffix = suffix + characterArray[i];
            console.log("index " + i + " of characterArray = " + characterArray[i]);        
        }
        return suffix;
    }

    getMiddleCharacter(input){
        return input[4];
    }

    getFirstWord(inputValue){
        let sentenceArray = inputValue.split(' ');
        let firstWord = sentenceArray[0];
         return firstWord;
    }
    
    getSecondWord(inputValue){
        let sentenceArray = inputValue.split(' ');
        let secondWord = sentenceArray[1];
        return secondWord;
    }
    
    reverse(inputValue){
        let newString = "";
        for(let i = inputValue.length - 1; i >= 0; i--){
            newString += inputValue[i];
        }
        return newString;
    }
}

module.exports = StrangerStrings;