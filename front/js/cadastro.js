let button = document.getElementById("handleSubmit");
 
button.onclick = async function(e) {
    e.preventDefault();
 
    let nome = document.querySelector('.nome').value;
    let sobrenome = document.querySelector('.sobrenome').value;
    let telefone = document.querySelector('.telefone').value;
    let email = document.querySelector('.email').value;
    let senha = document.querySelector('.senha').value;
 
    let data = { nome,sobrenome,telefone,email,senha };
 
    console.log("Dados que serão enviados:", data);
 
    try {
        const response = await fetch('http://localhost:3000/api/store/user', {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });
 
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
 
        let content = await response.json();
 
        if (content.success) {
            alert("Sucesso");
           
            // localStorage.setItem('id_user', content.data.id_user);
            // console.log(`ID do usuário armazenado: ${content.data.id_user}`);
            //     if (tipo_usuario == 'Instituição') {
            //         window.location.href = "/front/html/perfil_insti.html";
            //     }
 
        } else {
            alert("Erro ao cadastrar. Vefique os dados inseridos ou se você já possui uma conta.");
        }
 
    } catch (error) {
        console.error("Erro ao enviar a requisição:", error);
        alert("Erro ao enviar a requisição.");
    }

    // document.getElementById("handleSubmit").addEventListener("click", function() {
    //     // Redirecionar para a página desejada
    //     window.location.href = "/Doca/dados.html";
    // });
    
    
};