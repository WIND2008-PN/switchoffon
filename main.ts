basic.forever(function () {
    if (input.temperature() != 25) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
