import qrCodeImg from "./images/image-qr-code.png";

function QrCodePage() {
  return (
    <>
      <main className="min-h-screen bg-gray-400">
        <img src={qrCodeImg} alt="" />
      </main>
    </>
  );
}

export default QrCodePage;
