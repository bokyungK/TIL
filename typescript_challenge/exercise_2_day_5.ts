// exercise 2 : class with typescript
type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
            this.words = {};
    }
    addWord(word: Word) {
            if(this.words[word.term] === undefined) {
                    this.words[word.term] = word.def;
            }
    }
    getDef(term: string) {
            return this.words[term];
    }
    // my answer - function definition
        // 단어를 삭제함
    deleteWord(term: string) {
        if(this.words[term]) {
                delete this.words[term];
        }
    }
        // 단어를 업데이트 함
    updateWord(previousTerm: string, nextTerm: string) {
        if(this.words[previousTerm]) {
            delete Object.assign(this.words, {[nextTerm]: this.words[previousTerm] })[previousTerm];
        }
    }
        // dictionary의 단어를 모두 프린트함
    showAll() {
        console.log("show all 단어 리스트 :", Object.keys(this.words));
    }
        // dict 단어들의 총 count를 리턴함
    count() {
        return Object.keys(this.words).length;
    }
}

class Word {
    constructor(
            public term: string,
            public def: string
    ) {}
}

// my answer - function call
const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict()

dict.addWord(kimchi);
dict.deleteWord("kimchi");
console.log("delete 결과", dict);

dict.addWord(kimchi);
dict.updateWord("kimchi", "kimchi_2");
console.log("update 결과", dict);

dict.showAll();

console.log("count 결과", dict.count());