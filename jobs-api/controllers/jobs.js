import { Jobs } from "../models/jobs.js";

export async function getAllJobs(req, res) {
  const {
    page,
    pagesize,
    title = "",
    location = "",
    jobType,
    salarymin,
    salarymax,
  } = req.query;

  let regextitle = new RegExp(`${title}`, "i");
  let regexLocation = new RegExp(`${location}`, "i");
  let regexjobType = new RegExp(`${jobType}`, "i");
  const jobs = await Jobs.find({
    title: { $regex: regextitle },
    location: { $regex: regexLocation },
    jobType: { $regex: regexjobType },
    salary: {
      $gte: parseInt(salarymin || 0),
      $lte: parseInt(salarymax || 1000000000),
    },
  })
    .skip((page - 1) * pagesize)
    .limit(pagesize);
  const NumberOfPage = Math.ceil((await Jobs.find()).length / pagesize);
  return res.json({ jobs, NumberOfPage });
}
export async function getJobById(req, res) {
  const jobs = await Jobs.findById(req.params.id);
  return res.json(jobs);
}

export async function createManyJobs(req, res) {
  const jobs = await Jobs.create(req.body);
  return res.json(jobs);
}
export async function applyToJob(req, res) {
  const job = await Jobs.findById(req.params.id);
  job.applicants.push(req.body);
  job.save();
  return res.json(job);
}
