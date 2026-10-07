document.addEventListener("DOMContentLoaded", () => {

    // 1. Botão de Impressão
    const btnPrint = document.getElementById("btn-print");
    if (btnPrint) {
        btnPrint.addEventListener("click", () => {
            window.print();
        });
    }

    // 2. Copiar E-mail e Exibir Toast Personalizado (sem o alerta do navegador)
    const emailContact = document.getElementById("email-contact");
    const toast = document.getElementById("toast");

    if (emailContact) {
        emailContact.addEventListener("click", () => {
            const email = "caiovinicius.ramalho.agra@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                showToast("E-mail copiado para a área de transferência!");
            }).catch(() => {
                showToast("E-mail: " + email);
            });
        });
    }

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }

    // 3. Alternador de Modo Escuro (Dark Mode)
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
            const icon = themeToggleBtn.querySelector("i");
            if (document.body.classList.contains("dark-mode")) {
                icon.className = "fa-solid fa-sun";
            } else {
                icon.className = "fa-solid fa-moon";
            }
        });
    }

});
