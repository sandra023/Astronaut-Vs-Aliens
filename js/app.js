const gameBoardLevelOne = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,0,0,1,1,1,1,0],
    [0,1,3,3,1,1,1,1,3,3,1,0],
    [0,1,3,1,1,3,3,1,1,3,1,0],
    [0,1,1,1,3,1,1,3,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,3,1,1,3,1,1,1,0],
    [0,1,3,1,1,3,3,1,1,3,1,0],
    [0,1,3,3,1,1,1,1,3,3,1,0],
    [1,1,3,1,1,0,0,1,1,3,1,0],
    [0,1,1,1,0,0,0,0,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
]

const gameBoardLevelTwo = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,0,1,1,1,0,1,1,1,1,0],
    [0,1,0,0,1,0,1,0,1,0,1,0,0,1,0],
    [0,1,0,1,1,1,1,0,1,1,1,1,0,1,0],
    [0,1,1,1,0,0,1,1,1,0,0,1,1,1,0],
    [0,1,0,1,1,1,1,0,1,1,1,1,0,1,0],
    [0,1,1,1,0,1,0,1,0,1,0,1,1,1,0],
    [0,0,0,1,0,1,1,1,1,1,0,1,0,0,0],
    [0,1,1,1,0,1,0,1,0,1,0,1,1,1,0],
    [0,1,0,1,1,1,1,0,1,1,1,1,0,1,0],
    [0,1,1,1,0,0,1,1,1,0,0,1,1,1,0],
    [0,1,0,1,1,1,1,0,1,1,1,1,0,1,0],
    [1,1,0,0,1,0,1,0,1,0,1,0,0,1,0],
    [0,1,1,1,1,0,1,1,1,0,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]


class GameLevel {
    constructor(gameBoardLevel){
        this.gameBoard = gameBoardLevel
        this.square;   
    }
    buildInfoBoard(){
        const mazeContainer = $('<div id=mazeContainer>')
        $('body').append(mazeContainer)
        const infoDiv = $('<div>').addClass('infoBoard')
        $(mazeContainer).append(infoDiv)
        const firstDiv = $('<div class=column id=firstDiv>')
        const secondDiv =  $('<div class=column id=secondDiv>')
        const thirdDiv = $('<div class=column id=thirdDiv>')
        const fourthDiv = $('<div class=column id=fourthDiv>')
        const fifthDiv = $('<div class=column id=fifthDiv>')
        
        const levelH4 = $('<h4 id=level>').text('Level')
        const pointsH4 = $('<h4 id=pointsCounter>').text('Energy Coins')
        const itemsH4 = $('<h4 id=items>').text('Items Found')
        const livesH4 =$('<h4 id=livesCount>').text('Lives')
        const killCountH4 = $('<h4 id=killCount>').text("Enemy Kills")
        
        const first = $('<div class=columnB>').addClass('first')
        const second = $('<div class=columnB>').addClass('second')
        const third = $('<div class=columnB>').addClass('third')
        
        const firstLife = $('<div class=columnB>').addClass('life3 life')
        const secondLife = $('<div class=columnB>').addClass('life2 life')
        const thirdLife = $('<div class=columnB>').addClass('life1 life')

        const kills = $('<p id=kills>').text(0)
        const points = $('<p id=points>').text(0)
        const levelNumber = $('<p id=levelNumber>').text(1)
        // const lives = $('<p id=lives>').text(3)
        $(infoDiv).append(firstDiv, secondDiv, thirdDiv, fourthDiv, fifthDiv)
        
        $(firstDiv).append(levelH4)
        $(levelH4).append(levelNumber)
        
        $(secondDiv).append(pointsH4)
        $(pointsH4).append(points)
        
        $(thirdDiv).append(itemsH4, first, second, third)
        
        $(fourthDiv).append(killCountH4)
        $(killCountH4).append(kills)
        
        $(fifthDiv).append(livesH4,firstLife, secondLife, thirdLife)
        // $(livesH4).append(firstLife, secondLife, thirdLife)
        
        const mazeDiv = $('<div>').addClass('maze')
        $('#mazeContainer').append(mazeDiv)
    }
    generateMaze() {
        for(let y=0; y<this.gameBoard.length; y++){
            const div = $('<div>').addClass(`column${y+1}`)
            $('.maze').append(div)
            for (let x=0; x<this.gameBoard[y].length; x++){
                const square = $(`<div x=${y} y=${x}/>`);
                square.addClass('square');
                $(`.column${y+1}`).append(square)
                if(this.gameBoard[x][y]=== 0){
                    square.addClass('border wall')} 
                else if(this.gameBoard[x][y]=== 1){
                    square.addClass('path')
                    square.addClass('coin')
                } else if (this.gameBoard[x][y]=== 3){
                    square.addClass('insideWall')
                }
            }
        }
    }
    levelOneGameAssets= () => {
        let Item1Level1 = new Item(1,1,'item1')
        let Item2Level1 = new Item(10,10, 'item2')    
        let Enemy1 = new Enemy(6,4,"alien1",500);
        let Enemy2 = new Enemy(5,6,"alien1",500);
        let Enemy3 = new Enemy(5,4,"alien1",500);
        let Enemy4 = new Enemy(6,6,"alien1",500);
    }
    levelTwoItemsAndEnemies = () => {
        let Item1Level1 = new Item(1,1,'item1')
        let Item2Level2 = new Item (13,13, 'item2')
        let Enemy6 = new Enemy(8,7,"alien1",500);
        let Enemy7 = new Enemy(7,7,"alien2",500);
        let Enemy8 = new Enemy(6,7,"alien3",500);
        let Enemy9 = new Enemy(7,8,"alien4",500);
        let Enemy10 = new Enemy(7,6,"alien5",500);
        let Enemy11 = new Enemy(3,3,"alien6",500);
        let Enemy12 = new Enemy(11,11,"alien7",500)
    }
    buildPage(){
        this.buildInfoBoard()
        this.generateMaze()
        this.levelOneGameAssets()
    }
}

