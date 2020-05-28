import styled from 'styled-components';

export const View = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 9;
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const LoginView = styled.div`
  display: flex;
  flex: 1;
  max-width: 450px;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      background: #fff;
    }

    div + div {
      margin-top: 8px;
    }

    button {
      margin-top: 8px;
    }

    .separa {
      display: flex;
      justify-content: center;
      margin-top: 8px;
    }

    h3 {
      display: flex;
      justify-content: center;
      margin-bottom: 14px;
      color: #999;
    }
  }
`;
