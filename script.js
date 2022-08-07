let toyota = [`corolla`,`camry`,`rav-4`,`tacoma`,`tundra`];

// if condition

console.log(toyota);

for (let i = toyota.length ; i > 0  ; i--) {
  
  toyota.pop();

  console.log(toyota);
  
}

// console out put : [ 'corolla', 'camry', 'rav-4', 'tacoma', 'tundra' ]
                      // [ 'corolla', 'camry', 'rav-4', 'tacoma' ]
                            // [ 'corolla', 'camry', 'rav-4' ]
                                  // [ 'corolla', 'camry' ]
                                        //  [ 'corolla' ]
                                              //  []

// while condition

let counter = toyota.length;

while(counter > 0){

  toyota.pop();

  console.log(toyota);

  counter-- ;
  
};

// console out put : [ 'corolla', 'camry', 'rav-4', 'tacoma', 'tundra' ]
                      // [ 'corolla', 'camry', 'rav-4', 'tacoma' ]
                            // [ 'corolla', 'camry', 'rav-4' ]
                                  // [ 'corolla', 'camry' ]
                                        //  [ 'corolla' ]
                                              //  []
