/*function pieRecipe(allspice,nutmeg,cinnamon) {
    if (allspice === 0 || nutmeg ===0) {
        if (allspice === 0 && nutmeg ===0) {
            if (nutmeg === 1 && cinnamon === 1){
                if (allspice === 1 && cinnamon === 1 && nutmeg === 0){
                    let message = "This recipe is false";
                    return message;
                }
               // else {
               //     let message = "This recipe is true";
               // }
                let message = "This recipe is true";
                return message;
            }
            else {
                let message = "This recipe is false";
            }
            let message = "This recipe is false";
            return message;
        }
        else {
            let message = "This recipe is true";
            return message;
        }
    }
    else {
        let message = "This recipe is false";
        return message;
    }
}

console.log(pieRecipe(1,0,1));
*/

/*function pieRecipe(allspice,nutmeg,cinnamon) {
    let message;
    switch (allspice === 0 && nutmeg === 0 && cinnamon === 0) {
        case 0 , 0 , 0:
            message = "This recipe is FALSE";
            console.log(message);
            break;
        case 0 , 0 , 1:
            message = "This recipe is TRUE";
            console.log(message);
            break;
    }
}

pieRecipe(0,0,0);
pieRecipe(0,0,1);*/

/*function pieRecipe(allspice , nutmeg , cinnamon) {
    if (allspice === 0 && nutmeg === 0 && cinnamon ===0 || 1) {
        let message = "This recipe is FALSE";
        console.log(message);
    } else {
        if (allspice ===0 && nutmeg === 1 && cinnamon ===0 || 1) {
            let message = "This recipe is TRUE";
            console.log(message);
        }
    }
}

pieRecipe(0,1,0);*/

function pieRecipe(allspice , nutmeg , cinnamon) {
    if (allspice === 0 && nutmeg === 0 && cinnamon === 0 ) {
        let message = "This recipe is FALSE";
        console.log(message);
    } else {
        if (allspice === 0 && nutmeg === 0 && cinnamon === 1 ) {
            let message = "This recipe is FALSE";
            console.log(message);
        } else {
            if (allspice === 0 && nutmeg === 1 && cinnamon === 0 ) {
                let message = "This recipe is TRUE";
                console.log(message);
        } else {
            if (allspice === 0 && nutmeg === 1 && cinnamon === 1 ) {
                let message = "This recipe is TRUE";
                console.log(message);
                } else {
                    if (allspice === 1 && nutmeg === 0 && cinnamon === 0 ) {
                        let message = "This recipe is TRUE";
                        console.log(message);
                }  else {
                    if (allspice === 1 && nutmeg === 0 && cinnamon === 1 ) {
                        let message = "This recipe is FALSE";
                        console.log(message);
                } else {
                    if (allspice === 1 && nutmeg === 1 && cinnamon === 0 ) {
                        let message = "This recipe is FALSE";
                        console.log(message);
                } else {
                    if (allspice === 1 && nutmeg === 1 && cinnamon === 1 ) {
                        let message = "This recipe is FALSE";
                        console.log(message);
                }
            }}}}}
        } 
    }
}

pieRecipe(1,1,1);