// Funções recursivas 21/02/23

function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);