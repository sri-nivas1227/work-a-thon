import logo from '../logo.svg'

const Header = () => {
    return (
        <header className="h-16 px-4 flex justify-between items-center bg-blue-700 text-white ">
            <a href="/" className="logo">
                <img src={logo} style={{width:"35px"}} alt="logo" />
            </a>
            <div className="nav">
                <a href="task" className="nav-item">Task</a>
                <a href="acheivements" className="nav-item">Acheivements</a>
                <a href="user" className="nav-item">Profile</a>
            </div>
        </header>
    )
}

export default Header
