import PaymentLinkGenerator from "./components/PaymentLinkGenerator";
import "./App.css";
function App() {
  const upId = "hridhin@federal";
  const merchantName = "hridhin";
  const transactionAmount = "2700";
  return (
    <div>
      <PaymentLinkGenerator
        upiId={upId}
        merchantName={merchantName}
        transactionAmount={transactionAmount}
      />
    </div>
  );
}

export default App;
