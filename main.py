fah = 0
celsius = 0
def celsius_to_fah(celsius2: number):
    global fah
    fah = celsius2 * 9 / 5 + 32
    fah = Math.round(fah * 100) / 100
    return fah
def fah_to_celsius(fah2: number):
    global celsius
    celsius = (fah2 - 32) * 5 / 9
    celsius = Math.round(celsius * 100) / 100
    return celsius