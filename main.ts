//% weight=100 color=#33B5E5 icon="\uf2c9" block="Mesure Pile"
namespace mesurepile {
    let broche: AnalogPin = AnalogPin.P0

    /**
     * Choisir la broche analogique utilisée pour la mesure.
     */
    //% blockId=mesurepile_init block="initialiser sur la broche %pin"
    //% pin.defl=AnalogPin.P0
    export function initialiser(pin: AnalogPin) {
        broche = pin
    }

    /**
     * Lire la tension de la pile en volts (arrondi à 0,01 V).
     */
    //% blockId=mesurepile_read block="lire tension (V)"
    export function lireTension(): number {
        let brut = pins.analogReadPin(broche)
        let v = brut * 3.3 / 1023
        return Math.round(v * 100) / 100
    }

    /**
     * Indique si la pile est inférieure à une limite donnée (ex. 1,2 V).
     */
    //% blockId=mesurepile_low block="pile inférieure à %limite V ?"
    //% limite.defl=1.2
    export function pileFaible(limite: number): boolean {
        return lireTension() < limite
    }
}
