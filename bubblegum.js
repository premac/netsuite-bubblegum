/*    
  @licstart  The following is the entire license notice for the 
  JavaScript code in this page.

  Copyright (C) 2012  Oto 'tapik' Buchta, Andrej Galad

  The JavaScript code in this page is free software: you can
  redistribute it and/or modify it under the terms of the GNU
  General Public License (GNU GPL) as published by the Free Software
  Foundation, either version 3 of the License, or (at your option)
  any later version.  The code is distributed WITHOUT ANY WARRANTY;
  without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

  As additional permission under GNU GPL version 3 section 7, you
  may distribute non-source (e.g., minimized or compacted) forms of
  that code without the copy of the GNU GPL normally required by
  section 4, provided you include this license notice and a URL
  through which recipients can access the Corresponding Source.   


  @licend  The above is the entire license notice
  for the JavaScript code in this page.
*/
(function($, window, document, undefined) {
	//var color = $('#ns_navigation').css("background-color");
  var color = "#ff69b4";

//master
  $('#main_form')
  .attr('style', 'padding-bottom: 0px');

  $('.formtabtext')
  .attr('style', 'padding: 10px 10px !important');

  $('.uir-secondary-buttons')
  .attr('style', 'padding-top: 15px');



  $('div.uir-field-wrapper a.smallgraytextnolink')
  .attr('style', 'color:' + color + ' !important; font-weight:bold !important; font-size: 10px');

  $('.uir-field-wrapper span.smallgraytextnolink')
  .attr('style', 'margin: 0px 0px 1px 0px');

  $('.uir-field-wrapper span.inputreadonly')
  .attr('style', 'font-size: 12px !important; color: black !important');

//list
  $('div.uir-listpage-body scrollarea listborder')
  .attr('style', 'padding-top: 0px; padding-left: 0px')

  $('.uir-list-header-td')
  .attr('style', 'background: #1e90ff !important; padding: 2px 7px;')

  $('.uir-list-header-td .listheader')
  .attr('style', 'color: #ffff00 !important; font-weight: bold !important; font-size: 11px; text-transform: none;')

  $('tr.uir-list-row-tr > td')
  .attr('style', 'padding: 2px 7px !important; font-size: 10px;')

  $('.uir-list-row-tr > td')
  .attr('style', 'border-top: 0px !important')
  
  
	$('#detail_wrapper').each(function() {
		$(this).find('.uir-list-row-cell').each(function() {
			$(this).attr('style', 'vertical-align:top !important;');
		});
	});
})(jQuery, window, document);