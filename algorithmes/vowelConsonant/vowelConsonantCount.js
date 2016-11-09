/*
    TIPS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp
    http://www.regexr.com/
*/

module.exports = function vowelConsonantCount(word){
    // YOUR CODE HERE :)
    let v = 0;
    let c = 0;

    if ( word && word !== '' && isNaN(word) ){
      for (let i =0; i < word.length ; i++){
          if (word[i].toLowerCase() == 'a' ||word[i].toLowerCase() == 'e' ||
          word[i].toLowerCase() == 'i' || word[i].toLowerCase() == 'o' ||
          word[i].toLowerCase() == 'u' || word[i].toLowerCase() == 'y')
              v += 1
          else
              c += 1
      }
    }
    return {v:v, c:c}
}
