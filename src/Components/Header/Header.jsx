import './header.scss'
import logo from '../../assets/logo.svg'
import { HEADER_NAV } from '../../constants/headerNav'

export const Header = () => {

    return (
        <header className="header">
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <img src={logo} alt={'logo'} />
                </div>
                <nav className='header__nav'>
                    <ul className='header__nav-list'>
                        {HEADER_NAV.map((item, index) => (
                            <li className="header__nav-item" key={`${item}_${index}`}>
                                <a href={item.anchor}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='header__mint-button'>
                    <a href="www.opensea.com">Mint</a>
                </div>
            </div>
        </header>
    )
}