using DocumentFormat.OpenXml.Wordprocessing;

namespace CvElf.Api.Services;

public class CvStyles
{
    public const string H1StyleId = "title-style-id";
    public const string H1StyleName = "Title";
    public const string H2StyleId = "h2-style-id";
    public const string H2StyleName = "H2";
    public const string H3StyleId = "h3-style-id";
    public const string H3StyleName = "H3";
    public const string H4StyleId = "h4-style-id";
    public const string H4StyleName = "H4";
    public const string BodyStyleId = "body-style-id";
    public const string BodyStyleName = "Body";
    public const string BodyBoldStyleId = "body-bold-style-id";
    public const string BodyBoldStyleName = "BodyBold";
    public const string BodySmallStyleId = "body-small-style-id";
    public const string BodySmallStyleName = "BodySmall";

    public static Style GetH1()
    {
        Style style = new Style()
        {
            Type = StyleValues.Paragraph,
            StyleId = H1StyleId,
            CustomStyle = true
        };

        SetStyleDefaults(style, H1StyleName);
        var props = GetRunProperties(36, true);
        props.Append(new Color() { ThemeColor = ThemeColorValues.Accent1 });
        style.Append(props);
        return style;
    }

    public static Style GetH2()
    {
        Style style = new Style()
        {
            Type = StyleValues.Paragraph,
            StyleId = H2StyleId,
            CustomStyle = true
        };

        SetStyleDefaults(style, H2StyleName);
        var props = GetRunProperties(36, true);
        // props.Append(new Color() { ThemeColor = ThemeColorValues.Accent1 });
        style.Append(props);
        return style;
    }

    public static Style GetH3()
    {
        Style style = new Style()
        {
            Type = StyleValues.Paragraph,
            StyleId = H3StyleId,
            CustomStyle = true,
            StyleParagraphProperties = new StyleParagraphProperties(
                new SpacingBetweenLines { Before = "300", After = "0", Line = "200", LineRule = LineSpacingRuleValues.Exact }
            )
        };

        SetStyleDefaults(style, H3StyleName);
        var props = GetRunProperties(24, true);
        style.Append(props);
        return style;
    }

    public static Style GetH4()
    {
        Style style = new Style
        {
            Type = StyleValues.Paragraph,
            StyleId = H4StyleId,
            CustomStyle = true
        };

        SetStyleDefaults(style, H4StyleName);
        var props = GetRunProperties(24, true);
        style.Append(props);
        return style;
    }

    public static Style GetBody()
    {
        Style style = new Style()
        {
            Type = StyleValues.Paragraph,
            StyleId = BodyStyleId,
            CustomStyle = true,
            StyleParagraphProperties = DefaultParagraph,
        };

        SetStyleDefaults(style, BodyStyleName);
        style.Append(GetRunProperties(20));
        return style;
    }

    public static Style GetBodySmall()
    {
        Style style = new Style()
        {
            Type = StyleValues.Paragraph,
            StyleId = BodySmallStyleId,
            CustomStyle = true,
            StyleParagraphProperties = new StyleParagraphProperties(
                new ParagraphBorders(new BottomBorder { Val = BorderValues.None }),
                new SpacingBetweenLines() { Before = "0", After = "0", Line = "250", LineRule = LineSpacingRuleValues.Exact },
                new TableCellVerticalAlignment() { Val = TableVerticalAlignmentValues.Center }
            ),
        };

        SetStyleDefaults(style, BodySmallStyleName);
        style.Append(GetRunProperties(18));
        return style;
    }

    public static Style GetBodyBold()
    {
        Style style = new Style()
        {
            Type = StyleValues.Paragraph,
            StyleId = BodyBoldStyleId,
            CustomStyle = true,
            StyleParagraphProperties = DefaultParagraph,
        };
        SetStyleDefaults(style, BodyBoldStyleName);
        style.Append(GetRunProperties(20, true));

        return style;
    }

    static StyleParagraphProperties DefaultParagraph
        => new StyleParagraphProperties(
            new ParagraphBorders(
                new BottomBorder() { Val = BorderValues.None }
            ),
            new SpacingBetweenLines() { Before = "100", After = "100", Line = "300", LineRule = LineSpacingRuleValues.Exact },
            new TableCellVerticalAlignment() { Val = TableVerticalAlignmentValues.Center }
        );

    private static StyleRunProperties GetRunProperties(int size, bool isBold = false)
    {
        // Create the StyleRunProperties object and specify some of the run properties.
        StyleRunProperties styleRunProperties1 = new StyleRunProperties();
        if (isBold)
            styleRunProperties1.Append(new Bold());
        styleRunProperties1.Append(new RunFonts() { Ascii = "Calibri" });
        styleRunProperties1.Append(new FontSize() { Val = size.ToString() });
        return styleRunProperties1;
    }

    private static void SetStyleDefaults(Style style, string name)
    {
        StyleName styleName1 = new StyleName() { Val = name };
        BasedOn basedOn1 = new BasedOn() { Val = "Normal" };
        NextParagraphStyle nextParagraphStyle1 = new NextParagraphStyle() { Val = "Normal" };
        style.Append(styleName1);
        style.Append(basedOn1);
        style.Append(nextParagraphStyle1);
    }
}