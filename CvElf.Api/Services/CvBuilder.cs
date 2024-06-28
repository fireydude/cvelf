using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace CvElf.Api.Services;

public class CvBuilder
{
    static TableRow GetSummaryRow(string key, string value)
    {
        var row = new TableRow();
        var cellKey = new TableCell();
        cellKey.Append(new TableCellProperties(new TableCellWidth() { Type = TableWidthUnitValues.Dxa, Width = "2400" }));
        var keyPara = new Paragraph(new Run(new Text(key)));
        keyPara.PrependChild(new ParagraphProperties
        {
            ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.BodyBoldStyleId },
        });
        cellKey.Append(keyPara);
        row.Append(cellKey);

        var cellValue = new TableCell();
        cellValue.Append(new TableCellProperties(new TableCellWidth() { Type = TableWidthUnitValues.Dxa, Width = "2400" }));
        var cellPara = new Paragraph(new Run(new Text(value)));
        cellPara.PrependChild(new ParagraphProperties
        {
            ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.BodyStyleId },
        });
        cellValue.Append(cellPara);
        row.Append(cellValue);
        return row;
    }

    public byte[] Build(CV cv)
    {
        var stream = new MemoryStream();
        using (var document = WordprocessingDocument.Create(stream, WordprocessingDocumentType.Document))
        {
            document.AddMainDocumentPart();
            var body = new Body();

            var styleDefinitionsPart = document.MainDocumentPart.AddNewPart<StyleDefinitionsPart>();
            Styles root = new Styles();
            root.Save(styleDefinitionsPart);
            styleDefinitionsPart.Styles.Append(CvStyles.GetH1());
            styleDefinitionsPart.Styles.Append(CvStyles.GetH2());
            styleDefinitionsPart.Styles.Append(CvStyles.GetH3());
            styleDefinitionsPart.Styles.Append(CvStyles.GetH4());
            styleDefinitionsPart.Styles.Append(CvStyles.GetBody());
            styleDefinitionsPart.Styles.Append(CvStyles.GetBodyBold());
            styleDefinitionsPart.Styles.Append(CvStyles.GetBodySmall());

            var title = new Paragraph(new Run(new Text(cv.Name)));
            var titleProps = new ParagraphProperties();
            titleProps.ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.H1StyleId };
            title.PrependChild(titleProps);

            body.AddChild(title);
            body.AppendChild(HorizontalLine.GetHorizontalLine());

            var table = new Table();
            foreach (var row in cv.Summary.Items)
            {
                table.AppendChild(GetSummaryRow(row.Name, row.Value));
            }
            body.Append(table);

            var summary = new Paragraph(new Run(new Text(cv.Summary.SummaryDesc)));
            var summaryProps = new ParagraphProperties();
            summaryProps.ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.BodyStyleId };
            summary.PrependChild(summaryProps);
            body.Append(summary);
            body.AppendChild(HorizontalLine.GetHorizontalLine());

            var skillsHeading = new Paragraph(new Run(new Text("Key Skills")));
            skillsHeading.PrependChild(new ParagraphProperties
            {
                ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.H2StyleId }
            });
            body.Append(skillsHeading);
            SkillSection(body, "Excellent", cv.KeySkills.Excellent);
            SkillSection(body, "Good", cv.KeySkills.Good);
            SkillSection(body, "Average", cv.KeySkills.Average);

            body.Append(new Paragraph(new Run(new Break() { Type = BreakValues.Page })));

            var experienceHeading = new Paragraph(new Run(new Text("Work Experience")));
            experienceHeading.PrependChild(new ParagraphProperties
            {
                ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.H2StyleId }
            });
            body.Append(experienceHeading);

            string GetDateString(DateTime date)
            {
                var monthName = date.ToString("MMMM", System.Globalization.CultureInfo.CreateSpecificCulture("en-GB")).Substring(0, 3);
                return $"{monthName} {date.Year}";
            }

            foreach (var e in cv.Experiences)
            {
                body.AddExperienceItem(new ExperienceItem(e.Title ?? string.Empty, e.Organisation ?? string.Empty, e.Location ?? string.Empty, $"{GetDateString(e.StartDate)} - {GetDateString(e.EndDate)}", e.Description ?? string.Empty));
            }
            body.AppendChild(HorizontalLine.GetHorizontalLine());

            var educationHeading = new Paragraph(new Run(new Text("Education")));
            educationHeading.PrependChild(new ParagraphProperties
            {
                ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.H2StyleId }
            });
            body.Append(educationHeading);

            foreach (var e in cv.Educations)
            {
                var qualificationTitle = e.Qualification ?? e.Establishment ?? string.Empty;
                var educationItemHeading = new Paragraph(new Run(new Text(qualificationTitle)));
                educationItemHeading.PrependChild(new ParagraphProperties
                {
                    ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.H3StyleId }
                });
                body.Append(educationItemHeading);

                var institution = new Paragraph();
                institution.PrependChild(new ParagraphProperties
                {
                    ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.BodySmallStyleId }
                });
                if (e.Qualification != null)
                {
                    var institutionSubTitle = new Run(new Text(e.Establishment ?? string.Empty));
                    institutionSubTitle.PrependChild(new RunProperties
                    {
                        Bold = new Bold { Val = new OnOffValue(true) }
                    });
                    institution.Append(institutionSubTitle);
                }
                institution.Append(new Run(new Text { Text = "\t" + e.Year.ToString(), Space = SpaceProcessingModeValues.Preserve }));
                institution.Append(new Break() { Type = BreakValues.TextWrapping });
                institution.Append(new Run(new Text("Subject areas")));
                institution.Append(new Break() { Type = BreakValues.TextWrapping });
                foreach (var subject in e.Areas)
                {
                    var t = new Text
                    {
                        Text = $"• {subject}",
                        Space = SpaceProcessingModeValues.Preserve,
                    };
                    institution.Append(new Run(t));
                    if (subject != e.Areas[e.Areas.Length - 1])
                    {
                        institution.Append(new Break() { Type = BreakValues.TextWrapping });
                    }
                }

                body.Append(institution);
            }

            document.MainDocumentPart.Document = new Document(body);
        }

        return stream.ToArray();

        static void SkillSection(Body body, string title, string[] skills)
        {
            var skills1 = new Paragraph(new Run(new Text(title)));
            skills1.PrependChild(new ParagraphProperties
            {
                ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.H4StyleId }
            });
            body.Append(skills1);

            var p = new Paragraph();
            foreach (var skill in skills)
            {
                var t = new Text
                {
                    Text = $"• {skill}  ",
                    Space = SpaceProcessingModeValues.Preserve,
                };
                p.Append(new Run(t));
                if (skill == "Git" || skill == "SQL Server")
                    p.Append(new Break());
            }
            var pp = new ParagraphProperties();
            pp.ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.BodyStyleId };
            p.PrependChild(pp);
            body.Append(p);
        }
    }
}