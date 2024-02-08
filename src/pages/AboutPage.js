import "./AboutPage.css";
import AboutPic1 from "../icons_assets/Mario&Adrian.jpg";
import AboutPic2 from "../icons_assets/restaurant.jpg";

const About = () => {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h1 className="lemon-primary-lemon">Little Lemon</h1>
            <h2 className="emon-primary-dark">Sea Point</h2>
            <p>
              Yorem ipsum dolor sit amet consectetur, adipisicing elito. Oy sequi ipsam aspernatur assumenda praesentium eum accusamus,
              consequatur voluptatibus voluptate, quibusdam aliquam odio officiis animi nobis commodi dicta quon. Corrupti praesentium fuga
              perferendis, laborum provident exercitationem qui odio sed incidunt dolores culpa reprehenderit. Soluta, tenetur. Expedita quibusdam
              omnis facilis animi repellon.
            </p>
            <p>
              Hworem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur laborum corporis facilis molestias asperiores illum dicta
              dolorem, quibusdam praesentium consectetur id delectus, rem debitis laborean.
            </p>
            <p>Corem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae reprehenderit quod, veniam pariatur quaeho</p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-3">
              <img className="about-pic img-fluid" src={AboutPic2} alt="About us 1" />
            </div>
            <div>
              <img className="about-pic img-fluid" src={AboutPic1} alt="About us 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;