import heroImage from "../assets/visual.jpeg";

function Hero() {
    return (
        <section
          id="home"
          className="hero"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
           <div className="hero-copy">
            <p className="badge">Luxury hair brand</p>
            <h1>Premium hair extensions and styling made for confidence.</h1>
            <p>Feel gorgeous with every strand, expertly crafted for your unique style.</p>
            <div
            className="hero-actions">
                <a href="#contact" className="button primary">Shop Now</a>
                <a href="#features" className="button outlined">Explore Features</a>
            </div>
           </div>

           <div
           className="hero-visual">
            {/* <img src={heroImage} alt="Hero Visual" /> */}
            <div className="hero-card">
            <span>Soft textures</span>
            <span>Natural shine</span>
            <span>Long lasting</span>
            <span>Custom color</span>
            <span>Fast delivery</span>
            </div>
           </div>
        </section>
    );
}

export default Hero;