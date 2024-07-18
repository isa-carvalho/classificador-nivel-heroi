let nomeHeroi = "Isa"
let niveldeheroi = 10001

if (niveldeheroi <= 1000){
    console.log("O Héroi de nome " + nomeHeroi , " está no nivel: " + niveldeheroi, "Rank: FERRO " )
}
else if (niveldeheroi >=1001  && niveldeheroi < 2000){
    console.log("O Héroi de nome "+ nomeHeroi , "esta no nível: " + niveldeheroi, "Rank : BRONZE")
}
else if(niveldeheroi >=2001 && niveldeheroi <=5000 ){
    console.log("O Héroi de nome "+ nomeHeroi, "está no nível: "+ niveldeheroi, " Rank : PRATA ")
}
else if(niveldeheroi >=5001 && niveldeheroi <=7000){
    console.log("O Héroi de nome "+ nomeHeroi , "esta no nível " + niveldeheroi, "Rank: OURO")
}
else if(niveldeheroi >=7001 && niveldeheroi <=8000){
    console.log("O Héroi de nome "+ nomeHeroi , "esta no nível " + niveldeheroi, "Rank: PLATINA ")
}
else if(niveldeheroi >=8001 && niveldeheroi <=9000){
    console.log("O Héroi de nome "+ nomeHeroi , "está no nível "+ niveldeheroi, "Rank: ASCENDENTE ")
}
else if (niveldeheroi >=9001  && niveldeheroi <=10000){
    console.log("O héroi de nome "+ nomeHeroi , "está no nível "+ niveldeheroi,"Rank: IMORTAL")
}
else if( niveldeheroi === 10001)
    console.log("O Héroi de nome "+nomeHeroi , "está no nivel " +  niveldeheroi, "Rank:  RADIANTE")
