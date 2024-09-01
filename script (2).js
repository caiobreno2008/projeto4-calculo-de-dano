const pers1 = 'Herói'; // Nome do primeiro personagem
const pers2 = 'Vilão'; // Nome do segundo personagem
const attackPower = 50; // Poder de ataque do pers1
const life = 100; // Pontos de vida do pers2
const defensePower = 30; // Pontos de defesa do pers2
const haveShield = true; // Se pers2 tem um escudo ou não

let damage = 0;
let remainingLife = 0;

if (attackPower > defensePower) {
    if (haveShield) {
        damage = (attackPower - defensePower) / 2;
    } else {
        damage = attackPower - defensePower;
    }
    
    remainingLife = life - damage;

    if (remainingLife < 0) {
        remainingLife = 0;
        console.log(`${pers1} atacou. ${pers2} sofreu ${damage} de dano e sua vida agora é ${remainingLife}.`);
    } else {
        console.log(`${pers1} atacou. ${pers2} sofreu ${damage} de dano. Sua vida agora é ${remainingLife}.`);
    }
} else {
    console.log(`${pers1} atacou, mas não afetou ${pers2}. Nenhum dano causado!`);
}
