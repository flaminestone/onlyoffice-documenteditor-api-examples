builder.CreateFile("docx");
var Document = Api.GetDocument();
var Paragraph = Document.GetElement(0);
var Drawing = Api.CreateChart("bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
Drawing.SetVerAxisTitle("USD In Hundred Thousands", 10);
Drawing.SetHorAxisTitle("Year", 11);
Stroke = Api.CreateStroke(1 * 15000, Api.CreateSolidFill(Api.CreateRGBColor(155, 64, 1)));
Drawing.SetMajorHorizontalGridlines(Stroke);
Drawing.SetTitle("Financial Overview", 13);
Paragraph.AddDrawing(Drawing);
builder.SaveFile("docx", "SetMajorHorizontalGridlines.docx");
builder.CloseFile();