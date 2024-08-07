'use client'

import React, { FC, Fragment } from 'react'
import { Theme, useMediaQuery } from '@mui/material'
import { GlobalContainer, GlobalWrapper } from '@templates'

import {
  FooterWrapper, Top, Center, ContactsWrapper, AddressWrapper,
  DocumentsWrapper, StyledLink, ContactTextWrapper, Heading, Address,
} from './footer.styled'

export const Footer: FC = () => {
  const isLarge = useMediaQuery<Theme>((theme) => theme.breakpoints.down('lg'))
  const isTablet = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'))
  const Container = isLarge ? Fragment : GlobalContainer

  const contactsMap = {
    tel: 1,
    mail: isTablet ? 2 : 3,
    fax: isTablet ? 3 : 2,
    site: 4,
  }

  return (
    <FooterWrapper>
      <Container>
        <GlobalWrapper>
          <Top>
            <AddressWrapper>
              <Heading>ООО НКО «Мурманский расчетный центр»</Heading>
              <Address>183071, г. Мурманск, ул. Старостина, д. 21</Address>
            </AddressWrapper>
            <ContactsWrapper>
              <ContactTextWrapper sx={{ order: contactsMap.tel }}>
                Телефон:
                {' '}
                <StyledLink href="tel:+7 (815-2) 994-606">+7 (815-2) 994-606</StyledLink>
              </ContactTextWrapper>
              <ContactTextWrapper sx={{ order: contactsMap.mail }}>
                Почта:
                <StyledLink href="mailto:info@mtcfinance.ru">info@mtcfinance.ru</StyledLink>
              </ContactTextWrapper>
              <ContactTextWrapper sx={{ order: contactsMap.fax }}>
                Факс:
                <StyledLink href="tel:+7 (815-2) 994-609">+7 (815-2) 994-609</StyledLink>
              </ContactTextWrapper>
              <ContactTextWrapper sx={{ order: contactsMap.site }}>
                Сайт:
                <StyledLink href="mtcfinance.ru">mtcfinance.ru</StyledLink>
              </ContactTextWrapper>
            </ContactsWrapper>
          </Top>
          <Center>
            <DocumentsWrapper>
              <StyledLink href="/" target="_blank">Памятка об электронных денежных средствах</StyledLink>
              <StyledLink href="/" target="_blank">Переводы за рубеж</StyledLink>
              <StyledLink href="/" target="_blank">Тарифы за переводы</StyledLink>
            </DocumentsWrapper>
          </Center>
        </GlobalWrapper>
      </Container>
    </FooterWrapper>
  )
}
