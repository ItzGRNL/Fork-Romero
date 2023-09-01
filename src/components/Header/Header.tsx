import LogoPorto from '../../assets/porto-icone-header.svg'
import IconeMenu from '../../assets/iconemenu.svg'
import {StyledHeader} from './Header.style'
import { StyledDivHeader } from './Header.style'
import { StyledInputHeader } from './Header.style'


interface InputProps{
    RemoverInput?: boolean
}

export const Header = ({RemoverInput}: InputProps) => {
    return (
        <StyledHeader>
            <StyledDivHeader>
                <img src={LogoPorto} alt="Logo da Porto Seguro" />
                <StyledInputHeader type="search" name="input-header" id="input-header" placeholder='Digite aqui o que procura' RemoverInput = {RemoverInput}/>
                <img style={{marginRight: 100}} src={IconeMenu} alt="Menu" />
            </StyledDivHeader>
        </StyledHeader>
    )
}