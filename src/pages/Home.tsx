function Welcome() {
  return (
    <div className="text-center text-3xl font-bold mt-10">
      Bem-vindo ao Portfólio Fernando Arvelos!
    </div>
  );
}

function Construction() {
  return (
    <>
      <img src="/construction.png" alt="Em construção" />
    </>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div>
        <Welcome />
      </div>
      <div className="flex justify-center mt-10">
        <Construction />
      </div>
    </main>
  );
}