function grabSquare(x,y){
    return $(`.square[x="${x}"][y="${y}"]`)
}

class Player {

    constructor(x,y,className,classNameGun){
        this.gameBoard = gameBoardLevelOne
        this.points = 0
        this.lives = 3
        this.level = 1
        this.killCount = 0
        this.itemsFound = 0
        this.enemies = []
        this.direction = null
        this.alive = true
        this.hasGun = false
        this.movingDirection = 'Right'
        this.shootingDirection = ''
        this.previousDirection = 'right'
        this.exitPhrase = "You've reached the portal!"
        // this.errorPortalPhrase = "Your missing the energy to power the portal!"
        this.className = className
        this.classNameGun = classNameGun // maybe could probably just use variable  `{this.className}NoGun${this.movingDirection}`

    }
    render(){
        // console.log('this.movDirection ', this.movingDirection)
        $(`.${this.className}${this.movingDirection}`).removeClass('item1')
        $(`.${this.className}${this.movingDirection}`).removeClass('item2')
        $(`.${this.className}${this.movingDirection}`).removeClass('coin')
        $(`.${this.className}Right`).removeClass(`${this.className}Right`)
        $(`.${this.className}Left`).removeClass(`${this.className}Left`)
        $('.spaceManNoGunRight').removeClass('spaceManNoGunRight')
        $('.spaceManNoGunLeft').removeClass('spaceManNoGunLeft')

        grabSquare(this.x,this.y).addClass(`${this.className}${this.movingDirection}`)
    }
    move(){
        if (this.alive){
            if(this.direction === "left" && this.direction != this.previousDirection){
                this.direction = null
                this.previousDirection ="left"
            }
            else if(this.direction === "right" && this.direction != this.previousDirection){
                console.log("this.direction", this.direction)
                console.log('hello')
                console.log('this.prev', this.previousDirection)
                this.direction = null
                this.previousDirection ="right"
            }
            else if(this.direction=== "left" && grabSquare(this.x-1,this.y).is('.path, .ship')){
                this.x--;
                this.direction = null
            } 
            else if (this.direction === "right" && grabSquare(this.x+1,this.y).is('.path, .ship')){
                this.x++;
                this.checkWin()
                this.direction = null
            } else  if (this.direction=== "up" && grabSquare(this.x,this.y+1).is('.path, .ship')){
                this.y++;
                this.direction = null

            } else if (this.direction === "down" && grabSquare(this.x,this.y-1).is('.path, .ship')){
                this.y--
                this.direction = null
            }
            this.render();

            setTimeout(()=>{
                this.move();
                this.gatherItems()
            },100)
        }
        this.squaresMoved = 0
    }
    gatherItems(){
        let square = grabSquare(this.x,this.y)
        if (square.hasClass('coin')){
            this.points++
            $('#points').text(this.points)
        } else if (square.hasClass('item1')){
            $('.first').addClass('item1')
            this.itemsFound++
            this.points += 10
            this.hasGun = true
            this.className = 'spaceManGun'
        } else if (square.hasClass('item2')){
            $('.second').addClass('item2')
            if(this.level === 1){
                let levelOnePortal = new Item(11,1,'ship path')
            } else {
                let levelTwoPortal = new Item(14,1,'ship path')
            }
            this.itemsFound++
            this.points+=15
        }
    }
    shoot() {
        if(this.hasGun){
            this.direction = null
            if (grabSquare(this.x,this.y).is('.spaceManGunLeft')) {      
                this.shootingDirection = 'Left'
                let BlastFireLeft = new BlastFire(this.x, this.y,"blastFireLeft",175)
            }
            if (grabSquare(this.x,this.y).is('.spaceManGunRight')) {
                this.shootingDirection = 'Right'
                let BlastFireRight = new BlastFire(this.x,this.y,"blastFireRight",175)
            }
            $(`.${this.className}${this.shootingDirection}`).addClass(`spaceShoot${this.shootingDirection}`)
            $(`.spaceShoot${this.shootingDirection}`).removeClass(`${this.className}${this.shootingDirection}`)                    
           
            setTimeout(()=>{
                console.log("timeout hit")
                $(`.spaceShoot${this.shootingDirection}`).addClass(`${this.className}${this.shootingDirection}`)    
                $(`.spaceShoot${this.shootingDirection}`).removeClass(`spaceShoot${this.shootingDirection}`)
           
            },500)
        }
        
    }
    playerDies (){
        $(`.${this.className}${this.movingDirection}`).removeClass(`${this.className}${this.movingDirection}`);
        this.alive = false;
        $(`.life${this.lives}`).removeClass('life')
        this.lives--
        this.direction = null
        $('#lives').text(this.lives)
        alert(`Be carefull! You only have ${this.lives} lives left!`)
        if (this.level === 1){
            this.x = 0
            this.y = 9
        } else if (this.level === 2){
            this.x = 0
            this.y = 12
        }
        this.regeneration();
    }
    regeneration(){
        this.direction = null
        grabSquare(this.x,this.y).addClass(`${this.className}${this.movingDirection}`)
        this.alive = true
        this.render()
    }
    checkWin (){
        if(grabSquare(this.x,this.y).hasClass('ship')){
            console.log('check win hit')
            if ($('.first').hasClass('item1') && $('.second').hasClass('item2')){
                // console.log('this.level', this.level)
                this.level += 1
                this.gameBoard = gameBoardLevelTwo
                // console.log("this.level",this.level)
                $('#levelNumber').text(this.level)
                alert(`${this.exitPhrase}`)
                if(this.level === 2){
                    nextLevel()
                } else if (this.level > 2){
                    endGame()
                    scoreBoard.score();
                }
            } else {
                alert(`${this.errorPortalPhrase}`)
                this.x = 10
                this.y = 1
                this.direction = null
                grabSquare(this.x,this.y).addClass(`${this.className}${this.movingDirection}`)
            } 
        }
    }
    gameOver (){
        if(this.lives === 0){
        alert("Game Over")
        endGame();
        setTimeout(()=>{
            scoreBoard.score();
        },250)
        }
    }
}
let player = new Player(0,9,'spaceManNoGun','spaceManGun')

