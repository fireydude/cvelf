public record CV(string Name, Summary Summary, Skills KeySkills, WorkExperience[] Experiences, EducationTraining[] Educations);

public record SummaryItem(string Name, string Value);
public record Summary(SummaryItem[] Items, string SummaryDesc);
public record Skills(string[] Excellent, string[] Good, string[] Average);
public record WorkExperience(string? Title, string? Organisation, string? Location, DateTime StartDate, DateTime EndDate, string? Description);
public record EducationTraining(string? Establishment, string? Qualification, int Year, string?[] Areas);