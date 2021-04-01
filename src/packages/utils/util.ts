// 在某个范围内获取随机整数
export function getRandomInt(min = 0, max = 1): number {
    return Math.floor(Math.random() * (max - min) + min);
}

// 随机生成颜色
export function randomColor() {
    return '#' + (Math.random() * 0xffffff << 0).toString(16);
}
