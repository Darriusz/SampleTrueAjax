
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

//to działa:
//insertHtml("#insertFooter", '<footer id="insertFooter">blablablaScript</footer>');


//spinner - znacznik ładowania strony itp.
//wymaga ikonki, np. ze strony ajaxload.info jak poniżej
//var showLoading = function (selector){
//	var html = "div ..[niezaładowna rzecz]..";
//	html += "<img src='images/ajax-loader.gif'></div>";
//	insertHtlm(selector, html);
//};
//potem oczywiście trzeba wywołać showLoading gdy potrzeba


  
        $ajaxUtils
          .sendGetRequest("snippets/footer.html", 
            function (request) {
              var footer = request.responseText;

              document.querySelector(".insertFooter")
                .innerHTML = footer;
            },
		false);


//******Collapsible Panel 1 Page 3 *********

  //       $ajaxUtils
  //         .sendGetRequest("data/name.json", 
  //           function (res) {
  //             var message = 
  //               "Our client named " + res.firstName + " " + res.lastName;
  //             if (res.likesXY) {
  //               message += " likes XY";
  //             }
  //             else {
  //               message += " doesn't like XY";
  //             }
  //             message += " and has made ";
  //             message += res.numberOfPurchases + 0;
  //             message += " purchases.";

  //             document.querySelector("#collapsiblePanel1Text")
  //               .innerHTML = message; 
	 //            },
		// true);	


//******Collapsible Panel 1a Page 3 *********

        $ajaxUtils
          .sendGetRequest("data/stats.json", 
            function(res){
              var finalMessage = "<ul>";
              for (var i = 0; i < res.length; i++){ 
                var message = 
                   "<li>Our <em>" + res[i].gender + "</em> clients from <strong>" + res[i].country +"</strong>";
                if (res[i].likesXY) {
                    message += " like xxx";
                }
                else {
                    message += " don't like xxx";
                }
                message += " and have made <u>";
                message += res[i].numberOfPurchases + 0;
                message += "</u> purchases.</li>";
                finalMessage += message; 
              }  
            document.querySelector("#collapsiblePanel1Text")
               .innerHTML = finalMessage + "</ul>";
            }, 
            true);


//******Collapsible Panel 2 Page 3 *********
        $ajaxUtils
          .sendGetRequest("data/Tekst.txt", 
            function (request) {
              var txt = request.responseText;
              document.querySelector("#collapsiblePanel2Text")
                .innerHTML = txt;
            },
		false);

		

//************* hide/show element function ***************
function hideShow(item) {
  var x = document.getElementById(item);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
		
//***********button1  *************
    document.querySelector("#button1")
      .addEventListener("click", function () {

          $ajaxUtils
          .sendGetRequest("data/stats.json", 
            function(res){
              var finalMessage = "";
              for (var i = 0; i < res.length; i++){ 
                var message = 
                   "Our <em>" + res[i].gender + "</em> clients from <strong>" + res[i].country +"</strong>";
                if (res[i].likesXY) {
                    message += " like xxx";
                }
                else {
                    message += " don't like xxx";
                }
                message += " and have made <u>";
                message += res[i].numberOfPurchases + 0;
                message += "</u> purchases.";
                finalMessage += message + "<br>"; 
              }  
            document.querySelector("#button1Content")
               .innerHTML = finalMessage;
            }, 
            true);      

	  var x = document.getElementById("button1Content");
	  var y = document.getElementById("button1");	  
		if (x.style.display === "block") {
			x.style.display = "none";
            y.innerHTML = 'JSON data';			
		} else {
			x.style.display = "block";
            y.innerHTML = 'Close';
		}
//		hideShow("button1Content"); /tu zamiast samej funkcji hideShow wstawiona także zmiana napisu na przycisku
		
       $ajaxUtils
          .sendGetRequest("data/statsHeading.txt", 
            function (request) {
              var heading = request.responseText;
              document.querySelector("#button1PanelHeading")
                .innerHTML = '<h4>'+heading+'</h4>';
            },
		false);
		hideShow("button1PanelHeading");			
      });



//***********button2  *************
    document.querySelector("#button2")
      .addEventListener("click", function () {
        
        $ajaxUtils
          .sendGetRequest("data/Tekst.txt", 
            function (request) {
              var txt = request.responseText;
              document.querySelector("#button2Content")
                .innerHTML = txt + '<hr>';
            },
		false);
		
	  var x = document.getElementById("button2Content");
	  var y = document.getElementById("button2");	  
		if (x.style.display === "block") {
			x.style.display = "none";
            y.innerHTML =  'TXT file';			
		} else {
			x.style.display = "block";
            y.innerHTML = 'Close';
		}			
//		hideShow("button2Content"); /tu zamiast samej funkcji hideShow wstawiona także zmiana napisu na przycisku
		
        $ajaxUtils
          .sendGetRequest("data/TekstHeading.txt", 
            function (request) {
              var heading = request.responseText;
console.log(heading);
              document.querySelector("#button2PanelHeading")
                .innerHTML = '<h4>'+heading+'</h4>';
            },
		false);

		hideShow("button2PanelHeading");
	});


//***********button3  *************
    document.querySelector("#button3")
      .addEventListener("click", function () {
        
       document.querySelector("#button3Content")
                .innerHTML ='<audio controls><source src="audio/horse.ogv" type="audio/ogg"></audio>';
		hideShow("button3Content");
		
        document.querySelector("#button3PanelHeading")
                .innerHTML = '<h5>Please, feel free to run the provided recording</h5>';

	  var x = document.getElementById("button3PanelHeading");
	  var y = document.getElementById("button3");	  
		if (x.style.display === "block") {
			x.style.display = "none";
            y.innerHTML = 'audio file';			
		} else {
			x.style.display = "block";
            y.innerHTML = 'Close';
		}
//		hideShow("button3PanelHeading");
	});






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


