import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';

import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {

      const onSubmitMock = jest.fn();

      render(<SignInContainer onSubmit={onSubmitMock} />);

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle')
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password')
      fireEvent.press(screen.getByText('Sign in'))

      await waitFor(()=> {
        expect(onSubmitMock).toHaveBeenCalledTimes(1);
        expect(onSubmitMock.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password'
        });
      });      
    });
  });
});



