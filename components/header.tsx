import Head from "next/head";

const Header = () => {
  return (
    <div>
      <Head>
        <title>Vehicle Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-slate-500 text-3xl text-gray-800 my-4 mb-8 font-bold py-4">
        My Online Vehicle Store
      </h1>
    </div>
  );
};

export default Header;
