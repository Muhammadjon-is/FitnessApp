import logo from "../../assets/Logo.png";

const FooterPage = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} alt="Your Gym Logo" />
          <p>
            Welcome to Evo gym, where we are dedicated to helping you
            achieve your fitness goals. Our experienced trainers and
            state-of-the-art equipment make us the ideal place to start or
            continue your fitness journey. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
          <p>All Rights Reserved &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Useful Links</h4>
          <p className="my-5">About Us</p>
          <p className="my-5">Membership</p>
          <p>Contact Us</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">123 Fitness Street</p>
          <p className="my-5">(+48) 456 456 458</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
