import Link from "components/Navbar/Link";

const Links = [
  { path: "#community", title: "Comunidad" },
  { path: "#activities", title: "Actividades" },
  { path: "#blog", title: "Blog" },
  { path: "#roadmap", title: "Roadmap" },
  { path: "#suscribe", title: "Suscribirse" }
];


function ListOfLinks() {
  return (
    <>
      {
        Links.map(({ path, title }) => (
          <Link
            key={path}
            path={path}
            title={title}
          />
        ))
      }
    </>
  )
}

export default ListOfLinks;
