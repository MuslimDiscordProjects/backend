import { project } from "@prisma/client";
import { Request, Response } from "express";

function GetProjectMetadata(req: Request, res: Response, project: project) {
  project.files.forEach((file) => {
    project.files[project.files.indexOf(file)] =
      process.env["PROTOCOL"] +
      "://" +
      process.env["IP"] +
      "/document/" +
      project.files[project.files.indexOf(file)] +
      "/download";
  });

  if (project.image != "none")
    project.image =
      process.env["PROTOCOL"] +
      "://" +
      process.env["IP"] +
      "/document/" +
      project.image +
      "/download";

  project.resources.forEach((resource) => {
    project.resources[project.resources.indexOf(resource)] =
      process.env["PROTOCOL"] +
      "://" +
      process.env["IP"] +
      "/resource/" +
      project.resources[project.resources.indexOf(resource)] +
      "/metadata";
  });

  res.status(200).send(project);
}

export default GetProjectMetadata;
