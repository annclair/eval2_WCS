/*
    TIPS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp
    http://www.regexr.com/
*/

module.exports = function vowelConsonantCount(word){
    // YOUR CODE HERE :)
    let v = 0;
    let c = 0;

    return (word && word !== '' && isNaN(word) ?
      {v : word.toLowerCase().match(/[aeiouy]/g).length,
      c : word.toLowerCase().match(/[^aeiouy]/g).length} :
      {v : 0 , c : 0} )
}
