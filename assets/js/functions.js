$( document ).ready(function() {

  //this method will not run until the document is ready.
  smoothScroll(1000)
  workBelt();
  workLoad();

  //
  clientStuff();

});

//smoothScroll function is applied from the document ready function
function smoothScroll (duration)
{
	$('a[href^="#"').on('click', function(event)
	{

		var target = $( $(this).attr('href') );

		if( target.length )
		{
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
				/* stuff to do after animation is complete */
			},duration);
		}

	});
}


function workBelt() {

  $('.thumb-unit').click(function(){
    $('.work-belt').css('left', '-100%');
    $('.work-container').show();

  });

  $('.work-return').click(function(){
      $('.work-belt').css('left', '0%');
      $('.work-container').hide(800);
  });

}

function workLoad() {

  //it tells the browser to cache
  //it tells the browser to cache
  $.ajaxSetup ({ cache: true });

  $('.thumb-unit').click(function() {

    var $this =$(this),
        newTitle = $this.find('strong').text(), //get the title text on the <strong> element.
        newFolder = $this.data('folder'), // get the information on the data-folder propert of thumb-unit class. eg. proj-1
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/work/'+ newFolder +'.html'; //set the variable on the path. DYNAMIC GOod:)

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle); // set the the title on this class.

  });


}

function clientStuff() {

  $('.client-unit').first().addClass('active-client'); //default
  $('.client-logo').first().addClass('active-client'); //default


  //if we clicked to each logo.
  $('.client-logo').click(function (){
    var  $this     = $(this), //get the class name for this div that we clicked.
         $siblings = $(this).parent().children(), // get all the siblings(included div on the group)
         position  = $siblings.index($this); //will get the index or the position of the div element on the group.


    //
    $('.client-unit').removeClass('active-client') //remove the actvie-client named on the first client-unit
                    .eq(position) // we take the element on the set(.client-unit) based on its position.
                    .addClass('active-client'); // after getting the element, add a class named active-client.

    $siblings.removeClass('active-client'); //remove the class named on the client-logo div.
    $this.addClass('active-client'); //we will add class named active-client on the div that we are clicking.
  });

  $('.client-control-next, .client-control-prev').click(function(){

        var $this            = $(this),
            curActiveClient  = $('.clients-belt').find('.active-client'),
            position         = $('.clients-belt').children().index(curActiveClient),
            clientNum        = $('.client-unit').length;


        if($this.hasClass('client-control-next'))
        {
          if(position < (clientNum - 1))
          {

            $('.active-client').removeClass('active-client').next().addClass('active-client');
          }
          else{
            $('.client-unit').removeClass('active-client').first().addClass('active-client');
            $('.client-logo').removeClass('active-client').first().addClass('active-client');

          }
        }

        else{

          if(position == 0){
            $('.client-unit').removeClass('active-client').last().addClass('active-client');
            $('.client-logo').removeClass('active-client').last().addClass('active-client');
          }
          else{
            $('.active-client').removeClass('active-client').prev().addClass('active-client');
          }


        }





  });



}
