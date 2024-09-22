import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Container, ContainerMapCart, Content, IconCart, MapIcon } from "./styles";


export function Header() {
  return (
    <Container>
      <Content className="container">
        <img src="/public/assets/images/logo.svg" alt="logo coffee delivery" />
        <ContainerMapCart>
          <MapIcon>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </MapIcon>
          <IconCart>
            <ShoppingCart size={22} weight="fill" />
          </IconCart>
        </ContainerMapCart>
      </Content>
    </Container >
  )
}
