//const cities = [
//    { name: 'Budapest', population: 1706851},
//    { name: 'Copenhagen', population: 680842},
//    { name: 'Helsinki', population: 631695},
//    { name: 'Berlin', population: 3850809},
//    { name: 'Riga', population: 609489},
//    { name: 'London', population: 8799800},
//    { name: 'Rome', population: 2860009},
//    { name: 'Reykjavik', population: 139875},
//    { name: 'Lisbon', population: 548703},
//  ];
  
  var cities = new Map();
  cities.set('Budapest' , 1706851);
  cities.set('Copenhagen' , 680842);
  cities.set('Helsinki' , 631695);
  cities.set('Berlin' , 3850809);
  cities.set('Riga' , 609489);
  cities.set('London' , 8799800);
  cities.set('Rome' , 2860009);
  cities.set('Reykjavic' , 139875);
  cities.set('Lisbon' , 548703);

  for (let [key,value] of cities) {
    if (value<=1000000){
      console.log(key + " = " + value);
    }else
      console.log(key + " is more crowded");
}

  