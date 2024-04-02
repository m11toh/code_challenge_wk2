const string = 'papa Is A hero'

function lowertoUpper(){
     const text = string.split('')
     .map(function(change){
      return change === change.toUpperCase() ? change.toLowerCase() : change.toUpperCase()
}).join('');

        return text;
}
 console.log(lowertoUpper());
