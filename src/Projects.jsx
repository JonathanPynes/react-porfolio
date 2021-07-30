const [project, setProject] = useState([
  {
    title: "Finish portfolio",
    description: "finish the portfolio",
    figma: "Link",
    invision: "Link",
    website: "Link",
    artifacts: "Link",
    heroImg: {},
    id: nanoid(),
  },
  {
    title: "Finish portfolio",
    description: "finish the portfolio",
    figma: "Link",
    invision: "Link",
    website: "Link",
    artifacts: "Link",
    heroImg: {},
    id: nanoid(),
  },
  {
    title: "Finish portfolio",
    description: "finish the portfolio",
    figma: "Link",
    invision: "Link",
    website: "Link",
    artifacts: "Link",
    heroImg: {},
    id: nanoid(),
  },
]);

const ProjectItem = (props) => {
  const { title, description, figma, invision, website, artifacts, id } =
    props.item;
};
