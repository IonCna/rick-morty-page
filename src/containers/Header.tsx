import "./styles/Header.scss"

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-wrapper">
                <a href="/">logo</a>
            </div>
            <nav className="menu-wrapper">
                <li className="menu-holder">
                    <a href="characters">Characters</a>
                </li>
                <li className="menu-holder">
                    <a href="episodes">Episodes</a>
                </li>
                <li className="menu-holder">
                    <a href="locations">Locations</a>
                </li>
                <li className="menu-holder">
                    <a href="options">Options</a>
                </li>
            </nav>
        </header>
    )
}

export default Header