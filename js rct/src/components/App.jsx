import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
function App() {
  const notes = [
    {
      heading: "Javascript and React.js",
      description:
        "This was an amazing bootcamp taken up shaurya Sinha. We covered everything from Scratch including Javascript, React.js,HTML.",
    },
    {
      heading: "HTML",
      description:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      heading: "JavaScript",
      description:
        "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
    {
      heading: "React.js",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    }, {
      heading: "Javascript and React.js",
      description:
        "This was an amazing bootcamp taken up shaurya Sinha. We covered everything from Scratch including Javascript, React.js,HTML.",
    },
    {
      heading: "HTML",
      description:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      heading: "JavaScript",
      description:
        "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
    {
      heading: "React.js",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    }, {
      heading: "Javascript and React.js",
      description:
        "This was an amazing bootcamp taken up shaurya Sinha. We covered everything from Scratch including Javascript, React.js,HTML.",
    },
    {
      heading: "HTML",
      description:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      heading: "JavaScript",
      description:
        "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
    {
      heading: "React.js",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
    },
  ];
  return (
    <div>
      <Header />
      <div className="note_group">
        {notes.map((note) => {
          return <Note heading={note.heading} description={note.description} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
