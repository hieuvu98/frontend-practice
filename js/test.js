document.addEventListener("DOMContentLoaded",function(){

	//================================SLIDE TESTIMONIAL================================
	var testimonial_slide_prev = document.querySelector(".testimonial .testimonial-footer .testimonial-slide .slick .slick-prev");
	var testimonial_slide_next = document.querySelector(".testimonial .testimonial-footer .testimonial-slide .slick .slick-next");
	var testimonial_slide = document.querySelector('.slide-logo');
	var items_slide = document.querySelectorAll('.slide-logo .logo');
	// click
	testimonial_slide_next.addEventListener('click', function(){
		testimonial_slide.classList.remove('truotsangtrai');
		testimonial_slide.classList.remove('truotsangphai');
		testimonial_slide.classList.add('truotsangphai');
	})
	testimonial_slide_prev.addEventListener('click', function(){
		testimonial_slide.classList.remove('truotsangtrai');
		testimonial_slide.classList.remove('truotsangphai');
		testimonial_slide.classList.add('truotsangtrai');
	})

//================================== HEADER ===========================
	// Anchor link
	// home
	const trigger_wrap = document.querySelector('#anchor-home');
	const target_wrap = document.querySelector('#wrap')

	const scrollToWrap = (e) => {
		e.preventDefault()
		target_wrap.scrollIntoView({ behavior: 'smooth' })
	}
	trigger_wrap.addEventListener('click', scrollToWrap);
	// course
	const trigger_course = document.querySelector('#anchor-course');
	const target_course = document.querySelector('#course')

	const scrollToCourse = (e) => {
		e.preventDefault()
		target_course.scrollIntoView({ behavior: 'smooth' })
	}
	trigger_course.addEventListener('click', scrollToCourse);
	// blog
	const trigger_blog = document.querySelector('#anchor-blog');
	const target_blog = document.querySelector('#blog')

	const scrollToBlog = (e) => {
		e.preventDefault()
		target_blog.scrollIntoView({ behavior: 'smooth'})
	}
	trigger_blog.addEventListener('click', scrollToBlog);

	//==============================SLIDE BLOG=================================
	var our_blog_slick = document.querySelectorAll(".our-blog .box-footer ul li");
	var slides = document.querySelector('.our-blog .box-body-slide ul');
	// event click
	for(var i = 0; i < our_blog_slick.length; i++){
		our_blog_slick[i].addEventListener('click', function(){
			// remove class active
			for(var j = 0; j < our_blog_slick.length; j++){
				our_blog_slick[j].classList.remove('list-active');
			}
			this.classList.add('list-active');
			var phantuhientai = document.querySelector('.our-blog .box-footer ul li.list-active');
			for(var index = 0; phantuhientai = phantuhientai.previousElementSibling; index++){}
				for(var i = 0; i < our_blog_slick.length; i++){
					slides.classList.remove('so'+i);
				}
				slides.classList.add('so'+index);
			})
	}
	//===============================lOAD================================
	var menu_header_active ="down";
	var menu_header = document.querySelector(".header");
	var items_load = document.querySelectorAll('.item-animation');
	var trangthai = new Array();
	var vitri = new Array();
	window.addEventListener('scroll', function(){
		// menu header
		if(window.pageYOffset >= 90){
			if(menu_header_active == "down"){
				menu_header_active = "up";
				menu_header.classList.add("menu-header-fixed");
			}
		}else{
			if(menu_header_active == "up"){
				menu_header_active = "down";
				menu_header.classList.remove("menu-header-fixed");
			}
		}
		// load all content
		for(var i = 0; i < items_load.length; i++){
			vitri[i] = items_load[i].offsetTop - 550;
			trangthai[i] = "down";
		}
		for(var i = 0; i < items_load.length; i++){
			if(window.pageYOffset > vitri[i]){
				if(trangthai[i] == "down"){
					trangthai[i] == "up";
					items_load[i].classList.add('dilen');
				}
			}
		}
	})

	// play video
	var vid_status = "stop";
	var vid_play = document.getElementById("myVideo");
	var vid_control = document.getElementById("controlVideo");
	vid_play.onclick = function(){
		if(vid_status == "stop"){
			vid_play.play();
			vid_control.classList.remove('fa-play-circle-o');
			vid_status = "play";
		}else{
			vid_play.pause();
			vid_control.classList.add('fa-play-circle-o');
			vid_status = "stop";
		}
	}
	// sidebar-left click push
	var sidebar_left_status = 1;
	var sidebar_left_close = document.querySelector('nav.sidebar-right .sidebar-right-close');
	var wrap_push = document.querySelector(".wrap-push");
	var sidebar_left_button = document.querySelector(".header .header-nav .toggle-menu");
	var sidebar_left = document.querySelector("nav.sidebar-right");
	sidebar_left_close.addEventListener('click', function(){
		sidebar_left.classList.remove('sidebar-left-push');
		wrap_push.classList.remove('wrap_push_left');
		sidebar_left_status = 1;
	});
	sidebar_left_button.addEventListener('click', function(){
		if(sidebar_left_status === 1){
			sidebar_left.classList.add('sidebar-left-push');
			wrap_push.classList.add('wrap_push_left');
			sidebar_left_status = 0;
		}
		else{
			sidebar_left.classList.remove('sidebar-left-push');
			wrap_push.classList.remove('wrap_push_left');
			sidebar_left_status = 1;
		}
	});

}, false)