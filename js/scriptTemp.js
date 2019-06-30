
// jQuerry to hide collapsible menu on xs when onblur 
// (Boostrap construction of collapsible menu requires jQuerry)
// nie chce działac z dropdown w navbarze i szukaniem

// $(function (){ //czeka na załadowanie DOM bez obrazków itd.
// 	$("#navbarToggle").blur(function (event) {
// 		var screenWidth = window.innerWidth;
// 		if (screenWidth<577){
// 			$("#collapsibleNavbar").collapse('hide');
// 		}
// 	});
// });
//*******end of jQuerry*********

// wstawiacz fragmentów do wyświetlenia na stronach html
// insertHtml(selector, [strona lub kod html])
var insertHtml = function(selector, html){
	document.querySelector(selector).innerHTML=html;
};


//spinner - znacznik ładowania strony itp.
//wymaga ikonki, np. ze strony ajaxload.info jak poniżej
var showLoading = function (selector){
	var html = "div ..[niezaładowna rzecz]..";
	html += "<img src='images/ajax-loader.gif'></div>";
	insertHtlm(selector, html);
};
//potem oczywiście trzeba wywołać showLoading gdy potrzeba


    document.querySelector("#button1")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = 
                res.firstName + " " + res.lastName
              if (res.likesChineseFood) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and uses ";
              message += res.numberOfDisplays + 1;
              message += " displays for coding.";

              document.querySelector("#buttonContent")
                .innerHTML = "<p>" + message + "</p>"; 
            });
      });



//to działa:
//insertHtml("#insertFooter", '<footer id="insertFooter">blablablaScript</footer>');

$ajaxUtils.sendGetRequest ("./snippets/footer.html",
			function (responseText) {
				document.querySelector("#insertFooterPage2").innerHTML = responseText;
			},
			false);

$ajaxUtils.sendGetRequest ("./snippets/footerTemp.html",
			function (responseText) {
				document.querySelector("#insertFooter").innerHTML = responseText;
			},
			false);





(function (global) {

var sample = {};

var footer = "snippets/footer.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Builds HTML for the footer based on the data
// from the server
  $ajaxUtils.sendGetRequest(
    footer,
    insertHtml("#insertFooter", footer),
    false);
}

global.$sample = sample;

})(window);













    document.querySelector("#button2")
      .addEventListener("click", function () {
        
        // Call server to get the text
        $ajaxUtils
          .sendGetRequest("data/Tekst.txt", 
            function (request) {
              var txt = request.responseText;
               document.querySelector("#button2Content")
                .innerHTML = "<p>" + txt + "</p>"; 
            });
			false;
      });











//jw ujęte w IIFE:
//(function (global) {
//
//	var sample = {};
//
//	sample.changeFooterPage1 = function() {
//		$ajaxUtils.sendGetRequest ("./snippets/footerTemp.html",
//			function (responseText) {
//				document.querySelector("#insertFooter").innerHTML = responseText;
//			},
//			false);
//	};
	
//	global.$sample = sample;
//})(window);









// function search() {
 
//    var word = document.getElementById("searchForm").elements["input"].value;
//    var pattern = word.toLowerCase();
//    var targetId = "";
 
//    var pArray = document.getElementsByTagName("p");
//    for (var i = 0; i < parag.length; i++) {
//       var para = pArray[i];
//       var index = para.innerText.toLowerCase().indexOf(pattern);
//       if (index != -1) {
//          targetId = pArray[i].parentNode.id;
//          document.getElementById(targetId).scrollIntoView();
//          break;
//       }
//    }  
// }


