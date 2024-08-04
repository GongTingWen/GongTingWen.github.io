var btn1 = document.getElementById("submit1");
btn1.addEventListener("click", send1);

var btn2 = document.getElementById("submit2");
btn2.addEventListener("click", send2);

var btn3 = document.getElementById("submit3");
btn3.addEventListener("click", send3);

$.ajax({
	type: "get",
	url: "https://script.google.com/macros/s/AKfycbyrSNDHTaeE1WmPTN2cHXgcuJQ_rkbeMqpm0aQDjP4IR5A3Bl1X7mKyQSkq_nZJRUfobA/exec",
	data: {
		"state": 0,
	},
	dataType: "JSON",
	success: function(response) {
		$("#bP").text(response.bPrice);
		$("#sP").text(response.sPrice);
		if (response.mTrade == 0) {
			$("#mode").val("");
			$("#strike").val("");
			$("#mode").attr("readonly", false);
			$("#strike").attr("readonly", false);
			$("#submit1").css("display", "block");
			$("#submit2").css("display", "none");
		} else {
			if (response.mTrade == "Buy") {
				$("#mode").val("Sell");
				$("#strike").val(Number(response.sTrade) + 50);
			} else {
				$("#mode").val("Buy");
				$("#strike").val(Number(response.sTrade) - 50);
			}
			$("#mode").attr("readonly", true);
			$("#strike").attr("readonly", true);
			$("#submit1").css("display", "none");
			$("#submit2").css("display", "block");
		}
	},
});

function send1 () {
	var mode = document.getElementById("mode").value;
	var strike = document.getElementById("strike").value;
	if ((mode == "Buy" || mode == "Sell") && strike != "") {
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbyrSNDHTaeE1WmPTN2cHXgcuJQ_rkbeMqpm0aQDjP4IR5A3Bl1X7mKyQSkq_nZJRUfobA/exec",
			data: {
				"state": 1,
				"mode": mode, /* 屬性名稱需與 Google Sheet 相同 */
				"strike": strike, /* 屬性名稱需與 Google Sheet 相同 */
			},
			dataType: "JSON",
			success: function(response) {
				if (mode == "Buy") {
					$("#mode").val("Sell");
					$("#strike").val(Number(strike) + 50);
				} else {
					$("#mode").val("Buy");
					$("#strike").val(Number(strike) - 50);
				}
				$("#mode").attr("readonly", true);
				$("#strike").attr("readonly", true);
				$("#submit1").css("display", "none");
				$("#submit2").css("display", "block");
			},
		});
	}
}

function send2 () {
	$.ajax({
		type: "get",
		url: "https://script.google.com/macros/s/AKfycbyrSNDHTaeE1WmPTN2cHXgcuJQ_rkbeMqpm0aQDjP4IR5A3Bl1X7mKyQSkq_nZJRUfobA/exec",
		data: {
			"state": 2,
		},
		dataType: "JSON",
		success: function(response) {
			$("#mode").val("");
			$("#strike").val("");
			$("#mode").attr("readonly", false);
			$("#strike").attr("readonly", false);
			$("#submit1").css("display", "block");
			$("#submit2").css("display", "none");
		},
	});
}

function send3 () {
	var date = document.getElementById("date").value;
	var price = document.getElementById("price").value;
	if (date != "" && price != "") {
		$.ajax({
			type: "get",
			url: "https://script.google.com/macros/s/AKfycbyrSNDHTaeE1WmPTN2cHXgcuJQ_rkbeMqpm0aQDjP4IR5A3Bl1X7mKyQSkq_nZJRUfobA/exec",
			data: {
				"state": 3,
				"date": date, /* 屬性名稱需與 Google Sheet 相同 */
				"price": price, /* 屬性名稱需與 Google Sheet 相同 */
			},
			dataType: "JSON",
			success: function(response) {
				$("#bP").text(response.bPrice);
				$("#sP").text(response.sPrice);
				$("#date").val("");
				$("#price").val("");
			},
		});
	}
}