$('body').on('keydown', function(e){
    // console.log(typeof e.which);
    switch(e.which){
        case 37:
        if(player.movingDirection === 'Right'){
            player.previousDirection = "Right"
        }
        player.direction = "left";
        player.movingDirection = 'Left'
        break;
        case 39:
        if(player.movingDirection === 'Left'){
            player.previousDirection = "Left"
        }
        player.direction ="right";
        player.movingDirection = 'Right'
        break;
        case 38:
        player.direction ="down";
        break;
        case 40:
        player.direction = "up"
        break;
        case 32:
        player.direction = null;
        player.shoot()
        }
})

class BlastFire {
    constructor(x,y,image,speed){
        this.x = x
        this.y = y
        this.image = image
        this.render();
        this.speed = speed
        this.interval1 = setInterval(() => {
            this.blastMoves()
        }, this.speed);

    }
    render(){
        grabSquare(this.x,this.y).addClass(this.image)
    }
    destroy(){
        this.removeBlastFire()
        clearInterval(this.interval1);
        clearInterval(this.interval2);
    }
    removeBlastFire(){
        console.log('remove blast fire hit')
        grabSquare(this.x,this.y).removeClass(this.image)
    }

    blastMoves(){
        if (player.shootingDirection === 'Left'){
            if (grabSquare(this.x-1,this.y).is('.insideWall, .wall')) {
                this.destroy()
            }
            else if (grabSquare(this.x-1,this.y).is('.enemy')){
                grabSquare(this.x-1,this.y).addClass('enemyHit')
                this.destroy()
            }
            else if (grabSquare(this.x-1,this.y).hasClass('path')){
                this.removeBlastFire();
                this.x--;
                this.render();
            }
            
        } else if (player.shootingDirection === 'Right'){
            if (grabSquare(this.x+1,this.y).is('.insideWall, .wall')) {
                this.destroy()
            }
            else if (grabSquare(this.x+1,this.y).is('.enemy')){
                grabSquare(this.x+1,this.y).addClass('enemyHit')
                this.destroy()
            }
            else if (grabSquare(this.x+1,this.y).hasClass('path')){
                this.removeBlastFire();
                this.x++;
                this.render();
            }
            
        }
    }
    
}

