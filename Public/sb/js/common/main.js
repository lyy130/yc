/**
 * 初始化函数初始化默认加载首页
 */
$(function() {
	var page1 = localStorage.getItem('nowPage');
	if (page1) {
	  $('#content').load(page1);
	} else {
	  $('#content').load('html/homepage.html');
	}
//	$("#content").load("html/search.html");

	$('.suspension-menu').mousemove(function() {
		$(this)
			.find('ul')
			.slideDown('fast');
	});
	$('.suspension-menu').mouseleave(function() {
		$(this)
			.find('ul')
			.slideUp('fast');
	});
	var ints = document.querySelector('.int_2');
	var lis = document.querySelectorAll('.searchList li');

	var intt = document.getElementsByClassName('int_1')[0];
	// 聚焦
	intt.onfocus = ints.onfocus = function() {
		var jj = document.getElementsByTagName('ul')[0];
		jj.style.display = 'block';
	};
	// 失焦
	intt.onblur = ints.onblur = function() {
		var sj = document.getElementsByTagName('ul')[0];
		sj.style.display = 'none';
	};

	$('.nav_01')
		.children('img:first-of-type')
		.on('click', function() {
			$(this)
				.siblings('div')
				.hide();
			$(this).hide();
			$(this)
				.siblings('img')
				.show();
		});

	$('.nav_01')
		.children('img:nth-of-type(2)')
		.on('click', function() {
			$(this)
				.siblings('div')
				.show();
			$(this).hide();
			$(this)
				.siblings('img')
				.show();
		});
});

/**
 * 页面切换
 */
function TogglePages(page, state, oldPage1) {
	localStorage.setItem('nowPage', page);
	$('#content').load(page);
	if(state) {
		$('#content').show();
		$('#footer').show();

		$('#dise').hide();
		$('#caidan_01').show();
		$('#caidan_02').hide();
	}
	if(oldPage1) {
		localStorage.setItem('oldPage1', oldPage1);
	}
}

/**
 * 点击菜单
 */
function menu() {
	$('#content').hide();
	$('#footer').hide();
	$('#nav_main_div').css('height', '550px');
	$('#dise').show();
	$('#caidan_01').hide();
	$('#caidan_02').show();
}

/**
 * 点击关闭
 */
function menu1() {
	$('#content').show();
	$('#footer').show();

	$('#dise').hide();
	$('#caidan_01').show();
	$('#caidan_02').hide();
}

/**
 * 搜索enter事件
 */
function onKeyPress(e, page) {
	var keyCode = null;
	if(e.which)
		keyCode = e.which;
	else if(e.keyCode)
		keyCode = e.keyCode;
	if(keyCode == 13) {
		TogglePages(page)
		return false;
	}
	return true;

}

/**
 * s手机版点搜索图标
 */
function sousuo() {
	$('#top_01').hide();
	$('#top_02').show();

}

/**
 * 取消
 */
function cancle() {
	$('#top_01').show();
	$('#top_02').hide();
}

/**
 * 清除搜索内容
 */
function clearInput() {
	$('#key_word_03').val('');
}