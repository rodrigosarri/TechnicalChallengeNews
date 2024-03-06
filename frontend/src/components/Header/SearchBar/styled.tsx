import styled from "styled-components";

export const SearchBarButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;

  .fa {
    font-size: 20px;
    min-width: 20px;
    min-height: 20px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const SearchBarInput = styled.input`
  flex: 1;
  border: none;
  padding: 10px;
  border: 0 none;
  width: 100%;
  height: 49px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
