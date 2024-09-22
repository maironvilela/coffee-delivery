import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25.6rem;
  height: 31rem;
  background-color: var(--base-card);
  border-radius: 0 36px;
  padding-inline: 2.4rem;

  img {
    margin-top: -2rem;
    width: 12rem;
    height: 12rem;
  }

  ul {
    padding-block: 1.2rem 1.6rem;
    display: flex;
  }

  ul li {
    list-style: none;
    background-color: var(--yellow-light);
    padding: 0.4rem 0.8rem;
    border-radius: 100px;
    color: var(--yellow-dark);
    font-weight: bold;
    font-size: var(--size-tag);
    gap: 0.4rem;
  }

  h2 {
    color: var(--base-subtitle);
    font-size: var(--size-title-s);
  }

  p {
    padding-top: 0.8rem;
    color: var(--base-label);
    font-size: var(--size-regular-s);
    text-align: center;
  }
`;

export const Price = styled.div`
  padding-top: 3.3rem;
  display: flex;
  align-items: center;

  .price {
    width: 100%;
    padding-right: 1.8rem;

    font-size: var(--size-title-m);
    font-weight: bold;
  }

  .price:before {
    content: 'R$';
    font-size: var(--size-regular-s);
    padding-top: 0.8rem;
    padding-right: 0.2rem;
  }
`;

export const PriceControl = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: var(--base-button);
  padding-inline: 1.2rem;
  padding-block: 0.85rem;
  border-radius: 6px;
  gap: 0.4rem;

  span {
    font-size: var(--size-regular-m);
  }
`;

export const ButtonPriceControlDefault = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.8s ease-in-out;

  svg {
    fill: var(--purple);
  }
`;

export const BtnIconMinus = styled(ButtonPriceControlDefault)`
  &:hover {
    svg {
      fill: var(--purple-dark);
    }
  }
`;
export const BtnIconPlus = styled(ButtonPriceControlDefault)`
  &:hover {
    svg {
      fill: var(--purple-dark);
    }
  }
`;

export const BtnIconShoppingCart = styled.button`
  cursor: pointer;
  margin-left: 0.8rem;
  background-color: var(--purple);
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  svg {
    width: 2rem;
    height: 2rem;
    border-radius: 6px;
    fill: var(--white);
  }
`;
