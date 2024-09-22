import { CoffeeCard } from "../coffee-card";
import { Container, Title, ListOfCafes } from "./styles";



export function OurCoffees() {
    return (
        <Container className="container">

            <Title>Nossos cafés</Title>

            <ListOfCafes>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />

            </ListOfCafes>





        </Container >

    )
}