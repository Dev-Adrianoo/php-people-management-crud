const API_URL = '/api/pessoas';


const form = document.getElementById('formPessoa')
const tabelaBody = document.querySelector('#tabelaPessoas tbody')
const btnSalvar = document.getElementById('btnSalvar');
const btnCancelar = document.getElementById('btnCancelar');


const inputId = document.getElementById('pessoaId');
const inputNome = document.getElementById('nome');
const inputCpf = document.getElementById('cpf');
const inputIdade = document.getElementById('idade');


document.addEventListener('DOMContentLoaded', () => {
    listarPessoas();
});

async function listarPessoas() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        tabelaBody.innerHTML = '';


        data.forEach(pessoa => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${pessoa.id}</td>
                <td>${pessoa.nome}</td>
                <td>${pessoa.cpf}</td>
                <td>${pessoa.idade}</td>
                <td>
                    <button class="btn-editar" onclick="prepararEdicao(${pessoa.id}, '${pessoa.nome}', '${pessoa.cpf}', ${pessoa.idade})">Editar</button>
                    <button class="btn-excluir" onclick="deletarPessoa(${pessoa.id})">Excluir</button>
                </td>
            `;
            tabelaBody.appendChild(tr)
        });

    } catch (error) {
        console.error('Erro ao listar', error)
    }
}

//Função para criar usuarios
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = inputId.value;
    const pessoa = {
        nome: inputNome.value,
        cpf: inputCpf.value,
        idade: inputIdade.value
    };

    let method = 'POST';
    let body = pessoa;


    if(id) {
        method = 'PUT';
        body = { ...pessoa, id: id };
    }

    try {
        const res = await fetch(API_URL, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

        const json = await res.json();

        if(!res.ok) {
            alert("Erro: " + json.message);
            return;
        }

        alert(json.message);
        limparFormulario();
        listarPessoas();


    } catch (error) {
        console.error("Erro na requisicao: ", error)
    }
})


async function deletarPessoa(id) {
    if (!confirm("Tem certeza que deseja excluir? ")) return;


    try {
        const res = await fetch(`${API_URL}?id=${id}`, {
            method: 'DELETE'
        });
        
        const json = await res.json();

        if(!res.ok) {
            console.error("Erro ao deletar usuario." + json.message);
            return;
        }

        alert(json.message)
        listarPessoas()


    } catch (error) {
        console.error("Erro ao deletar: ", error)
    }
}

window.prepararEdicao = (id, nome, cpf, idade) => {
    inputId.value = id;
    inputNome.value = nome;
    inputCpf.value = cpf;
    inputIdade.value = idade;


    btnSalvar.textContent = 'Atualizar';
    btnSalvar.style.backgroundColor = '#f39c12'; 
    btnCancelar.style.display = 'inline-block';
}

function limparFormulario() {
     form.reset();
     inputId.value = '';
     btnSalvar.textContent = 'Salvar';
    btnSalvar.style.backgroundColor = '#27ae60';
    btnCancelar.style.display = 'none';
}


btnCancelar.addEventListener('click', limparFormulario)

