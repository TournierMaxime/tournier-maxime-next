import { realisation } from "../../../locales/fr.json";
// Get the element id
export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    const project = realisation.projects.find(
      (project) => project.id === parseInt(id)
    );
    res.status(200).json(project);
  }
}
