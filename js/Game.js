class Game{
    constructor(){

    }
    //read game form database
    getState(){
        var gameStateRef=database.ref('gameState');
        //add a listener on gamestate
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    //to update the state in the data base
    update(state){
        //refers to mane datadase=/
database.ref('/').update({
    gameState:state
})
    }
    //start the game and display the sreen 
    start(){
        if(gameState===0){
player=new Player()
player.getCount();
form=new Form();
form.display();
        }
    }
}