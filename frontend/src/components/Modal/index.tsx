import React, { FC } from "react";
import { ModalProps } from "./interface";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "./styled";

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footerContent,
}) => {
  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={onClose} role="presentation">
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footerContent}</ModalFooter>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};