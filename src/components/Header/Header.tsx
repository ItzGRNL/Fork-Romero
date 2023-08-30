import LogoPorto from '../../assets/porto-icone-header.svg'
import IconeMenu from '../../assets/iconemenu.svg'
import {StyledHeader} from './Header.style'
import { StyledDivHeader } from './Header.style'
import { StyledInputHeader } from './Header.style'


export const Header = () => {
    return (
        <StyledHeader>
            <StyledDivHeader>
                <img src={LogoPorto} alt="Logo da Porto Seguro" />
                <StyledInputHeader type="search" name="input-header" id="input-header" placeholder='Digite aqui o que procura'/>
                <img style={{marginRight: 100}} src={IconeMenu} alt="Menu" />
            </StyledDivHeader>
        </StyledHeader>
    )
}