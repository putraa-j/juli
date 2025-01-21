const Contact = () => {
  return (
    <section className="py-20 bg-gray-800 text-white" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 py-2 px-4 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
