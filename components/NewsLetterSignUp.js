"use client";

const NewsletterSignup = () => {
  return (
    <section className="py-20 bg-neutral text-gray-900 text-center">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Updated!</h2>
        <p className="text-xl mb-6">
          Subscribe to our newsletter to receive the latest news and exclusive offers.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-md mb-4 md:mb-0 md:mr-4"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
