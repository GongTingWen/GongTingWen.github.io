
var cat = 0;
var n = 0;
var m = 0;
var catNum = 0;
var catCount = 0;
var turn = "you";
var hintCount = 0;
var hintStd = new Date("2024-8-8");
var hintShow = "no";
var wishList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

pageChange(1);

$("#playBtn").click(function (){
	pageChange(3);
	$("#ruleH").html("共 60 隻<br>一次須取 1 - 8 隻");
	$("#catNumH").text(60);
	$("#turnH").css("background-image", "url('../picture/yourturn.png')");
	$("#catNumH").css("-webkit-text-stroke", "0.5vh #ff3399");
	$("#catCountH").text(0);
	$("#clickmeH").css("display", "flex");
	$("#catCountH").css("display", "flex");
	$("#handH").css("display", "none");
	$("#btnH").css("display", "flex");
	$("#backBtnH").css("display", "flex");
	$("#okBtnH").css("display", "flex");
	$("#hintBox1").css("display", "flex");
	$("#hintBox2").css("display", "none");
	$("#hintBox3").css("display", "none");
	$("#hintBox4").css("display", "none");
	$("#hintBox5").css("display", "none");
	for (var j=0; j<5; j++) {
        (function(j){
		    setTimeout(function () {
				$("#catH").css("background-image", "url('../picture/cat02-1-" + (j + 1) + ".png')");
			}, 100 * j);
		})(j);
	}
});

$("#hintBox1").find("div").eq(1).click(function (){
	$("#hintBox1").css("display", "none");
	$("#hintBox2").css("display", "flex");
	$("#hintBox3").css("display", "none");
	$("#hintBox4").css("display", "none");
	$("#hintBox5").css("display", "none");
	$("#catH").click(function (){
		if (hintCount == 0) {
			for (var k=0; k<11; k++) {
				(function(k){
					setTimeout(function () {
						$("#catH").css("background-image", "url('../picture/cat02-2-" + (k + 1) + ".png')");
					}, 100 * k);
				})(k);
			}
			for (var j=0; j<5; j++) {
				(function(j){
					setTimeout(function () {
						$("#catH").css("background-image", "url('../picture/cat03-1-" + (j + 1) + ".png')");
					}, 100 * (j + 11));
				})(j);
			}
			$("#catCountH").text(1);
			$("#catNumH").text(59);
			hintCount = 1;
		}
	});
});

$("#hintBox2").find("div").eq(1).click(function (){
	if (hintCount == 1) {
		$("#hintBox1").css("display", "none");
		$("#hintBox2").css("display", "none");
		$("#hintBox3").css("display", "flex");
		$("#hintBox4").css("display", "none");
		$("#hintBox5").css("display", "none");
		$("#backBtnH").click(function (){
			if (hintCount == 1) {
				$("#catCountH").text(0);
				$("#catNumH").text(60);
				hintCount = 2;
			}
		});
	}
});

$("#hintBox3").find("div").eq(1).click(function (){
	if (hintCount == 2) {
		$("#hintBox1").css("display", "none");
		$("#hintBox2").css("display", "none");
		$("#hintBox3").css("display", "none");
		$("#hintBox4").css("display", "flex");
		$("#hintBox5").css("display", "none");
		$("#catH").click(function (){
			if (hintCount == 2) {
				for (var k=0; k<11; k++) {
					(function(k){
						setTimeout(function () {
							$("#catH").css("background-image", "url('../picture/cat03-2-" + (k + 1) + ".png')");
						}, 100 * k);
					})(k);
				}
				for (var j=0; j<5; j++) {
					(function(j){
						setTimeout(function () {
							$("#catH").css("background-image", "url('../picture/cat04-1-" + (j + 1) + ".png')");
						}, 100 * (j + 11));
					})(j);
				}
				$("#catCountH").text(1);
				$("#catNumH").text(59);
				hintCount = 3;
			}
		});
	}
});

$("#hintBox4").find("div").eq(1).click(function (){
	if (hintCount == 3) {
		$("#hintBox1").css("display", "none");
		$("#hintBox2").css("display", "none");
		$("#hintBox3").css("display", "none");
		$("#hintBox4").css("display", "none");
		$("#hintBox5").css("display", "flex");
		$("#okBtnH").click(function (){
			if (hintCount == 3) {
				$("#btnH").css("display", "none");
				$("#turnH").css("background-image", "url('../picture/computerturn.png')");
				$("#catNumH").css("-webkit-text-stroke", "0.5vh #1a923b");
				$("#catCountH").text(0);
				$("#handH").css("display", "flex");
				$("#handH").css("top", "47vh");
				hintCount = 4;
			}
		});
	}
});

