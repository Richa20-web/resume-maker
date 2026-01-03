package com.resumemaker.backend.service.impl;

import com.resumemaker.backend.entity.Resume;
import com.resumemaker.backend.repository.ResumeRepository;
import com.resumemaker.backend.service.ResumeService;
import org.springframework.stereotype.Service;

@Service
public class ResumeServiceImpl implements ResumeService {
    private final ResumeRepository resumeRepository;
    public ResumeServiceImpl(ResumeRepository resumeRepository) {
        this.resumeRepository = resumeRepository;
    }

    @Override
    public String generateResumeResponse(String userDescription) {
        String generatedResume = "This is the generated resume for: " + userDescription;

        Resume resume = new Resume();
        resume.setName("Unknown");
        resume.setEmail("Unknown@example.com");
        resume.setSkills("N/A");
        resume.setGeneratedResume(generatedResume);

        resumeRepository.save(resume);

        return generatedResume;
    }
}
