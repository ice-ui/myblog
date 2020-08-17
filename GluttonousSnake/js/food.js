(function() {
    var elements = [];
    var map = document.querySelector(".map");

    function Food(x, y, width, height, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.height = height || 20;
        this.width = width || 20;
        this.color = color || "green";
    }
    Food.prototype.init = function(map) {
        remove();
        var div = document.createElement("div");
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        div.style.position = "absolute";
        //随机坐标
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        map.appendChild(div);
        elements.push(div);
    };

    function remove() {
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele); //删除地图中的元素；
            elements.splice(i, 1); // 删除数字组的元素
        }
    }
    window.Food = Food;
}());