import PaymentLinkGenerator from "./components/PaymentLinkGenerator";
import "./App.css";
import InsuarenceForm from "./components/InsuarenceForm";
function App() {
  const upId = "Q897207355@ybl";
  const merchantName = "Apple Restaurant";
  const transactionAmount = "1";
  return (
    <div>
      <PaymentLinkGenerator
        upiId={upId}
        merchantName={merchantName}
        transactionAmount={transactionAmount}
      />
      <InsuarenceForm />
    </div>
  );
}

export default App;
