var btn = document.getElementById('cadastrar')
var alunos = [];

function listar_alunos() {
    let listar=document.getElementById ('listar')
    listar.innerHTML="";
    alunos.forEach(aluno =>{
        listar.innerHTML+='<li>'+ aluno + "<button>editar</button>" + "<button>excluir</button>" +'</li>';
    });
}
listar_alunos();
var btn =document.getElementById('cadastrar')
btn.addEventListener('click',e=>{
    let nome = document.getElementById ('nome')
    if(nome.value == ""){
        alert('preencha')
    }else{
    alunos.push(nome.value)
    nome.value = ""
    listar_alunos();
    }
})

console.log(alunos)