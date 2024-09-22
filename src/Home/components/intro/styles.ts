import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 9.4rem;
  text-align: start;
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;

  > div {
    min-width: 60rem;
  }

  h1 {
    color: var(--base-title);
    font-size: var(--size-title-xl);
    line-height: 150%;
  }

  span {
    display: block;
    padding-top: 1.6rem;
    color: var(--base-subtitle);
    font-size: var(--size-regular-l);
    max-width: 58.8rem;
    line-height: 130%;
  }

  img {
    width: 47.6rem;
    height: 36rem;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  padding-top: 6.6rem;
  flex-direction: row;
  max-width: 70rem;
  flex-wrap: wrap;
  gap: 2rem;
`;

type itemsVariant = 'yellow' | 'yellowDark' | 'baseText' | 'purple';

interface ItemsProps {
  bg: itemsVariant;
}

export const itemsVariants = {
  yellow: '--yellow',
  yellowDark: '--yellow-dark',
  baseText: '--base-text',
  purple: '--purple',
};

export const Items = styled.div<ItemsProps>`
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    background-color: var(${props => itemsVariants[props.bg]});
    border-radius: 100%;
    padding: 0.8rem;
    svg {
      fill: var(--white);
    }
  }

  span {
    display: block;
    padding-bottom: 1.5rem;
    font-size: var(--size-regular-m);
  }
`;
