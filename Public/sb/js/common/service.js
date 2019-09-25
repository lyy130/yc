$(function() {
	/**
	 * 控制首页研究动态收缩
	 */
	$('.study_title')
		.children('img:nth-of-type(1)')
		.on('click', function() {
			$(this)
				.parent()
				.siblings('.more')
				.css('display', 'none');
			$(this)
				.parent()
				.siblings('ul')
				.css('display', 'none');
			$(this)
				.css('display', 'none')
				.siblings('img')
				.css('display', 'block');
		});
	$('.study_title')
		.children('img:nth-of-type(2)')
		.on('click', function() {
			$(this)
				.parent()
				.siblings('.more')
				.css('display', 'block');
			$(this)
				.parent()
				.siblings('ul')
				.css('display', 'block');
			$(this)
				.css('display', 'none')
				.siblings('img')
				.css('display', 'block');
		});

	/*跳转研究领域*/
	$('.dongtai')
		.children('li')
		.on('click', function() {
			localStorage.setItem('nowPage', 'html/research-field.html');
			$('#content').load('html/research-field.html');
		});
	/*跳转新闻动态*/
	$('.zuixin')
		.children('li')
		.on('click', function() {
			localStorage.setItem('nowPage', 'html/news-information.html');
			$('#content').load('html/news-information.html');
		});
	/*跳研究团队*/
	$('.tuandui')
		.children('li')
		.on('click', function() {
			localStorage.setItem('nowPage', 'html/research-team.html');
			$('#content').load('html/research-team.html');
		});
	/*跳最新动态*/
	$('.zuixin')
		.children('li')
		.on('click', function() {
			localStorage.setItem('nowPage', 'html/news.html');
			$('#content').load('html/news.html');
		});
	ciyun();
});

/**
 * 词云生成函数
 */
function ciyun() {

	var option = {
		tooltip: {
			show: true,
			formatter: function(item) {
				return item[0] + '';
			}
		},
		list: [
			['NSA', 20],
			['新思路', 20],
			['研究动态', 20],
			['研究报告', 20],
			['新闻动态', 20],
			['关于我们', 20]
		],
		color: '#1E69A2',
		shape: 'circle',
		ellipticity: 1,
		backgroundColor: '#f3f5e9',
		click(item, dimension, event) {
			// 支持点击事件;
			//   this.showTip = false;
			//   if (item.length > 0 && item[1] > 12) {
			//     Toast({
			//       message: item[0] + '：' + item[2] + '人'
			//     });
			//   }
			console.log(item);
			console.log(dimension);
			console.log(event);
			localStorage.setItem('nowPage', 'html/search.html');
			$('#content').load('html/search.html');
		}
	};

	var networkHotWords = document.getElementById('networkHotWords')
	console.log(networkHotWords)
	if(networkHotWords) {
		networkHotWords.innerHTML = '';
		var wc = new Js2WordCloud(networkHotWords);
		wc.showLoading({
			backgroundColor: '#fff',
			text: '网络热词查询中',
			effect: 'spin'
		});
		wc.hideLoading();

		wc.setOption(option);
	}
}

// $(document).ready(function() {});

/**
 * 跳转首页
 */
function shouye() {
	localStorage.setItem('nowPage', 'html/homepage.html');
	$('#content').load('html/homepage.html');
}

/**
 * 跳转研究动态
 */
function field() {
	localStorage.setItem('nowPage', 'html/research-field.html');
	$('#content').load('html/research-field.html');
}

/**
 * 跳转研究动态文章详情页
 */
function gotrends(pageName, oldPageName) {
	localStorage.setItem('nowPage', 'html/research-trends.html');
	//	console.log(123)
	$('#content').load('html/research-trends.html');
	localStorage.setItem('pageName', pageName);
	localStorage.setItem('oldPageName', oldPageName);
	//	{
	//		pageName: pageName
	//	}
}

/**
 * 跳转赛博观点
 */
function saibo() {
	localStorage.setItem('nowPage', 'html/saibo-viewpoint.html');
	$('#content').load('html/saibo-viewpoint.html');
}

/**
 * 跳转研究报告 
 */
function report() {
	localStorage.setItem('nowPage', 'html/research-report.html');
	$('#content').load('html/research-report.html');
}

/**
 * 跳新闻动态
 */
function information() {
	localStorage.setItem('nowPage', 'html/news-information.html');
	$('#content').load('html/news-information.html');
}

/**
 * 关于我们
 */
function aboutUs() {
	localStorage.setItem('nowPage', 'html/about-us.html');
	$('#content').load('html/about-us.html');
}

/**
 * 研究团队
 */
function research() {
	localStorage.setItem('nowPage', 'html/research-team.html');
	$('#content').load('html/research-team.html');
}

/*
 * 研究团队挑个人详情页面
 */
function personalDetail(name1, imgsrc) {
	localStorage.setItem('nowPage', 'html/personal-details.html');
	$('#content').load('html/personal-details.html');
	localStorage.setItem('name1', name1);
	localStorage.setItem('imgsrc', imgsrc);
}

/**
 * 获取url中参数
 */
function getUrlParam(name) {
	/*?videoId=identification  */
	var params = decodeURI(window.location.search); /* 截取？号后面的部分    index.html?act=doctor,截取后的字符串就是?act=doctor  */
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	var r = params.substr(1).match(reg);
	if(r != null) {
		return unescape(r[2]);
	} else {
		return null;
	}
}