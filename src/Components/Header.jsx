import './header.scss'
import logo from '../assets/logo.svg'
import { headerNav } from './headerNav'

export const Header = () => {

    return (
        <header className="header">
            <div className='header__wrapper'>
                <img src={logo} alt={'logo'} />
                <nav className='header__nav'>
                    <ul className='header__nav-list'>
                        {headerNav.map((item, index) => (
                            <li className="header__nav-item" key={`${item}_${index}`}>
                                <a href="#arc">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='header__mint-button'>
                        <a href="www.opensea.com">Mint</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}