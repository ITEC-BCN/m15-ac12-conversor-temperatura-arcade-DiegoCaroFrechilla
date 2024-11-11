function menu(): number {
    
    opcio_usuari = game.askForNumber("1: Celsius to Fahrenheit, 2: Fahrenheit to Celsius", 1)
    return opcio_usuari
}

function celsius_to_fah(celsius2: number): number {
    
    fah22 = celsius2 * 9 / 5 + 32
    fah22 = Math.round(fah22 * 100) / 100
    return fah22
}

function salutacio(opcio: number) {
    let value: number;
    let fah: number;
    let celsius: number;
    if (opcio == 1) {
        value = game.askForNumber("Introduzca los Celsius", 5)
        fah = celsius_to_fah(value)
        game.showLongText(fah, DialogLayout.Top)
    } else if (opcio == 2) {
        value = game.askForNumber("Introduzca los Fahrenheit", 5)
        celsius = fah_to_celsius(value)
        game.showLongText(celsius, DialogLayout.Top)
    } else {
        game.showLongText("Opció no vàlida", DialogLayout.Bottom)
    }
    
    salutacio(menu())
}

function fah_to_celsius(fah2: number): number {
    
    celsius22 = (fah2 - 32) * 5 / 9
    celsius22 = Math.round(celsius22 * 100) / 100
    return celsius22
}

let celsius22 = 0
let fah22 = 0
let opcio_usuari = 0
//  MAIN DE LA APP
salutacio(menu())
