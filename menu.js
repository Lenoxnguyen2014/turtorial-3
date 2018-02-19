var openMenu = document.getElementById("common");
var num = 0;
var background = document.getElementById("bg");
var app1 = document.getElementById("app1");
document.getElementById("open").addEventListener("click",function()
{
	openMenu.style.left = "0px";
});
document.getElementById("close").addEventListener("click",function()
{
	openMenu.style.left = "-110px";
});
document.getElementById("makeBG").addEventListener("click",function()
{
	background.style.backgroundImage="url(imgs/i6.jpg)";
});
document.getElementById("reset").addEventListener("click",function()
{
	background.style.backgroundImage="none";
});
document.getElementById("show").addEventListener("click",function()
{
	app1.style.display="block";
});
document.getElementById("hide").addEventListener("click",function()
{
	app1.style.display="none";
});
