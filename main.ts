radio.onReceivedNumber(function (receivedNumber) {
    t0 = Math.round(input.runningTime() * 1000) / 1000
    while (input.lightLevel() > 20 && t1 == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    t1 = Math.round(input.runningTime() * 1000) / 1000
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(20)
    Temps = (t1 - t0) / 1000
    radio.sendValue("Ligne 2", Temps)
    for (let index = 0; index < 2; index++) {
        basic.showString("" + Temps + "s")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.lightLevel()))
})
let Temps = 0
let t1 = 0
let t0 = 0
radio.setGroup(1)
t0 = 0
t1 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
pins.digitalWritePin(DigitalPin.P0, 1)
