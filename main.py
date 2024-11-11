def menu():
    global opcio_usuari
    opcio_usuari = game.ask_for_number("1: Celsius to Fahrenheit, 2: Fahrenheit to Celsius", 1)
    return opcio_usuari
def celsius_to_fah(celsius2: number):
    global fah22
    fah22 = celsius2 * 9 / 5 + 32
    fah22 = Math.round(fah22 * 100) / 100
    return fah22
def salutacio(opcio: number):
    if opcio == 1:
        value = game.ask_for_number("Introduzca los Celsius", 5)
        fah = celsius_to_fah(value)
        game.show_long_text(fah, DialogLayout.TOP)
    elif opcio == 2:
        value = game.ask_for_number("Introduzca los Fahrenheit", 5)
        celsius = fah_to_celsius(value)
        game.show_long_text(celsius, DialogLayout.TOP)
    else:
        game.show_long_text("Opció no vàlida", DialogLayout.BOTTOM)
    salutacio(menu())
def fah_to_celsius(fah2: number):
    global celsius22
    celsius22 = (fah2 - 32) * 5 / 9
    celsius22 = Math.round(celsius22 * 100) / 100
    return celsius22
celsius22 = 0
fah22 = 0
opcio_usuari = 0
# MAIN DE LA APP
salutacio(menu())