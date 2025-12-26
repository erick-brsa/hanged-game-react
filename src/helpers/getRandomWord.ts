let words: string[] = [
    'COMPUTADORA',
    'AQUILES',
    'PARANGARICUTIRIMICUARO',
    'OTORRINOLARINGOLOGO',
    'BIOLOGIA',
    'ESTERNOCLEIDOMASTOIDEO',
    'DESOXIRIBONUCLEICO',
    'SUPERCALIFRAGILISTICOESPIRALIDOSO'
]

export function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)] 
}