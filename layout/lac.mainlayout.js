/**
 * Author: Dee
 * Date: 2015/01/17
 * Independence: lac.base 
 *  
 * Description:
 * The mainlayout structure is defined with navbar at top, mainview, and a footer at bottom
 * 						
 */

// Create mainapp class ...
window.console.log("Create the LAC mainapp ... ");

(function($,L)
{	
	L.LAYOUT.MainLayout = function(uuid)
	{
		// constructor ... 
		window.console.log("LAC.LAYOUT.MainLayout __constuct(mainlayout:"+mainlayout+") ... ");
		
		L.LAYOUT.Abstract.call(this,uuid); 
		return this;
	};
	
	L.LAYOUT.MainLayout.prototype = $.extend(new L.LAYOUT.Abstract(),
	{
		create : function(parent)
		{
			// setup the layout here ... 
			window.console.log("LAC.LAYOUT.MainLayout create(parent:"+parent+") ... ");
			
			this.components["navbar"] = this.createnavbar();
			this.components["mainview"] = this.createmainview();
			this.components["footer"] = this.createfooter();
			
			parent.append(this.components["navbar"])
				  .append(this.components["mainview"])
				  .append(this.components["footer"]);
				  
			return this;
		},
		createnavbar : function()
		{
			// setup the navbar here ... 
			window.console.log("LAC.LAYOUT.MainLayout createnavbar() ... ");
			
			return $("<navbar><navbar>");
		},
		createmainview : function()
		{
			// setup the mainview here ... 
			window.console.log("LAC.LAYOUT.MainLayout createmainview() ... ");
			
			return $("<div></div>");
		},
		createfooter : function()
		{
			// setup the footer here ... 
			window.console.log("LAC.LAYOUT.MainLayout createfooter() ... ");
			
			return $("<footer></footer>");
		},
		toString : function()
		{
			return "MainLayout: "+this.uuid;
		}
	});
	
})(jQuery,jQuery.LAC);