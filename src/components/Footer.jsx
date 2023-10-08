import logo from "/github.png"

export default function Footer (){
    return(
        <footer className="footer github">
            <div>
                <a target="_blank" href="https://github.com/isierra93"><img className="logo" src={logo} alt="Github logo" /></a>
            </div>
            <div>
                Made with <span className="love">♥</span> by Ivan
            </div>
        </footer>
    )
}