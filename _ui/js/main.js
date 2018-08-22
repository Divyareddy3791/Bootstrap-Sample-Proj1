$(document).ready(function(e) {
    /*$('.searchCont').click(function(){
		$('.contactHoverBlock').slideUp();	
		$('.searchHoverBlock').slideToggle();	
	});
	$('.contactAddress').click(function(){
		$('.searchHoverBlock').slideUp();	
		$('.contactHoverBlock').slideToggle();	
	});*/
	

$('.search').click(function(){
		$(this).toggleClass('active');
		$('.searchBar').toggle();
		$('.partnerForm').hide();	
	});
	
	$('.lock').click(function(){
		$(this).toggleClass('active');
		$('.partnerForm').toggle();	
		$('.searchBar').hide();
	});
	
	//$('#language').click(function(){
//		$(this).toggleClass('active');
//		$('.languages-list').toggle();	
//		$('.searchBar').hide();
//		$('.partnerForm').hide();
//	});
	
	$('.dropdown').on('click',function(){
		if (!$('.headerContent .dropdown').hasClass('open')){
			$('.headerRight').parent().addClass('blackbg');
		}
		else{
			$('.headerRight').parent().removeClass('blackbg');
		}
	});
	$(document).on('click',function(){
		if ($('.headerContent .dropdown').hasClass('open')){
			$('.headerRight').parent().addClass('blackbg');
		}
		else{
			$('.headerRight').parent().removeClass('blackbg');
		}
	});
});
function setupLabel() {
	  if ($('.label_check input').length) {
		  $('.label_check').each(function(){ 
			  $(this).removeClass('c_on');
		  });
		  $('.label_check input:checked').each(function(){ 
			  $(this).parent('label').addClass('c_on');
		  });                
	  };
	  if ($('.label_radio input').length) {
		  $('.label_radio').each(function(){ 
			  $(this).removeClass('r_on');
		  });
		  $('.label_radio input:checked').each(function(){ 
			  $(this).parent('label').addClass('r_on');
		  });
	  };
  };
  $(document).ready(function(){
	  $('.label_check, .label_radio').click(function(){
		  setupLabel();
	  });
	  setupLabel(); 
    });
	