$("#hintBox5").find("div").eq(1).click(function (){
	if (hintCount == 4) {
		pageChange(2);
		createRule();
		$("#turn").css("background-image", "url('../picture/yourturn.png')");
		$("#catNum").css("-webkit-text-stroke", "0.5vh #ff3399");
		$("#catCount").text(0);
		$("#clickme").css("display", "flex");
		$("#catCount").css("display", "flex");
		$("#hand").css("display", "none");
		$("#btn").css("display", "flex");
		$("#backBtn").css("display", "flex");
		$("#okBtn").css("display", "flex");
		$("#againBtn").css("display", "none");
		$("#secretBtn").css("display", "none");
		$("#secret").css("display", "none");
		showCat();
	}
});

$("#againBtn").click(function (){
	cat = 0;
	n = 0;
	m = 0;
	catNum = 0;
	catCount = 0;
	turn = "you";
	pageChange(2);
	createRule();
	$("#turn").css("background-image", "url('../picture/yourturn.png')");
	$("#catNum").css("-webkit-text-stroke", "0.5vh #ff3399");
	$("#catCount").text(0);
	$("#clickme").css("display", "flex");
	$("#catCount").css("display", "flex");
	$("#hand").css("display", "none");
	$("#btn").css("display", "flex");
	$("#backBtn").css("display", "flex");
	$("#okBtn").css("display", "flex");
	$("#againBtn").css("display", "none");
	$("#secretBtn").css("display", "none");
	$("#secret").css("display", "none");
	showCat();
});

$("#cat").click(function (){
	if (turn == "you" && catCount != m && catNum != 0) {
		catCount += 1;
		catNum -= 1;
		jumpCat();
		$("#catCount").text(catCount);
		$("#catNum").text(catNum);
	}
});

$("#backBtn").click(function (){
	if (turn == "you" && catCount != 0) {
		catCount -= 1;
		catNum += 1;
		$("#catCount").text(catCount);
		$("#catNum").text(catNum);
	}
});

$("#okBtn").click(function (){
	if (turn == "you" && catCount != 0) {
		turn = "computer";
		$("#turn").css("background-image", "url('../picture/computerturn.png')");
		$("#catNum").css("-webkit-text-stroke", "0.5vh #1a923b");
		$("#hand").css("display", "flex");
		$("#btn").css("display", "none");
		catCount = 0;
		$("#catCount").text(0);
		if (catNum == 0) {
			wish();
		} else {
			computer();
		}
	}
});

$("#secretBtn").click(function (){
	$("#secret").css("display", "flex");
	if (hintShow == "yes") {
		$("#s1").css("display", "flex");
		$("#s2").css("display", "flex");
		$("#s3").css("display", "flex");
		$("#s4").css("display", "flex");
		$("#s5").css("display", "flex");
		$("#s6").css("display", "none");
	} else {
		$("#s1").css("display", "none");
		$("#s2").css("display", "none");
		$("#s3").css("display", "none");
		$("#s4").css("display", "none");
		$("#s5").css("display", "none");
		$("#s6").css("display", "flex");
	}
});

$("#close").click(function (){
	$("#secret").css("display", "none");
});

function pageChange(n) {
	for (var i=1; i<4; i++) {
		$("#page" + i).css("display", "none");
	}
	$("#page" + n).css("display", "flex");
}

function showCat() {
	cat = Math.floor((Math.random() * 4) + 1);
	for (var j=0; j<5; j++) {
        (function(j){
		    setTimeout(function () {
				$("#cat").css("background-image", "url('../picture/cat0" + cat + "-1-" + (j + 1) + ".png')");
			}, 100 * j);
		})(j);
	}
}

function jumpCat() {
	for (var k=0; k<11; k++) {
        (function(k){
		    setTimeout(function () {
				$("#cat").css("background-image", "url('../picture/cat0" + cat + "-2-" + (k + 1) + ".png')");
				if (k == 10) {
					cat = Math.floor((Math.random() * 4) + 1);
				}
			}, 100 * k);
		})(k);
	}
	if (catNum != 0) {
		for (var j=0; j<5; j++) {
			(function(j){
				setTimeout(function () {
					$("#cat").css("background-image", "url('../picture/cat0" + cat + "-1-" + (j + 1) + ".png')");
				}, 100 * (j + 11));
			})(j);
		}
	} else {
		setTimeout(function () {
			wish();
		}, 1100);
	}
}

