function loadNavbar(activePageId) {
    const navbarContainer = document.getElementById('navbar-container');
    
    // Rutas relativas para que funcione desde subcarpetas
    // Ajusta estos href según la estructura real de tu repositorio completo
    const rootPath = "../../"; // Sube dos niveles desde /experiments/maps/
    
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top border-bottom">
        <div class="container-fluid">
            <a class="navbar-brand fs-4 fw-light" href="${rootPath}index.html">
                Omar Rojas Martínez
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link ${activePageId === 'portfolio' ? 'active' : ''}" href="${rootPath}index.html">Selected Works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePageId === 'experiments' ? 'active' : ''}" href="experiments.html">Experiments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePageId === 'about' ? 'active' : ''}" href="${rootPath}about.html">About</a>
                    </li>
                    <li class="nav-item d-flex align-items-center ms-3">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="darkModeToggle">
                            <label class="form-check-label" for="darkModeToggle">
                                <i class="bi bi-moon-fill" id="darkModeIcon"></i>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    navbarContainer.innerHTML = navbarHTML;

    // Disparar evento para avisar que el navbar ya cargó (para que app.js pueda activar el dark mode logic)
    document.dispatchEvent(new Event('navbarLoaded'));
}