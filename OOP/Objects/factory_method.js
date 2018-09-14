// Factory Method
function drawCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('Area of the circle:',
                Math.PI * radius ** 2);

        }
    }
}

const circle1 = new drawCircle(7);
circle1.draw();

// Constructor Function

function Circle(radius) { // I love this method..... this., this., this. this.
    this.radius = radius;
    this.area = function() {
        return Math.PI * this.radius ** 2;
    }
}

const circle2 = new Circle(7);
console.log(circle2);