function createRule() {
	while (n % (m + 1) == 0) {
		n = Math.floor((Math.random() * 41) + 1) + 19;
		catNum = n;
		m = Math.floor((Math.random() * 6) + 1) + 2;
	}
	$("#rule").html("共 " + n + " 隻<br>一次須取 1 - " + m + " 隻");
	$("#catNum").text(catNum);
}

function computer() {
	var x = catNum % (m + 1);
	if (x == 0) {
		x = Math.floor((Math.random() * m) + 1);
	}
	for (var k=0; k<x; k++) {
        (function(k){
		    setTimeout(function () {
				for (var l=0; l<2; l++) {
					(function(l){
						setTimeout(function () {
							$("#hand").css("top", (45 + (2 - l)*2) + "vh");
							$("#hand").css("background-image", "url('../picture/hand-" + (2 - l) + ".png')");
						}, 100 * l);
					})(l);
				}
				catNum -= 1;
				catCount += 1;
				$("#catCount").text(catCount);
				$("#catNum").text(catNum);
				for (var o=0; o<11; o++) {
					(function(o){
						setTimeout(function () {
							$("#cat").css("background-image", "url('../picture/cat0" + cat + "-2-" + (o + 1) + ".png')");
							if (o == 10) {
								cat = Math.floor((Math.random() * 4) + 1);
							}
						}, 100 * (o + 2));
					})(o);
				}
				if (catNum != 0) {
					for (var p=0; p<5; p++) {
						(function(p){
							setTimeout(function () {
								$("#cat").css("background-image", "url('../picture/cat0" + cat + "-1-" + (p + 1) + ".png')");
							}, 100 * (p + 13));
						})(p);
					}
				}
				setTimeout(function () {
					if (k == (x - 1)) {
						if (catNum != 0) {
							catCount = 0;
							$("#catCount").text(0);
							$("#hand").css("display", "none");
							$("#btn").css("display", "flex");
							$("#backBtn").css("display", "flex");
							$("#okBtn").css("display", "flex");
							$("#againBtn").css("display", "none");
							$("#secretBtn").css("display", "none");
							$("#turn").css("background-image", "url('../picture/yourturn.png')");
							$("#catNum").css("-webkit-text-stroke", "0.5vh #ff3399");
							turn = "you";
						} else {
							lose();
						}
					}
				}, 1800);
			}, 1800 * k);
		})(k);
	}
}

function wish() {
	$("#backBtn").css("display", "none");
	$("#okBtn").css("display", "none");
	$("#againBtn").css("display", "flex");
	$("#secretBtn").css("display", "flex");
	$("#catCount").css("display", "none");
	$("#clickme").css("display", "none");
	var time = new Date();
	if (time < hintStd) {
		$("#lock").css("display", "flex");
	} else {
		hintShow = "yes";
		$("#lock").css("display", "none");
	}
	var x = Math.floor((Math.random() * wishList.length) + 1) - 1;
	for (var j=0; j<12; j++) {
		(function(j){
			setTimeout(function () {
				$("#cat").css("background-image", "url('../picture/wish0" + wishList[x] + "-" + (j + 1) + ".png')");
				if (j == 11) {
					wishList.splice(x, 1);
					if (wishList.length == 0) {
						wishList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
					}
				}
			}, 100 * j);
		})(j);
	}
}

function lose() {
	$("#btn").css("display", "flex");
	$("#backBtn").css("display", "none");
	$("#okBtn").css("display", "none");
	$("#againBtn").css("display", "flex");
	$("#secretBtn").css("display", "flex");
	$("#catCount").css("display", "none");
	$("#clickme").css("display", "none");
	$("#hand").css("display", "none");
	var time = new Date();
	if (time < hintStd) {
		$("#lock").css("display", "flex");
	} else {
		hintShow = "yes";
		$("#lock").css("display", "none");
	}
	for (var j=0; j<12; j++) {
		(function(j){
			setTimeout(function () {
				$("#cat").css("background-image", "url('../picture/lose-" + (j + 1) + ".png')");
			}, 100 * j);
		})(j);
	}
}