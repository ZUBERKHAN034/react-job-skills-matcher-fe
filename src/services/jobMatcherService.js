import axios from "axios";

 const newRequest = axios.create({
  baseURL: import.meta.env.VITE_BE_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
});

// Get job skills by job title
export const getJobSkills = async (jobTitle) => {
  try {
    const params = new URLSearchParams();
    params.append('jobTitle', jobTitle);
    
    const { data: response } = await newRequest.post(
      '/api/job-matcher/job-skills',
      params
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching job skills:', error);
    throw error;
  }
};

// Parse resume file and extract skills
export const parseResume = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    const { data: response } = await newRequest.post(
      '/api/job-matcher/parse-resume',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error parsing resume:', error);
    throw error;
  }
};

// Parse resume text and extract skills
export const parseResumeText = async (text) => {
  try {
    // Create a text file from the resume text
    const blob = new Blob([text], { type: 'text/plain' });
    const file = new File([blob], 'resume.txt', { type: 'text/plain' });
    
    return await parseResume(file);
  } catch (error) {
    console.error('Error parsing resume text:', error);
    throw error;
  }
};

// Compare job skills and resume skills
export const compareSkills = async (jobSkills, resumeSkills) => {
  try {
    const { data: response } = await newRequest.post(
      '/api/job-matcher/compare-skills',
      {
        jobSkills,
        resumeSkills,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error comparing skills:', error);
    throw error;
  }
};