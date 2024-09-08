import React, { createContext, ReactNode, useContext, useReducer } from 'react';

// Type of Modal
export type ModalType = 'contact' | 'faq' | 'confirm';

// Type of Modal State
type ModalState = {
  [key in ModalType]: boolean;
};

// Initial State for Modal
const initialState: ModalState = {
  contact: true,
  faq: false,
  confirm: false,
};

// Define Action
type ModalAction = { type: 'OPEN_MODAL' | 'CLOSE_MODAL'; modalType: ModalType };

// Create Reducer
const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, [action.modalType]: true };
    case 'CLOSE_MODAL':
      return { ...state, [action.modalType]: false };
    default:
      return state;
  }
};

// Create Context
const ModalContext = createContext<{
  state: ModalState;
  openModal: (modalType: ModalType) => void;
  closeModal: (modalType: ModalType) => void;
} | null>(null);

// Create Provider
export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  // function to open modal
  const openModal = (modalType: ModalType) => dispatch({ type: 'OPEN_MODAL', modalType });

  // function to close modal
  const closeModal = (modalType: ModalType) => dispatch({ type: 'CLOSE_MODAL', modalType });

  return (
    <ModalContext.Provider value={{ state, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// custom hooks
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
