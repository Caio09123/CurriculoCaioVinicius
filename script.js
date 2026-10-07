document.addEventListener("DOMContentLoaded", () => {

    // 1. Botão de Impressão
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
            }).catch(() => {
                alert("E-mail: " + email);
            });
        });
    }

    // 3. Alternador de Modo Escuro (Dark Mode)
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
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

});
