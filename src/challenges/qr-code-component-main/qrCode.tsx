import qrCodeImg from "./images/image-qr-code.png";

export default function QrCodePage(
  onClick = () => {
    alert("onclick");
  }
) {
  const { img, title, description } = {
    img: qrCodeImg,
    title: "Improve your front-end skills by building projects",
    description:
      "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  };
  return (
    <>
      <main className="min-h-screen bg-gray-400 flex items-center justify-center">
        <article className="bg-white grid w-full sm:w-4/5 md:w-3/4 lg:w-1/2 text-center p-3 rounded-2xl gap-4 max-w-80 lg:w-9">
          <img src={img} alt="" className="rounded-lg" onClick={onClick} />
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-600 mb-5">{description}</p>
        </article>
      </main>
    </>
  );
}
