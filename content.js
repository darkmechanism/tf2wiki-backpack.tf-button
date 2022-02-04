Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling);
  },false;

var buttonsuperior = document.getElementsByClassName("btn_buynow_market")[0].parentElement.parentElement.parentElement.parentElement;

var htmlcode = '<td colspan="2" class="infobox-data" style="text-align:center"><div class="plainlinks btn_wrapper" style="width:100%"><a rel="nofollow" class="external text" href="https://backpack.tf/stats/Unique/$ITEM_NAME/Tradable/Craftable" target="_blank"><span class="btn_buynow_backpack">View in backpack.tf<span></span></span></a></div>\n</td>';

var itemname = window.location.href.split("wiki.teamfortress.com/wiki/")[1].split("/")[0].replace(/ /g, "%20");

var newelement = document.createElement("tr");

newelement.innerHTML = htmlcode.replace("$ITEM_NAME", itemname);

newelement.appendAfter(buttonsuperior);
