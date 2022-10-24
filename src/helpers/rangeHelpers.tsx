export const updateRangeGradient = (min: string, max: string, val: number) => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);
    const step = 100 / (maxVal - minVal);
    const progress = (val - minVal) * step;

    document.documentElement.style.setProperty(
        '--gradientBorder',
        `${progress}%`
    );
};