class Enemy{
    constructor(x,y,image,speed){
        this.x = x
        this.y = y
        this.image = image;
        this.render();
        this.speed = speed
        this.interval1 = setInterval(()=>{ 
            this.enemyMoves();
        }, this.speed);
        this.interval2 = setInterval(()=>{ 
            this.checkKill();
            // player.checkWin();
            this.checkDeath();
        }, 10);
        (player.enemies).push(this);
    }  
    render(){
        grabSquare(this.x,this.y).addClass(this.image)
        grabSquare(this.x,this.y).addClass('enemy')

        // if (grabSquare(this.x,this.y).is('item1, item2, item3, item4')){
        //     grabSquare(this.x,this.y).removeClass('item1 item2 item3 item4')

        // }
    }
    checkDeath (){
        if (grabSquare(this.x,this.y).hasClass('enemyHit')){
            console.log('check death hit')
            this.removeEnemy();
            this.destroy();
            $('.enemyHit').removeClass('enemyHit')
            player.killCount++
            player.points += 10
            $('#points').text(player.points)
            $('#kills').text(player.killCount)

        }
    }
    checkKill (){
        if (grabSquare(this.x,this.y).hasClass(`${player.className}${player.movingDirection}`)){
            player.playerDies();
            player.gameOver();
        }
    }
    destroy() {
        clearInterval(this.interval1);
        clearInterval(this.interval2)
    }
    enemyMoves (){
    let randomNum = Math.floor(Math.random() * 4);
        if (randomNum === 0){
            if (grabSquare(this.x-1,this.y).hasClass('enemy')){
            }
            else if (grabSquare(this.x-1,this.y).hasClass('path')){
                this.removeEnemy();
                this.x--;
                this.render()
        }
        } else if (randomNum === 1){
            if (grabSquare(this.x+1,this.y).hasClass('enemy')){
            }
            else if (grabSquare(this.x+1,this.y).hasClass('path')){
                this.removeEnemy();
                this.x++;
                this.render();
        }
        } else if (randomNum === 2){
            if(grabSquare(this.x,this.y+1).hasClass('enemy')){
            }
            else if(grabSquare(this.x,this.y+1).hasClass('path')){
                this.removeEnemy();
                this.y++;
                this.render();
        }
        } else if (randomNum === 3)
            if(grabSquare(this.x,this.y-1).hasClass('enemyy')){
            }
            else if(grabSquare(this.x,this.y-1).hasClass('path')){
                this.removeEnemy();
                this.y--
                this.render();
        }   
    }
    removeEnemy(){
        grabSquare(this.x,this.y).removeClass(this.image)        
        grabSquare(this.x,this.y).removeClass('enemy')
    }
}

