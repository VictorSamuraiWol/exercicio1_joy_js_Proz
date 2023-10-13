/*usando while*/
i=0;
while (i<3) {
    i++;
    console.log ("Conexão feita com sucesso!", i);
}

/*usando função e for*/
const conexao = () => {
    for (i=1;i<4;i++) {
        console.log ("Conexão feitao com sucesso!", i);
    }
}

conexao();
