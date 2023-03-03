/**
 * y = 2
 * 
 * for (let i = 0; i <= 4; i++) {//i++ stuk voor stuk optellen
 * 
 * basic.pause(250)
 * 
 * x = i
 * 
 * led.plot(x, y)
 * 
 * }
 * 
 * y = 3
 * 
 * for (let i = 4; i >= 0; i--) {
 * 
 * basic.pause(250)
 * 
 * x = i
 * 
 * led.plot(x, y)
 * 
 * }
 * 
 * y = 4
 * 
 * for (let i = 0; i <= 4; i++) {
 * 
 * basic.pause(250)
 * 
 * x = i
 * 
 * led.plot(x, y)
 * 
 * }
 * 
 * //bij het einde kuis het scherm op en start op,ieuw
 * 
 * basic.pause(250)
 * 
 * //basic.clearScreen()
 * 
 * //x=0
 * 
 * //y=0
 * 
 * //})
 */
/**
 * stel je variablen in
 */
let x =0
let y =0
basic.forever(function () {
    // stand O is linksboven in de hoek
    
    // met plot doen we het licht branden
    for (let i = 0; i <= 4; i++) {
        // laat ieder keer led branden als naar rechts gaat van 0=>4
        basic.pause(250)
        x = i
        led.plot(x, y)
    }
    
    y ++
   // y = 1
    for (let i = 4; i >=0;i--){  //i-- is alles stuk perstuk aftrekken
    basic.pause(250)
    x=i
    led.plot(x,y)
}
y++
if (y>4){
    basic.clearScreen()
}
})
