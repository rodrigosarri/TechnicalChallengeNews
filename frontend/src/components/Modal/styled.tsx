import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 5px;
  max-width: 576px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  max-width: 95%;
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalCloseButton = styled.button`
  cursor: pointer;
  border: 0 none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  right: 0;
`;
