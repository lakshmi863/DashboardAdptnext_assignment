import styled from 'styled-components';

export const ShippingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;

  .shipping-calculator {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
    
    h1 {
      font-size: 1.5rem;
      color: #333;
      margin-bottom: 15px;
    }

    p {
      font-size: 1rem;
      color: #666;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 20px;
      text-align: left;

      label {
        font-size: 0.9rem;
        color: #333;
        margin-bottom: 5px;
        display: block;
      }

      select, input {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border-radius: 5px;
        border: 1px solid #ddd;
        margin-top: 5px;
      }
    }

    .results {
      margin-top: 20px;

      p {
        font-size: 1rem;
        color: #333;

        span {
          font-weight: bold;
          color: #007BFF;
        }
      }
    }

    button {
      background-color: #007BFF;
      color: #ffffff;
      font-size: 1rem;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
