import React from 'react'
import {
    CartButton,
    GreenLink,
    HamburgerButton,
    Link,
    DataContainer,
    NavBarContainer,
    SearchButton,
    SearchContainer,
    SearchInput,
    WishButton, LinkContainer
} from "./NavBar.styled";
import search from '../../images/search.svg'
import wish from '../../images/wish.svg'
import cart from '../../images/cart.svg'
import arrowDown from '../../images/arrow-down.svg'
import logo_grey from '../../images/logo_grey.svg'
import hamburger from '../../images/hamburger-icon.svg'

export default class NavBar extends React.Component{
    render(){
        return(
            <NavBarContainer>
                <img src={logo_grey}/>
                <DataContainer>

                    <LinkContainer>
                        <GreenLink href='#'>Категории <img src={arrowDown}/></GreenLink>
                        <Link href='#'>Про нас</Link>
                        <Link href='#'>Доставка и оплата</Link>
                        <Link href='#'>Контакты</Link>
                    </LinkContainer>

                    <SearchContainer>
                        <SearchInput placeholder='Поиск...'/>
                        <SearchButton><img src={search} alt='Search'/></SearchButton>
                    </SearchContainer>

                    <WishButton><img src={wish} alt='Wishlist'/></WishButton>
                    <CartButton><img src={cart} alt='Cart'/></CartButton>
                    <HamburgerButton><img src={hamburger} alt='More'/></HamburgerButton>

                </DataContainer>
            </NavBarContainer>
        )
    }
}