class Item {
    constructor(x,y,image){
        this.x = x
        this.y = y
        this.image = image;
        this.render();
    }
    remove(){
        grabSquare(this.x,this.y).removeClass(this.image)
    }
    render(){
        grabSquare(this.x,this.y).removeClass('coin')
        grabSquare(this.x,this.y).addClass(this.image)
    }
}


reset = () => {
    $('body').empty()
    // gameBoard = gameBoardLevelOne,
    player.lives = 3
    player.level = 1
    player.points = 0
    player.direction =  null,
    player.movingDirection = 'Right'
    player.itemsFound = 0
    player.x= 0
    player.y= 9
}

function readyPlayerOne (){
    reset()
    let gameLevelOne= new GameLevel(gameBoardLevelOne)
    gameLevelOne.buildPage()    
    player.render()
    player.move()
    
    
    // buildInfoBoard();     
    // generateMaze();   
    // levelOneGameAssets()
}

function nextLevel (){
    for(let i = 0; i < player.enemies.length; i++){
        player.enemies[i].destroy();
        player.enemies[i].removeEnemy();
    }
    console.log('players.enemies', player.enemies)
    $('.maze').empty()
    player.direction =  null,
    player.itemsFound = 0
    let gameLevelTwo = new GameLevel(gameBoardLevelTwo)
    gameLevelTwo.generateMaze()
    $('.square').css({'height': '4.5vh'}, {'width': '4.5vh'});
    player.x = 0
    player.y = 12
    player.regeneration()
    $('.first').removeClass('item2')
    $(`.${player.item}`).removeClass(`${player.item}`);
    gameLevelTwo.levelTwoItemsAndEnemies()
}

function endGame(){
    for(let i = 0; i < player.enemies.length; i++){
        player.enemies[i].destroy();
        player.enemies[i].removeEnemy();
    }
    scoreBoard.playerScore = player.points
    player.level = 1
    $('body').empty()
}



