using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Wordprocessing;

namespace CvElf.Api.Services;

public class HorizontalLine
{
    public static Paragraph GetHorizontalLine()
    {
        var rectange = new DocumentFormat.OpenXml.Vml.Rectangle
        {
            Style = new StringValue("width:0.0pt;height:1.5pt"),
            FillColor = new StringValue("#A0A0A0"),
            Horizontal = new TrueFalseValue(true),
            HorizontalAlignment = DocumentFormat.OpenXml.Vml.Office.HorizontalRuleAlignmentValues.Center,
            HorizontalStandard = new TrueFalseValue(true),
            Stroked = new TrueFalseValue(false)
        };
        return new Paragraph(new Run(new Picture(rectange)));
    }
}