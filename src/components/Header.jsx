export default function Header({ onNavigate }) {
    return (
        <header className="main-header">

            <button
                className="header-logo"
                onClick={() => onNavigate("home")}
            >
                PORSCHE
            </button>

            <nav className="header-nav">

                <button
                    className="header-nav-button"
                    onClick={() => onNavigate("home")}
                >
                    HOME
                </button>

                <button
                    className="header-nav-button"
                    onClick={() => onNavigate("models")}
                >
                    MODELS
                </button>

                <button
                    className="header-nav-button"
                    onClick={() => onNavigate("favorites")}
                >
                    FAVORITES
                </button>

                <button 
                    className="header-nav-button"
                    onClick={() => onNavigate("signup")}
                >
                    ACCOUNT
                </button>

            </nav>

        </header>
    );
}