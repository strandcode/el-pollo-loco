// NOTE Create bottles for level 1
let bottle = new Bottle();
let allBottlesInTheWorld = [];

bottle.createBottlePair(250);
bottle.createBottlePair(550);
bottle.createBottlePair(700);
bottle.createBottlePair(850);
bottle.createBottlePair(1000);
bottle.createBottlePair(1150);
bottle.createBottlePair(1300);
bottle.createBottlePair(1450);
bottle.createBottlePair(1600);
bottle.createBottlePair(1750);
bottle.createBottlePair(1900);
bottle.createBottlePair(2050);
bottle.createBottlePair(2200);
bottle.createBottlePair(2350);
bottle.createBottlePair(2500);

// NOTE Create coins for level 1
let coin = new Coin();
let allCoinsInTheWorld = [];

coin.createCoinPair(200, 100);
coin.createCoinPair(225, 125);
coin.createCoinPair(400, 75);
coin.createCoinPair(425, 100);
coin.createCoinPair(700, 100);
coin.createCoinPair(725, 125);
coin.createCoinPair(900, 100);
coin.createCoinPair(925, 125);
coin.createCoinPair(2900, 100);
coin.createCoinPair(2925, 125);

// NOTE Create chicks for level 1
let chick = new Chick();
let allChicksInTheWorld = [];

chick.createChicks(1000, 10);


// NOTE Create hens for level 1
let hen = new Hen();
let allHensInTheWorld = [];

hen.createHens(1500, 5);
