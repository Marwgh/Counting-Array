"use strict";
let count = 0 ;
//count = 0
const arri = [] ;

init();

function init () {
    console.log("haha");
    count += 1 ; 

    arri.unshift(count) ;
    // add to the arri the count value 

    console.log(arri);
    // count = count +1
    console.log(count);
    
    //checks if count is bigger thant 10
    if ( count == 30 ) {
        console.log("That should be long in-of ");

        
        
    } else if ( count >= 9  ) {
        //if yes do this 
        arri.pop(8);
        
        setTimeout(init,1000) ;
    } else {

        //if not do that
        setTimeout(init,1000) ;
    }

}




