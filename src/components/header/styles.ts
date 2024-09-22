import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  max-height: 10.2rem;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-block: 3.2rem;
`;

export const MapIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--size-regular-s);
  gap: 0.4rem;
  color: var(--purple);
  padding: 1rem;
  background-color: var(--purple-light);
  border-radius: 6px;

  svg {
    fill: var(--purple);
  }
`;

export const ContainerMapCart = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const IconCart = styled.div`
  padding: 0.8rem;
  background-color: var(--yellow-light);
  border-radius: 6px;

  > svg {
    fill: var(--yellow-dark);
  }
`;
