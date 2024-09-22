import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { BtnIconMinus, BtnIconPlus, BtnIconShoppingCart, Container, Price, PriceControl } from "./styles";
import { NumericFormat } from 'react-number-format';


export function CoffeeCard() {

    const item =
    {
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        imageUrl: "/public/assets/images/expresso.png",
        tags: ["Tradicional", "Com Leite"],
        price: 9.90,
        quantity: 1,
    }


    return (
        <Container>
            <img src={item.imageUrl} />

            <ul>
                {item.tags.map(tag => (
                    <li key={tag}> {tag} </li>
                ))}
            </ul>

            <h2>{item.title}</h2>

            <p>{item.description}</p>

            <Price>
                <NumericFormat value={item.price}
                    displayType="text"
                    thousandSeparator="."
                    decimalSeparator=","
                    decimalScale={2}
                    fixedDecimalScale={true} className="price" />
                <PriceControl>
                    <BtnIconMinus><Minus /></BtnIconMinus>
                    <span>{item.quantity}</span>
                    <BtnIconPlus> <Plus /></BtnIconPlus>
                </PriceControl>
                <BtnIconShoppingCart><ShoppingCart weight="fill" /></BtnIconShoppingCart>

            </Price>
        </Container>
    )
}