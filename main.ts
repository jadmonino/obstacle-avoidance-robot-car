let distance = 0
basic.forever(function () {
    distance = MiniCar.ultra()
    if (distance > 30) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 100)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 100)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
    } else {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, 100)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 100)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    }
})
