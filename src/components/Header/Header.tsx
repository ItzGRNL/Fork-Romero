import LogoPorto from '../../assets/porto-icone-header.svg'
import Dropdown from '../../pages/MenuNav/DropDown'
import { StyledHeader } from './Header.style'
import { StyledDivHeader } from './Header.style'
import { StyledInputHeader } from './Header.style'
import { StyledMenu } from './Header.style'
import { StyledImgPorto } from './Header.style'



interface InputProps{
    RemoverInput?: boolean
}

export const Header = ({RemoverInput}: InputProps) => {
    return (
        <StyledHeader>
            <StyledDivHeader>
                <StyledImgPorto src={LogoPorto} alt="Logo da Porto Seguro" />
                <StyledInputHeader type="search" name="input-header" id="input-header" placeholder='Digite aqui o que procura' RemoverInput = {RemoverInput}/>
                <Dropdown />
            </StyledDivHeader>
        </StyledHeader>
    )
}