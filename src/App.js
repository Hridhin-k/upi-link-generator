import PaymentLinkGenerator from "./components/PaymentLinkGenerator";

function App() {
  const upId = "974614144692@paytm";
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
