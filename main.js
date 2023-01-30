const delayedColorChange = (newColor, delay, nextColor) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        nextColor && nextColor()
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('violet', 1000, () => {
                    })
                })
            })
        })
    })
})