import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('closes the modal when clicking on the background', () => {
    const closeModal = jest.fn();
    const { getByTestId } = render(
      <Modal
        closeModal={closeModal}
        modalTitle="Test Modal"
        modalText="This is a test modal"
        btnText="Close"
        onClick={() => {}}
        background="#FFFFFF"
      />
    );

    const modalBackground = getByTestId('modal-background');
    fireEvent.click(modalBackground);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});