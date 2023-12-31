

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-stone-700 text-white mt-14">
  <aside className="mt-10">
  <a className=" normal-case text-5xl "><span className="text-[#ff3e49] ">E</span>vent <span className="text-xl">Planner</span></a>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Wedding</a> 
    <a className="link link-hover">BabyShower</a> 
    <a className="link link-hover">Anniversaries</a> 
    <a className="link link-hover">Engagement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;