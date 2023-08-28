import LogoPorto from '../../assets/porto-icone-header.svg'
import IconeMenu from '../../assets/iconemenu.svg'
import {StyledHeader} from './Header.style'

export const Header = () => {
    return (
        <StyledHeader>
            <div className='header-items'>
                <img src={LogoPorto} alt="Logo da Porto Seguro" />
                <input type="search" name="input-header" id="input-header" placeholder='Digite aqui o que deseja' className=''/>
                <img src={IconeMenu} alt="Menu" />
            </div>
        </StyledHeader>
    )
}