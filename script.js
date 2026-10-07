// 1. Botão de Impressão (com verificação/defesa contra erros)
const btnPrint = document.getElementById("btn-print");
if (btnPrint) {
    btnPrint.addEventListener("click", () => {
        window.print();
    });
}

// 2. Copiar E-mail para a área de transferência ao clicar
const emailContact = document.getElementById("email-contact");
if (emailContact) {
    emailContact.addEventListener("click", () => {
        const email = "caiovinicius.ramalho.agra@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            alert("E-mail copiado para a área de transferência!");
        }).catch(err => {
            console.error("Erro ao copiar e-mail: ", err);
        });
    });
}

// 3. Alternador de Modo Escuro (Dark Mode)
const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Troca o ícone de Lua para Sol
        const icon = themeToggleBtn.querySelector("i");
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
}
