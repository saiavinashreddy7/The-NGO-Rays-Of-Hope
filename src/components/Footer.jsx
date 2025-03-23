import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://www.google.com/maps/place/SRM+University+AP/@16.4497415,80.4960847,13z/data=!4m10!1m2!2m1!1ssrm+ap!3m6!1s0x3a35f253b87d44b3:0x591c2967f32abc19!8m2!3d16.4649199!4d80.5083236!15sCgZzcm0gYXCSARJwcml2YXRlX3VuaXZlcnNpdHngAQA!16s%2Fg%2F11grvk9yxg?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>SRM, Andhra Pradesh, India</p></a>
                            <a href="tel:+91-9992991259"><p><i className="fa fa-phone"></i>+91-9992991259</p></a>
                            <a href="mailto:raysofhopesrmap@gmail.com"><p><i className="fa fa-envelope"></i>raysofhopesrmap@gmail.com</p></a>
                            <div className="footer-social">
                                <a className="btn btn-custom" href="https://x.com/SRMUAP?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fab fa-x-twitter"></i></a>
                                <a className="btn btn-custom" href="https://www.facebook.com/SRMUAP/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-custom" href="https://www.instagram.com/srmuap/?hl=en"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-custom" href="https://www.youtube.com/c/SRMUniversityAP"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-custom" href="https://www.linkedin.com/school/srmuap/posts/?feedView=all"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/event">Popular Causes</a>
                            <a href="/event">Upcoming Events</a>
                            <a href="#">Latest Blog</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Useful Links</h2>
                            <a href="#">Terms of use</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Cookies</a>
                            <a href="#">Help</a>
                            <a href="#">FQAs</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <form name='NewsLetter'>
                                <input name='subscribe' className="form-control" placeholder="Email goes here" autoComplete='email' required/>
                                <button className="btn btn-custom">Submit</button>
                                <h6>Don't worry, we don't spam!</h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="#">Rays of Hope</a> | 2025, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://www.linkedin.com/in/sai-avinash-reddy-14b914258/"> SRM,Andhra Pradesh</a></p>
                    </div>
                </div>
            </div>
        </ div>
    );
}