package com.resumemaker.backend.controller;

import com.resumemaker.backend.service.ResumeService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {
    private final ResumeService resumeService;
    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping(
            value = "/generate",
            consumes = MediaType.TEXT_PLAIN_VALUE
    )
    public String generateResumeResponse(@RequestBody String userDescription) {
        return resumeService.generateResumeResponse(userDescription);
    }
}
