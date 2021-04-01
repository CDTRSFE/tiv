import { getRandomInt, randomColor } from '../utils/util';
import type { TextType, TextInfoType, ParamsType } from './type';

// 分组
function divideData(data: TextType[], rows: number) {
    let index = 0;
    const array: TextType[][] = [];
    while (index < data.length) {
        const i = index % rows;
        if (!array[i]) array[i] = [];
        array[i].push(data[index++]);
    }
    return array;
}

const genId = (str: string) => Math.random() + str;

// 获取容器的宽高
function getSize(el: HTMLElement) {
    return {
        wrapW: el.clientWidth,
        wrapH: el.clientHeight,
    };
}

function setStyle(el: HTMLElement, { data, colors, maxFontSize }: ParamsType): TextInfoType[][] {
    const { wrapW, wrapH } = getSize(el);
    // 权重范围
    const weight = data.map(item => item.weight);
    const wRange = [Math.min(...weight), Math.max(...weight)];
    // 字体大小范围
    const fRange = [14, maxFontSize];
    // 文本行高
    let lineH = maxFontSize * 1.6;
    // 根据高度计算最多能够显示的行数
    let rows = Math.floor(wrapH / lineH);
    // 文字较少时，调整行数和行高
    if (data.length < rows) rows = data.length;
    lineH = Math.floor(wrapH / rows) * 0.9;

    const group = divideData(data, rows);

    // 每一行文本都需要错开显示
    const delta = wrapW / group.length;
    const spacing = group.map((_, i) => (i + 1) * delta).sort(() => Math.random() - 0.5);

    return group.map((row, index) => row.map((item, idx) => {
        // 根据权重计算字体大小
        const fontSize = (item.weight - wRange[0]) / (wRange[1] - wRange[0]) * (fRange[1] - fRange[0]) + fRange[0];
        // 文本颜色
        const color = colors.length ? colors[getRandomInt(0, colors.length)] : randomColor();
        return {
            data: item,
            id: genId(index + '' + idx),
            style: {
                fontSize: fontSize + 'px',
                marginLeft: idx === 0 ? spacing[index] + 'px' : getRandomInt(100, 300) + 'px',
                color,
                lineHeight: lineH + 'px',
            },
        };
    }));
}

export {
    setStyle,
    getSize,
};
