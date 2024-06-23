using DocumentFormat.OpenXml.Wordprocessing;

namespace CvElf.Api.Services;

public record ExperienceItem(string heading, string company, string location, string date, string description);

public static class ExperienceLayout
{
    public static void AddExperienceItem(this Body body, ExperienceItem item)
    {
        var table = new Table();
        TableProperties tp = new();
        tp.Append(new CantSplit { Val = OnOffOnlyValues.Off });
        var headingRow = new TableRow();
        headingRow.Append(new TableRowProperties(new CantSplit()));
        var headingCell = new TableCell(
            new TableCellProperties(new GridSpan { Val = 3 }),
            new Paragraph(
                new ParagraphProperties
                {
                    ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.H3StyleId },
                    KeepNext = new KeepNext(),
                    KeepLines = new KeepLines(),
                },
                new Run(new Text(item.heading)
            )
        ));
        headingRow.Append(headingCell);
        table.AppendChild(headingRow);

        table.AppendChild(GetExperienceRow(item.company, item.location, item.date));

        var descRow = new TableRow();
        descRow.Append(new TableRowProperties(new CantSplit()));
        var descCell = new TableCell(
            new TableCellProperties(new GridSpan { Val = 3 }),
            new Paragraph(
                new ParagraphProperties
                {
                    ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.BodySmallStyleId }
                },
                new Run(new Text(item.description))
            )
        );
        descRow.Append(descCell);
        table.AppendChild(descRow);

        body.Append(table);
    }

    static TableRow GetExperienceRow(string name, string location, string date)
    {
        var row = new TableRow();
        row.Append(new TableRowProperties(new CantSplit()));
        row.Append(new TableCell(
            new TableCellProperties(
                new TableCellWidth() { Type = TableWidthUnitValues.Dxa, Width = "3500" }
            ),
            new Paragraph(
                new ParagraphProperties
                {
                    ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.BodyBoldStyleId },
                    KeepNext = new KeepNext(),
                    KeepLines = new KeepLines(),
                },
                new Run(new Text(name))
            )
        ));

        var cellLocation = new TableCell();
        cellLocation.Append(new TableCellProperties(new TableCellWidth() { Type = TableWidthUnitValues.Dxa, Width = "3000" }));
        var locationPara = new Paragraph(new Run(new Text(location)));
        locationPara.PrependChild(new ParagraphProperties
        {
            ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.BodyStyleId },
        });
        cellLocation.Append(locationPara);
        row.Append(cellLocation);

        var cellDate = new TableCell();
        cellDate.Append(new TableCellProperties(new TableCellWidth() { Type = TableWidthUnitValues.Dxa, Width = "2000" }));
        var datePara = new Paragraph(new Run(new Text(date)));
        datePara.PrependChild(new ParagraphProperties
        {
            ParagraphStyleId = new ParagraphStyleId { Val = CvStyles.BodyStyleId },
        });
        cellDate.Append(datePara);
        row.Append(cellDate);
        return row;
    }

}