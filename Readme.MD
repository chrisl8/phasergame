# Super Simple Phaser Starter
This is to help friends out at Game Jams when they want to be a rock star developer but don't even know how to tune their guitar, because honestly, who has time for that anyway?

1. Check to see that you have a recent version of node: (at least v6.x.x)  
`node --version`

2. If not, Use 'nvm' to install node:  
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash`

3. Install the latest version of Node "stable":  
`nvm install --lts`

4. Log out and back in to your PC to get node going.

5. Install node "supervisor" globally:  
`npm install supervisor -g`

6. Clone this repo:
```
cd
git clone git@github.com:chrisl8/phasergame.git
```

7. Download required packages:  
```
cd phasergame
npm install
```

8. Start server:  
`supervisor -e '.' server.js`

9. Check out the web site on your computer:  
[http://127.0.0.1:3000/](http://127.0.0.1:3000 "localhost")

* Edit files and make a game!!!
* Most of the time your browser will refresh when you save changes to a file.
* You can see the hits to your server and any errors on the terminal you ran `supervisor` from.
* If things go badly, just kill it with ctrl+c and start it up again.

* If you want to use this with github pages or some other static hosting provider, do this to get phaser.js into your actual files:
```
cd public
rm phaser
mkdir phaser
cp ../node_modules/phaser-ce/build/phaser.js phaser/
```
Then either put just the contents of the public folder on your host, or if using github pages, go to https://USERNAME.github.io/phasergame/public/
* You might also need to take the line loading reload.js out of index.html. It is not required for your game to work.

TODO: Windows? yowzah!
