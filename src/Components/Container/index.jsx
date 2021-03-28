import React from "react";
import styled from "styled-components";
import Titulo from "../Titulo";
import Conta from "../Conta";
import { fundoClaro } from "../UI/variaveis";

const StyledContainer = styled.div`
  background-color: ${fundoClaro};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const StyledConteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default () => {
  return (
    <StyledContainer>
      <Titulo>Olá Fulano!</Titulo>
      <StyledConteudo>
        <Conta />
      </StyledConteudo>
    </StyledContainer>
  );
};
