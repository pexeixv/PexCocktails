import BaseHead from "../components/BaseHead";

const Contact = () => {
  return (
    <>
      <BaseHead title="Contact" />

      <section>
        <div className="container mx-auto px-5 py-20">
          <h2 className=" text-3xl lg:text-4xl font-bold text-center">
            Contact Us
          </h2>
          <div className="flex items-center justify-center mt-16">
            <a
              href="mailto:hi@gavn.in"
              className="text-2xl mx-auto rounded-full border-8 py-3 px-8 font-bold inline-block hover:bg-white transition-colors duration-300 border-white hover:text-neutral-900"
            >
              hi@gavn.in
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
