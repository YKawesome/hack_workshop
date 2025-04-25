import Yousef from "../../assets/Yousef.png";
import Connie from "../../assets/Connie.png";

function About() {
  return (
    <>
      <div className="h-[91vh]">
        <div className="bg-gradient-to-br from-primary to-secondary h-full flex items-center justify-center gap-[2rem]">
          <div className="card glass bg-base-100/40 w-96 shadow-2xl">
            <figure className="px-10 pt-10">
              <img
                src={Yousef}
                alt="Shoes"
                className="rounded-xl mask-squircle h-50"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Yousef Khan</h2>
              <p>
                Hack Logistics Organizer :D
              </p>

            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={Connie}
                alt="Shoes"
                className="rounded-xl mask-squircle h-50"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Yousef Khan</h2>
              <p>
                Hack Logistics Organizer :D
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
