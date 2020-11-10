void Start()
{
    Text@ helloText = Text();
    helloText.text = "Hello World from Urho3D!";
    helloText.SetFont(cache.GetResource("Font", "Fonts/Anonymous Pro.ttf"), 30);
    helloText.color = Color(1.0f, 1.0f, 0.0f);
    helloText.horizontalAlignment = HA_CENTER;
    helloText.verticalAlignment = VA_CENTER;
    ui.root.AddChild(helloText);
}