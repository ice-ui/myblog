//蛇
(function() {
    //蛇的构造函数
    var elements = [];
    //定义小蛇的构造函数
    function Snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        this.body = [
            { x: 3, y: 2, color: "green" },
            { x: 2, y: 2, color: "orange" },
            { x: 1, y: 2, color: "orange" },
        ];
        this.direction = direction || "right";
    }
    Snake.prototype.init = function(map) {
            remover();
            for (var i = 0; i < this.body.length; i++) {
                var obj = this.body[i];
                var div = document.createElement("div");
                map.appendChild(div);
                //脱离文档流
                div.style.position = "absolute";
                div.style.width = this.width + "px";
                div.style.height = this.height + "px";
                div.style.left = obj.x * this.width + "px";
                div.style.top = obj.y * this.height + "px";
                div.style.backgroundColor = obj.color;
                //将div加入到elements数组中--目的是为了删除
                elements.push(div);
            }
        }
        //让蛇动起来
    Snake.prototype.move = function(food, map) {
            var i = this.body.length - 1;
            for (; i > 0; i--) {
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
            }
            //判断方向
            switch (this.direction) {
                case "right":
                    this.body[0].x += 1;
                    break;
                case "left":
                    this.body[0].x -= 1;
                    break;
                case "top":
                    this.body[0].y -= 1;
                    break;
                case "bottom":
                    this.body[0].y += 1;
                    break;
            }
            // 蛇吃食物
            var headX = this.body[0].x * this.width;
            var headY = this.body[0].y * this.height;
            //判断食物与蛇的坐标是否而相同;
            if (headX == food.x && headY == food.y) {
                //获取小蛇的尾巴
                var last = this.body[this.body.length - 1];
                //把最后的设为复制一个，重新加入小蛇的body中
                this.body.push({
                    x: last.x,
                    y: last.y,
                    color: last.color
                });
                //把食物删除，重新初始化食物
                food.init(map);
            }
        }
        //删除小蛇的私有函数
    function remover() {
        var i = elements.length - 1;
        for (; i >= 0; i--) {
            var ele = elements[i];
            //从map地图上删除这个子元素div
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }
    //将snake暴露给window，外部可以访问
    window.Snake = Snake;
}());