export default function Home() {
  const challenges = [{ name: "qrcode component", url: "/qr-code" }];
  return (
    <>
      {challenges.map((el) => {
        return (
          <a
            href={el.url}
            // className="bg-red-100 mx-5 mt-28 p-5 text-red-600 font-bold text-3xl"
          >
            {el.name}
          </a>
        );
      })}
    </>
  );
}
