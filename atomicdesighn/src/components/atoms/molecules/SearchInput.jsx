import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../button/PrimaryButton";
import { Input } from "../input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
