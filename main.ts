//versie1
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
/*
//versie2
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
*/

//versie 3
let x = 0
let y = 0
basic.forever(function () {
    // stand O is linksboven in de hoek
/*
    // met plot doen we het licht branden
     y=0
    for (let i = 0; i <= 4; i++) {
        // laat ieder keer led branden als naar rechts gaat van 0=>4
        basic.pause(250)
        x = i
        led.plot(x, y)
    }

    y++
    // y = 1
    for (let i = 4; i >= 0; i--) {  //i-- is alles stuk perstuk aftrekken
        basic.pause(250)
        x = i
        led.plot(x, y)
    }
    
    y = 2
    for (let i = 0; i <= 4; i++) {
        // laat ieder keer led branden als naar rechts gaat van 0=>4
        basic.pause(250)
        x = i
        led.plot(x, y)
    }

    y++
    // y = 3
    for (let i = 4; i >= 0; i--) {  //i-- is alles stuk perstuk aftrekken
        basic.pause(250)
        x = i
        led.plot(x, y)
    }
    y = 4
    for (let i = 0; i <= 4; i++) {
        // laat ieder keer led branden als naar rechts gaat van 0=>4
        basic.pause(250)
        x = i
        led.plot(x, y)
    }
    basic.pause(250)
basic.clearScreen()
 
  x=0
 
  y=0

 */
//vesie 4
for (let y=0;y<6;y++){
    if(y % 2==0){
        for (let x=0;x<5;x++){
            led.plot(x,y)
            basic.pause(250)
                    }
                        }
                        else{
                            for (let x=5;x>=0;x--){
                                led.plot(x,y)
                                basic.pause(250)

                            }
                        }
}
basic.clearScreen()


})