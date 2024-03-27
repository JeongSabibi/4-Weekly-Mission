import React from 'react';
import styled from 'styled-components';
import close from '../../images/close.svg';

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
`;

const Container = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.2rem 4rem;
  gap: 2.4rem;
  border-radius: 1.5rem;
  border: 1px solid var(--gray20);
  background: var(--white);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`;

const Title = styled.h1`
  color: var(--gray100);
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 700;
`;

const SubTitle = styled.h3`
  color: var(--gray60);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.2rem;
`;

const Input = styled.input`
  display: flex;
  width: 28rem;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid var(--primary);
  background: var(--white);
`;

const Button = styled.button`
  display: flex;
  width: 28rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: ${({ color }) =>
    color === 'blue'
      ? 'linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)'
      : 'var(--red)'}; // 따옴표를 왜?
  color: #f5f5f5;
  font-size: 1.6rem;
  font-weight: 600;
`;

export default function Modal({
  title,
  subTitle,
  placeholder,
  buttonColor = 'blue',
  buttonTitle,
  onClick,
}) {
  return (
    <Background>
      <Container>
        <CloseButton src={close} onClick={onClick} />
        <Title>{title}</Title>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        {placeholder && <Input placeholder={placeholder} />}
        {buttonTitle && <Button color={buttonColor}>{buttonTitle}</Button>}
      </Container>
    </Background>
  );
}
