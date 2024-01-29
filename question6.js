const scores = [ 25, 70, 69, 84, 66, 70, 15, -63, 102, 98, -1,
                 0, 100, 51, 77, 14, 5, 314, -214748, 7];

for(i=0 ; i<=scores.length ; i++){
    if(scores[i]>=0 && scores[i]<=100)
        console.log(scores[i]);
    else{
        console.log("This score is not valid");
    }
    var sum = sum + scores[i];
    var sub = i;
}
