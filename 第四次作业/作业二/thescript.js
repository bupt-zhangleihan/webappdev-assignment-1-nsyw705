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
            // 按空格键时改变颜色
            currentColor = getRandomColor();
        } else if (event.key === 'ArrowUp') {
            // 上移
            moveCursor(-1, 0);
        } else if (event.key === 'ArrowDown') {
            // 下移
            moveCursor(1, 0);
        } else if (event.key === 'ArrowLeft') {
            // 左移
            moveCursor(0, -1);
        } else if (event.key === 'ArrowRight') {
            // 右移
            moveCursor(0, 1);
        } else {
            // 用当前颜色绘制
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
