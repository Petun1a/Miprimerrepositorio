let numero;
numero= parseInt(prompt('Ingrese un numero entre 1 y 4'))
switch (numero) {
    case 1:
        document.write('uno')
        break;
    case 2:
        document.write('dos')
        break;
    case 3:
        document.write('tres')
        break;
    case 4:
        document.write('cuatro')
        break
    default:
        document.write('Elvalor debe ser entre 1 y 4')
}

let ciudad;
ciudad= prompt('Ingrese ciudad')
switch (ciudad) {
    case 'Medellin':
        document.write('Medellin')
        break
    case 'Pasto':
        document.write('Pasto')
        break
}