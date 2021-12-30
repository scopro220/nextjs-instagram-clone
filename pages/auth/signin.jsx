import { getProviders, signIn } from "next-auth/react";
import Educational from "../../components/Educational";
import Header from "../../components/Header";

export default function SignInPage({ providers }) {
  return (
    <>
      <Header />
      <Educational>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="p-3 bg-blue-500 rounded-lg text-white"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </Educational>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