const scoreBoard = {
    playerScore: 0,
    playerName: '',
    highScoreArray: [
        {
            name: 'PACMAN',
            score: 5
        },
        {
            name: 'MS.PACMAN',
            score: 4
        },
        {
            name: 'MARIO',
            score: 3
        },
        {
            name: 'LUIGI',
            score: 2
        },
        {
            name: 'DONKEY KONG',
            score: 1
        }
    ],
    
    buildScoreboard(){
        const boardContainer = $('<div class=boardContainer>')
        $('body').append(boardContainer)
        const firstDiv = $('<div>').addClass('firstDiv')
        const board = $('<div>').addClass("highScoreBoard")
        $('.boardContainer').append(firstDiv, board)
        const highScore = $('<h2 class=highScore/>').text("HIGH SCORE")
        const theplayerScore = $('<h2 class=playerScore/>')
        const nameReg = $('<h2 class=nameRegister/>').text("NAME REGISTRATION")
        const name = $('<div class=columnC id=name/>').text("Name:")
        const nameEnter = $('<div class=columnC id=nameEnter/>')
        $(board).append(highScore, theplayerScore, nameReg, name, nameEnter)
        $('.playerScore').text(this.playerScore)
        console.log(this.playerScore,"this.playerscore")
    },
    buildNameBoxes (){
        for(let i = 0; i < 10; i++){
            const div = $('<div class=row1>').addClass(`columnD${i+1}`)
            $('#nameEnter').append(div)
        }
    },
    buildLetters (){
        const alphabet = $('<div class=alphabet>')
        $('.highScoreBoard').append(alphabet)
        for (let i = 65; i <91; i++){
            const letterDiv = $(`<div class=letter id=${i-64}>`).text(String.fromCharCode(i))
            $('.alphabet').append(letterDiv)
            letterDiv.click(function(e) {
                scoreBoard.playerName += e.target.innerHTML
                for (let x =1; x<11; x++) {
                    if($(`.columnD${x}`).text() === ''){
                        $(`.columnD${x}`).text(e.target.innerHTML);
                        break;
                    }
                }
            });
        }
    },
       addNameScore (){
        this.highScoreArray.push(this.playerName)
        console.log("highscosreayr", this.highScoreArray)
        for (let i = 0; i< this.highScoreArray.length; i++){
            if(this.highScoreArray[i].name === '' || this.playerScore > this.highScoreArray[4].score){
                this.highScoreArray[5] =  {"name": this.playerName, "score": this.playerScore}
                console.log('this.playerName', this.playerName)
                break; 
            }
        }
    },
    addEnterButton (){
        const enter = $(`<div class=letter id=28>`).text('SUBMIT')
        $('.alphabet').append(enter)
        enter.click(
            function(){
            
                scoreBoard.addNameScore();
            
                for(let y = 1; y < 11; y++){
                    $(`.columnD${y}`).text('');
                    $(`.columnD${y}`).css('text-decoration','none');
                }
                scoreBoard.playerName = ''
                scoreBoard.playerScore = 0
                $('.nameRegisteredSpot').text('YOUR NAME HAS BEEN REGISTERD')
                scoreBoard.fillInPlayerStats();
           
        })
    },

    buildScoreHolderTable (){
        const playerNameTable = $('<div>').addClass('playerNameTable')
        $('.highScoreBoard').append(playerNameTable)
        for(let i = 1; i<6; i++){
            const playerDiv = $('<div>').addClass(`playerRow player${i}`)
            $(playerNameTable).append(playerDiv)
            const rank = $('<div>').addClass(`rank rank${i}`)
            const score = $('<div>').addClass(`score score${i}`)
            const name = $('<div>').addClass(`playerName name${i}`)
            $(playerDiv).append(rank)
            $(playerDiv).append(score)
            $(playerDiv).append(name)
            }
        let ranks = ['1ST','2ND','3RD','4TH','5TH']
        for(let i = 1; i<6; i++){
            $(`.rank${i}`).text(ranks[i-1])
        }
    },
    fillInPlayerStats (){
        const sortedArray = this.highScoreArray.sort(function(a,b) {
            return b.score - a.score
        });
        console.log(sortedArray[0].score)
        for(i=0; i<5; i++){
            $(`.score${i+1}`).text(sortedArray[i].score)
            $(`.name${i+1}`).text(sortedArray[i].name)
        }
    },
    buildStartButton (){
        const replay = $('<div class=replayButton>').text('REPLAY')
        $('.boardContainer').append(replay)
        replay.click(function(e) {
            readyPlayerOne()
        });
    },
    addEmptySpot (){
        const emptySpot = $('<div class=nameRegisteredSpot>')
        $('.highScoreBoard').append(emptySpot)
    },
    score(){
        endGame();
        this.buildScoreboard();
        this.buildNameBoxes();
        this.buildLetters();
        this.addEnterButton();
        this.addEmptySpot();
        this.buildScoreHolderTable();
        this.buildStartButton();
        this.fillInPlayerStats();
    }
}

readyPlayerOne()