(function() {
    var that = null;

    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    };
    //初始化游戏，可以让小蛇和食物显示出来
    Game.prototype.init = function() {
        this.food.init(this.map);
        this.snake.init(this.map);
        this.snake.move(this.food, this.map);
        //调用移动方法
        this.runSnake(this.food, this.map);
        //调用按键的方法
        this.bindKey();
    }
    Game.prototype.runSnake = function(food, map) {
        that = this;
        var timer = setInterval(function() {
            // 移动小蛇
            that.snake.move(food, map);
            that.snake.init(map);
            //横坐标的最大值
            var maxX = map.offsetWidth / that.snake.width;
            var maxY = map.offsetHeight / that.snake.height;
            var headX = that.snake.body[0].x;
            var headY = that.snake.body[0].y;
            if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                alert("撞墙了，游戏结束");
                clearInterval(timer);
            }
        }, 200)
    }
    Game.prototype.bindKey = function() {
        that = this;
        document.addEventListener("keydown", function(e) {
            switch (e.keyCode) {
                case 37:
                    that.snake.direction = "left";
                    break;
                case 38:
                    that.snake.direction = "top";
                    break;
                case 39:
                    that.snake.direction = "right";
                    break;
                case 40:
                    that.snake.direction = "bottom";
                    break;
            }
        }, false)
    }
    window.Game = Game;
}());