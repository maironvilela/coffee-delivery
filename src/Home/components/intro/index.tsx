import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Container, Content, ItemContainer, Items, } from "./styles";


export function Intro() {
    return (
        <Container className="container">
            <Content>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

                    <ItemContainer> {/** TODO: Remover para outro componente */}
                        <Items bg={'yellowDark'}>
                            <div>
                                <ShoppingCart size={16} weight="fill" />
                            </div>
                            <span>Compra simples e segura</span>
                        </Items>
                        <Items bg={'baseText'}>
                            <div>
                                <Package size={16} weight="fill" />
                            </div>
                            <span>Embalagem mantém o café intacto</span>
                        </Items>
                        <Items bg={'yellow'}>
                            <div>
                                <Timer size={16} weight="fill" />
                            </div>
                            <span>Entrega rápida e rastreada</span>
                        </Items>
                        <Items bg={'purple'}>
                            <div>
                                <Coffee size={16} weight="fill" />
                            </div>
                            <span>O café chega fresquinho até você</span>
                        </Items>
                    </ItemContainer>
                </div>
                <img src='/public/assets/images/intro.png' alt="Coffee Delivery" />
            </Content>
        </Container>

    )
}