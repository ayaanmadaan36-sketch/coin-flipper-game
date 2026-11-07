input.onButtonPressed(Button.A, function () {
    basic.showString("" + (randint(0, 10)))
})
basic.showString("True=even numbers")
basic.showString("False=odd numbers")
basic.pause(1000)
let Coin = game.createSprite(2, 2)
Coin.set(LedSpriteProperty.Brightness, 200)
basic.pause(1000)
