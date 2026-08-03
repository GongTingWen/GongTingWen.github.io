$(document).ready(function () {
	var q = 1;
	const ans = ["舐犢情深", "曾子殺彘", "三頭六臂", "趨庭之教", "恩重如山"];
	const explanation = ["【解釋】比喻父母疼愛子女之深情。", 
						 "【解釋】比喻人講求信用。", 
						 "【解釋】比喻人本領大，力強可畏。", 
						 "【解釋】父親對子女的教誨。", 
						 "【解釋】形容恩德極重。"];
	const origin = ["【出處】《兒女英雄傳》第三〇回：「安老夫妻暮年守著個獨子，未免舐犢情深，加了幾分憐愛。」", 
					"【出處】《韓非子．外儲說左上》：「曾子之妻之市，其子隨之而泣，其母曰：『女還，顧反為女殺彘。』妻適市來，曾子欲捕彘殺之，妻止之曰：『特與嬰兒戲耳。』曾子曰：『嬰兒非與戲也。嬰兒非有知也，待父母而學者也，聽父母之教，今子欺之，是教子欺也。母欺子，子而不信其母，非所以成教也。』遂烹彘也。」", 
					"【出處】《法苑珠林．卷五．六道篇．脩羅部．述意部》：「（阿修羅）並出三頭重安八臂。跨山蹋海把日擎雲。」", 
					"【出處】《論語．季氏》：「鯉趨而過庭。曰：『學《詩》乎？』對曰：『未也。』『不學《詩》，無以言。』鯉退而學詩。他日又獨立，鯉趨而過庭。曰：『學禮乎？』對曰：『未也。』『不學禮，無以立。』鯉退而學禮。」", 
					"【出處】《西遊記》第六九回：「神僧恩重如山，寡人酬謝不盡。」"];
	const example = ["【例句】無論颳風下雨抑或艷陽高照，父親都不辭辛勞地開車載我們上下學，足見<span class='special_text'>舐犢情深</span>。", 
					 "【例句】父親凡事說到做到，以身教讓我們明白「人無信不立」的道理，有<span class='special_text'>曾子殺彘</span>之風範。", 
					 "【例句】在我們心目中，父親彷彿擁有<span class='special_text'>三頭六臂</span>，拼事業、修理家電和逗孩子開心都能一手包辦。", 
					 "【例句】二十多年來接受父親<span class='special_text'>趨庭之教</span>，如沐春風，讓我們的言行舉止和幽默感在潛移默化中有所進益。", 
					 "【例句】父親<span class='special_text'>恩重如山</span>，我們會學著早日獨當一面，回饋這份恩情。"];
	
	$("#start_btn").click(function () {
		$("#question_img").css("backgroundImage", "url('question"+q+".png')");
		showPage(2);
	});
	
	function showPage(pageNumber) {
		$(".container").css("display", "none");
		var a = "#page" + pageNumber;
		$(a).css("display", "flex");
	}
	
	$("#input_frame1, #input_frame2, #input_frame3, #input_frame4").focus(function () {
		$("#input_ctn").css("display", "flex");
		$("#input_frame").css("top", "20.64535vh");
	});
	
	$("#confirm_btn").click(function () {
		$("#input_ctn").css("display", "none");
		$("#input_frame").css("top", "77.14535vh");
	});
	
	$("#submit_btn").click(function () {
		var ans_player = $("#input_frame1").val() + $("#input_frame2").val() + $("#input_frame3").val() + $("#input_frame4").val();
		if (ans_player == ans[q-1]) {
			$("#right_img").css("backgroundImage", "url('right.png')");
			$("#right_sound")[0].play();
		} else {
			$("#right_img").css("backgroundImage", "url('wrong.png')");
			$("#wrong_sound")[0].play();
		}
		var flash_count = 0;
		var flash = setInterval(function () {
			flash_count++;
			$("#right_img").fadeIn(200).fadeOut(200);
			if (flash_count > 3) {
				if (ans_player == ans[q-1]) {
					if (q == 5) {
						$("#next_btn").css("display", "none");
						$("#end_text").css("display", "block");
					}					
					$("#idiom_text").text(ans[q-1]);
					$("#explanation_text").text(explanation[q-1]);
					$("#origin_text").text(origin[q-1]);
					$("#example_text").html(example[q-1]);
					showPage(3);
					q = q + 1;
				}
				clearInterval(flash);
			}
		}, 400);
	});
	
	$("#next_btn").click(function () {
		$("#question_img").css("backgroundImage", "url('question"+q+".png')");
		$("#input_frame1, #input_frame2, #input_frame3, #input_frame4").val("");
		showPage(2);
	});
	
	showPage(1);
});