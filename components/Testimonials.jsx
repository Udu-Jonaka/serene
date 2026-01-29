export default function Testimonials() {
  const testimonials = [
    {
      name: "Emily R.",
      img: "https://i.pravatar.cc/40?img=1",
      rating: "★★★★★",
      text: "“I've tried countless serums, but this Glow Serum is next-level. Within a week, my skin looked brighter and smoother.”",
    },
    {
      name: "Tom F.",
      img: "https://i.pravatar.cc/40?img=2",
      rating: "★★★★★",
      text: "“As someone with eczema, I'm cautious with new products. This cream calmed my redness overnight.”",
    },
    {
      name: "Dan E.",
      img: "https://i.pravatar.cc/40?img=3",
      rating: "★★★★★",
      text: "“From packaging to effect, this mask transformed my dry skin overnight. Woke up plump and dewy. Obsessed!”",
    },
    {
      name: "Sarah L.",
      img: "https://i.pravatar.cc/40?img=5",
      rating: "★★★★★",
      text: "“The sustainable packaging is what drew me in, but the results kept me coming back. My holy grail now.”",
    },
  ];

  return (
    <section id="testimonial">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Testimonials</span>
          <h1>What Our Customers Say</h1>
        </div>

        <div className="carousel-container">
          {/* We duplicate the list to create the seamless infinite scroll effect */}
          <div className="carousel-track">
            {[...testimonials, ...testimonials].map((t, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <h4>{t.name}</h4>
                    <div className="stars">{t.rating}</div>
                  </div>
                </div>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
