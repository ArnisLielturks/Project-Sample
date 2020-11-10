Module.LoadResourceFromUrl("https://urho3d.github.io/assets/images/logo.png", "Textures/Logo.png");

var content = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAgMAAAAhHED1AAAADFBMVEUAAAAA/wD/gAD///9GPgw8AAAAt0lEQVR42u3auw3DMAwFQC6pJbVkUhkwCH3iuDJ9ryShKwmJUHxuJgAAAAAAALwOaK01AADwLiBS8uFRHwAA1AX6KRERBzDqAQCAmsAxJHrKrH5GAABAPSA3RwcAAEBtIA+N86NiVct1AABQA+h/BgAA1AV24HTQAACAMsAvyOUbCgAAeByQFxCxyXaDAQAAygAr5NJGEwAAPBIYIbtsf0AAAIBSwOrxAQAA6gLLT82TOgAAKAV8AZOgiB0hDSCxAAAAAElFTkSuQmCC";
Module.AddResourceFromBase64("Textures/StoneDiffuse.dds", content);

Module.LoadResourceFromUrl("https://urho3d.github.io/assets/images/logo.png","Textures/Mushroom.dds");
