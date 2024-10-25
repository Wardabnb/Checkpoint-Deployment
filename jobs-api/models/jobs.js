import mongoose from 'mongoose';

const jobsSchema = new mongoose.Schema({
  description: String,
  open: Boolean,
  title: String,
  location: String,
  salary: Number,
  company: String,
  jobType: String,
  companyLogo: String,
  companyWebsite: String,
  companyLocation: String,
  applicants: [
    {
      name: String,
      email: String,
      resume: String,
      coverLetter: String,
    },
  ],
}, { timestamps: true });

export const Jobs = mongoose.model('Jobs', jobsSchema);
