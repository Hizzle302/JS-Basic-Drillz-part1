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
    
         return input[0] + input[1] + input[2];
    }

    getSuffix(input){

        return input[3] + input[4] + input[5];
    }

    getMiddleCharacter(input){
        return input[4];
    }

    getFirstWord(input){
        let firstWord = input.split(' ');
         return firstWord[0];
    }
    
    getSecondWord(spaceDelimnatedInput){
        return null;
    }
    
    reverse(input){
        return null;
    }
}

module.exports = StrangerStrings;