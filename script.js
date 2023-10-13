/*usando while*/
i=0;
while (i<3) {
    i++;
    console.log ("Conexão feita com sucesso!", i);
}

/*usando função e for*/
const conexao = () => {
    for (i=1;i<4;i++) {
        console.log ("Conexão feita com sucesso!", i);
    }
}
conexao();

/*executando uma função 3x*/
const conexao3x = () => {
    console.log("Conexão feita com sucesso!")
}

conexao3x();
conexao3x();
conexao3x();
