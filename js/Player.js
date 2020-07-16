class Player{
    constructor(){
        
    }
    getCount(){
        var playerCountRef=database.ref('playerCount');
        //add a listener on gamestate
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        //refers to mane datadase=/
database.ref('/').update({
    playerCount:count
})
    }
    //update playername in database
    update(name){
        var playerIndex="player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}