let fah = 0
let celsius = 0
function celsius_to_fah(celsius2: number): number {
    
    fah = celsius2 * 9 / 5 + 32
    fah = Math.round(fah * 100) / 100
    return fah
}

function fah_to_celsius(fah2: number): number {
    
    celsius = (fah2 - 32) * 5 / 9
    celsius = Math.round(celsius * 100) / 100
    return celsius
}

