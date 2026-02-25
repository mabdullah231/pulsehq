import { Header } from "@/components/sections/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20"> {/* Adjust padding to match header height */}
        {/* Rest of your landing page sections */}
        <section className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold">Welcome to PulseHQ</h1>
          {/* Add your hero, features, etc. */}
        </section>
      </main>
    </>
  );
}