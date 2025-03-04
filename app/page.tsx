import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <section className="px-6 border-2 border-red-500 py-24 md:px-20">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text items-center">
              Smart Shopping Starts Here:
              <ArrowRight size={16} className="text-red-500" />
            </p>
            <h1 className="head-text">
              Unleash the Power of{' '}
              <span className="text-primary">PriceWise</span>
            </h1>
            <p className="mt-6">Powerful self serve product and growth analytics to help you convert, engage, and retain more.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;