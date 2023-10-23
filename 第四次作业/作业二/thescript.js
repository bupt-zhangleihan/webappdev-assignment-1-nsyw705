document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');

    // 创建一个二维平面即画布
    const pixelGrid = [];
    for (let i = 0; i < 40; i++) {
        pixelGrid[i] = [];
        for (let j = 0; j < 40; j++) {
            pixelGrid[i][j] = document.createElement('div');
            pixelGrid[i][j].classList.add('pixel');
            canvas.appendChild(pixelGrid[i][j]);
        }
    }

    let currentColor = 'black';

    // 确定输入的键，判断下一步操作
    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
            // Change color when the spacebar is pressed
            currentColor = getRandomColor();
        } else if (event.key === 'ArrowUp') {
            // Move the cursor up
            moveCursor(-1, 0);
        } else if (event.key === 'ArrowDown') {
            // Move the cursor down
            moveCursor(1, 0);
        } else if (event.key === 'ArrowLeft') {
            // Move the cursor left
            moveCursor(0, -1);
        } else if (event.key === 'ArrowRight') {
            // Move the cursor right
            moveCursor(0, 1);
        } else {
            // Draw a pixel with the current color
            pixelGrid[cursorY][cursorX].style.backgroundColor = currentColor;
        }
    });

    let cursorX = 0;
    let cursorY = 0;

    function moveCursor(dy, dx) {
        // 在画布范围内移动光标
        cursorX = Math.min(39, Math.max(0, cursorX + dx));
        cursorY = Math.min(39, Math.max(0, cursorY + dy));
    }

    function getRandomColor() {
        // 生成随机的颜色
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
