function consultarCnpj(){
    const cnpj = document.getElementById('cnpj').value;

    // Verifica se o CNPJ tem 14 dígitos
    if(cnpj.length !== 14){
        alert("Por favor, insira um CNPJ válido com 14 dígitos (somente números).");
        return;
    }

    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao consultar CNPJ.");
            }
            return response.json();
        })
        .then(data => {
            // Atualiza os campos com os dados da API
            document.getElementById('nome').textContent = data.razao_social || "—";
            document.getElementById('fantasia').textContent = data.nome_fantasia || "—";
            document.getElementById('tipo').textContent = data.descricao_tipo_logradouro || "—";
            document.getElementById('situacao').textContent = data.descricao_situacao_cadastral || "—";
            document.getElementById('abertura').textContent = data.data_inicio_atividade || "—";
            document.getElementById('uf').textContent = data.uf || "—";
            document.getElementById('municipio').textContent = data.municipio || "—";
            document.getElementById('bairro').textContent = data.bairro || "—";
            document.getElementById('logradouro').textContent = data.logradouro || "—";
            document.getElementById('numero').textContent = data.numero || "—";
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("CNPJ não encontrado ou ocorreu um erro na consulta.");
        });
}
