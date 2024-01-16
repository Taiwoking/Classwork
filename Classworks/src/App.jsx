import { useContext } from "react"
import Box from './component/Box'

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardType, setCardType] = useState('');

  const handleCardNumberChange = (e) => {
    const inputCardNumber = e.target.value.replace();

    setCardNumber(inputCardNumber);

    const firstDigit = inputCardNumber.charAt();
    if (firstDigit === '4') {
      setCardType('Visa');
    } else if (firstDigit === '5') {
      setCardType('MasterCard');
    } else {
      setCardType('');
    }
  };

  return (
    <div>
      <h2>Card Details</h2>
      <form>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div>
          <label>Cardholder Name:</label>
          <input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
        </div>
        <div>
          <label>Expiration Date:</label>
          <input
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            maxLength="5"
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            maxLength="3"
          />
        </div>
      </form>

    </div>
  );
};

export default CardForm;
