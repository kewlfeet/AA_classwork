/* global $ */

// dropdown function that removes "hidden" class from dropdown while
// adding hideDropdown listener to document and cleaning up out-of-date listener
const revealDropdown = (event) => {
  event.stopPropagation(); // prevent event from being picked up by body
	$('#gear-dropdown').removeClass('hidden');
  $('#hidden').off('click', revealDropdown);
  $('#hidden').on('click', hideDropdown);
};

// add "hidden" class to dropdown and update event listeners
const hideDropdown = () => {
	$('#gear-dropdown').addClass('hidden');
  $('#hidden').on('click', revealDropdown);
  $('#hidden').off('click', hideDropdown);
};
 
// Add click listener to gear icon which invokes reveal function
$(() => $('#hidden').on('click', revealDropdown));
