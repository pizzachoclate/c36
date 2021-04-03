class Form{
    constructor(){
        this.input=createInput("Name")
        this.Button=createButton("Play")
        this.Gretting=createElement("h3")
    }
    hide(){
        this.input.hide()
        this.Button.hide()
        this.Gretting.hide()
    }
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(130,0)

       
       this.input.position(130,160)
       this.Button.position(250,200)

        this.Button.mousePressed(()=>{
            this.input.hide()
            this.Button.hide()
            player.name=this.input.value()
            playerCount++
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)

            this.Gretting.html("Hello"+player.name)

            this.Gretting.position(130,160)
        }
        )

        
    }
}