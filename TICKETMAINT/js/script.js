// Enviar chamado (Operador)
document.addEventListener("DOMContentLoaded", () => {
  const formChamado = document.getElementById("formChamado");
  if (formChamado) {
    formChamado.addEventListener("submit", async function(e){
      e.preventDefault();
      const dados = {
        maquina: e.target.maquina.value,
        gravidade: e.target.gravidade.value,
        descricao: e.target.descricao.value
      };
      await fetch("http://localhost:3000/chamado", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dados)
      });
      alert("Chamado enviado!");
      carregarChamados();
    });
  }

  // Carregar chamados (Painel)
  const listaChamados = document.getElementById("listaChamados");
  if (listaChamados) {
    async function carregarChamados(){
      const resposta = await fetch("http://localhost:3000/listar_chamados");
      const chamados = await resposta.json();
      listaChamados.innerHTML = "";
      chamados.forEach(c => {
        listaChamados.innerHTML += `<tr>
          <td>${c.id}</td>
          <td>${c.maquina}</td>
          <td>${c.gravidade}</td>
          <td>${c.status}</td>
          <td>${c.descricao}</td>
          <td>${c.pecas || "-"}</td>
          <td>
            <button class="btn-reparo" onclick="iniciarReparo(${c.id})">Iniciar Reparo</button>
            <button class="btn-finalizar" onclick="finalizar(${c.id})">Finalizar</button>
          </td>
        </tr>`;
      });
    }
    carregarChamados();
    window.carregarChamados = carregarChamados;
  }
});

// Funções de ação do técnico
async function iniciarReparo(id){
  await fetch("http://localhost:3000/iniciar_reparo/" + id, { method: "PUT" });
  carregarChamados();
}

async function finalizar(id){
  const pecas = prompt("Informe as peças trocadas:");
  await fetch("http://localhost:3000/finalizar/" + id, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({pecas})
  });
  carregarChamados();
}
