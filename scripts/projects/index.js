import inabima from "./inabima.js";
import jce from "./jce.js";
import cabinJarabacoa from "./cabinJarabacoa.js";

const projects = [
  inabima,
  jce,
  cabinJarabacoa,
]

const projectsPreview = projects.map(item => {
  return {
    id: item.id,
    name: item.name,
    shortName: item.shortName,
    cover: {
      thumbUrl: item.cover.thumbUrl,
      description: item.cover.description
    }
  }
})

export { projects, projectsPreview }