// Create new game instance.
// 640, 360 is the game's dimenstions
// Last is render, can be CANVAS or WEBGL or AUTO will cause Phaser to use webGL if it can and fall back to canvas.
var game = new Phaser.Game(640, 360, Phaser.AUTO);

// State hold all game logic. Can have more than one.
var GameState = {
    preload: function () {
        // All image and such goes here to be preloaded in memory for quick access.
        this.load.image('stars', 'stars.png');
    },
    create: function () {
        // Run on game creation


        // Set up phaser game to scale and center for different screen sizes
        // This will make the game scale up/down while maintaining the aspect ratio
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // We can center the game with:
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // It is scaling up to full page size, so this will center it in the "letterbox" that may be created to maintain scale.

        // Add a background
        this.stars = this.game.add.tileSprite(0, 0, 640, 360, 'stars');

        var width = 50;
        var height = 100;
        var bmd = game.add.bitmapData(width, height);
        bmd.ctx.beginPath();
        bmd.ctx.rect(0, 0, width, height);
        bmd.ctx.fillStyle = '#0000ff';
        bmd.ctx.fill();
        this.tardis = game.add.sprite(game.world.centerX, game.world.centerY, bmd);
        this.tardis.anchor.setTo(0.5, 0.5);
        this.tardisScale = 1;

    },
    update: function () {
        // This loops as game plays.
        this.tardis.angle += 0.5;
        this.tardisScale += 0.01;
        this.tardis.scale.setTo(this.tardisScale);
        if (this.tardisScale > 10) {
            this.tardisScale = 0.01;
        }
        this.game.debug.spriteInfo(this.tardis, 32, 32);
    }
};

// Add state to game:
game.state.add('GameState', GameState); // Name we are giving it and the object to use for it.

// Fire the state up (even if empty):
game.state.start('GameState');

