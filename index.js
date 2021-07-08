// Code your solution here

function findMatching(drivers, name){
    let x = drivers.filter(function(abc){
        if (abc.toLowerCase() === name.toLowerCase()){
            return(abc);
        }
        
    })
    return(x);
}

function fuzzyMatch(drivers, name){
    let x = drivers.filter(function(abc){
        if (abc.substring(0,2) === name.substring(0,2)){
            return(abc);
        }
        
    })
    return(x);
}

function matchName(drivers, name){
    let x = drivers.filter(function(abc){
        if (abc.name === name){
            return(abc);
        }
        
    })
    return(x);
}