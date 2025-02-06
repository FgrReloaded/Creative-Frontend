// Code Started

const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    cursor.animate({
        left: e.clientX + 'px',
        top: e.clientY + 'px',
    }, { duration: 800, fill: 'forwards' })

});


class SmoothDragSystem {
    constructor(element) {
        this.element = element;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.lastTime = 0;
        this.bounds = {
            minX: -(element.offsetWidth - window.innerWidth),
            maxX: 0,
            minY: -(element.offsetHeight - window.innerHeight),
            maxY: 0
        };

        this.initializePosition();
        this.addEventListeners();
        this.startAnimation();
    }

    initializePosition() {
        this.currentX = (window.innerWidth - this.element.offsetWidth) / 2;
        this.currentY = (window.innerHeight - this.element.offsetHeight) / 2;
        this.updatePosition();
    }

    addEventListeners() {
        this.element.addEventListener('mousedown', this.onMouseDown.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
        window.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.element.addEventListener('touchstart', this.onTouchStart.bind(this));
        window.addEventListener('touchmove', this.onTouchMove.bind(this));
        window.addEventListener('touchend', this.onTouchEnd.bind(this));
    }

    onMouseDown(e) {
        this.startDrag(e.clientX, e.clientY);
        e.preventDefault();
    }

    onTouchStart(e) {
        const touch = e.touches[0];
        this.startDrag(touch.clientX, touch.clientY);
        e.preventDefault();
    }

    onMouseMove(e) {
        if (this.isDragging) {
            this.updateDrag(e.clientX, e.clientY);
        }
    }

    onTouchMove(e) {
        if (this.isDragging) {
            const touch = e.touches[0];
            this.updateDrag(touch.clientX, touch.clientY);
        }
    }

    onMouseUp() {
        this.endDrag();
    }

    onTouchEnd() {
        this.endDrag();
    }

    startDrag(x, y) {
        this.isDragging = true;
        this.startX = x - this.currentX;
        this.startY = y - this.currentY;
        this.lastX = x;
        this.lastY = y;
        this.lastTime = performance.now();
        this.velocityX = 0;
        this.velocityY = 0;
    }

    updateDrag(x, y) {
        const deltaX = x - this.lastX;
        const deltaY = y - this.lastY;
        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;

        if (deltaTime > 0) {
            this.velocityX = deltaX / deltaTime * 16;
            this.velocityY = deltaY / deltaTime * 16;
        }

        this.currentX = x - this.startX;
        this.currentY = y - this.startY;

        this.lastX = x;
        this.lastY = y;
        this.lastTime = currentTime;

        this.updatePosition();
    }

    endDrag() {
        if (this.isDragging) {
            this.isDragging = false;

            gsap.to(this, {
                velocityX: 0,
                velocityY: 0,
                duration: 1,
                ease: "power2.out"
            });
        }
    }

    applyBoundsWithElasticity() {
        if (this.currentX < this.bounds.minX) {
            const overflowX = this.bounds.minX - this.currentX;
            this.currentX = this.bounds.minX + (overflowX * 0.2);
            this.velocityX *= 0.8;
        } else if (this.currentX > this.bounds.maxX) {
            const overflowX = this.currentX - this.bounds.maxX;
            this.currentX = this.bounds.maxX + (overflowX * 0.2);
            this.velocityX *= 0.8;
        }

        if (this.currentY < this.bounds.minY) {
            const overflowY = this.bounds.minY - this.currentY;
            this.currentY = this.bounds.minY + (overflowY * 0.2);
            this.velocityY *= 0.8;
        } else if (this.currentY > this.bounds.maxY) {
            const overflowY = this.currentY - this.bounds.maxY;
            this.currentY = this.bounds.maxY + (overflowY * 0.2);
            this.velocityY *= 0.8;
        }
    }

    updatePosition() {
        if (!this.isDragging) {
            this.currentX += this.velocityX;
            this.currentY += this.velocityY;
        }

        this.applyBoundsWithElasticity();

        gsap.to(this.element, {
            x: this.currentX,
            y: this.currentY,
            duration: this.isDragging ? 0.5 : 0.4,
            ease: "power2.out"
        });
    }

    startAnimation() {
        const animate = () => {
            if (!this.isDragging) {
                this.updatePosition();
            }
            requestAnimationFrame(animate);
        };
        animate();
    }
}

const canvas = document.getElementById('canvas');
new SmoothDragSystem(canvas);