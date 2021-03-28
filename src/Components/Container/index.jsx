import React from "react";
import styled from "styled-components";
import Titulo from "../Titulo";
import Conta from "../Conta";
import { fundoClaro } from "../UI/variaveis";
import Extrato from "../Extrato";

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const StyledConteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default () => {
  return (
    <StyledContainer>
      <Titulo>Olá Fulano!</Titulo>
      <StyledConteudo>
        <Conta />
        <Extrato />
      </StyledConteudo>
    </StyledContainer>
  );
};
