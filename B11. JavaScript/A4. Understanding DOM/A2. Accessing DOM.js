//so we talked that DOM is a collection of objects

//open console by inspecting

document // this will show you the document object that is there
#document<!DOCTYPE html><html lang=​"en">​<head>​…​</head>​<meta charset=​"UTF-8">​<meta http-equiv=​"X-UA-Compatible" content=​"IE=edge">​<meta name=​"viewport" content=​"width=device-width, initial-scale=1.0">​<title>​Document​</title>​</head>​<body>​…​</body>​</html>​
  
//similary if you want to access the document corresponding to the HTML,
document.documentElement  // so this is object for HTML tag
<html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​

document.head
<head>​…​</head>​

document.body
<body>​…​</body>​

window //this window will have load of properties attached to window
Window {window: Window, self: Window, document: document, name: '', location: Location, …}

window.document // this will give the same result like document

window.screen //this screen object has basic details about the screen, height, width, orientation
Screen {availWidth: 1366, availHeight: 728, width: 1366, height: 768, colorDepth: 24, …}

//DOM is basically a Programming API(Application Programming Interface)
// API is code written by someone else and its easy for us to use
//so here the features that you are able to access and even DOM serves as API for us
