import Description from "components/Community/Description";
import Playground from "components/Community/Playground";

function Community() {
  return (
    <section className="community" id="community">
      <h2 className="section-title community__title">Comunidad</h2>

      <div className="community__content">
        <Description />
        <Playground />
      </div>
    </section>
  );
}

export default Community;
