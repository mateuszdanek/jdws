var gamePiece;

function startGame () {
	gameArea.start();
	gamePiece = new component(30, 30, "red", 10, 120);
}

var gameArea = {
	canvas : document.createElement("canvas"),
	start : function () {
		this.canvas.width=480;
		this.canvas.height=270;
		this.context=this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateGameArea,20);
	},
	clear: function () {
		this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
	}
};

function component (width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.speedX = 0;
	this.speedY = 0;
	this.update = function () {
		ctx = gameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};
	this.newPos = function () {
		this.x += this.speedX;
		this.y += this.speedY;
	};
}

function updateGameArea () {
	gameArea.clear();
	gamePiece.newPos();
	gamePiece.update();
}

function moveUp () {
	gamePiece.speedY -= 1;
}

function moveDown () {
	gamePiece.speedY =+ 1;
}

function moveLeft () {
	gamePiece.speedX -= 1;
}

function moveRight () {
	gamePiece.speedX += 1;
}

function stopMove() {
	gamePiece.speedX = 0;
	gamePiece.speedY = 0;
}