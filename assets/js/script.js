//Task #1 - HTML Build
//	A) create a header/hero
//		set time&date with DayJS (month day, full year at time)
//		updates every second with setInterval()
//
//	B) create a bootstrap card component
//		explaining instructions of how to use app
//		button to open modal
//
//	C) create bootstrap modal dialog including:
//		the name of the project
//		the type of project (use a <select> drop-down)
//		the date the project is due (use the date input type)
//		OPTIONAL: use jQuery UI date picker instead of ^
//
//	D) include a bootstrap table that the project’s information can be printed to with for the following data:
//		project name
//		project type
//		due date


//Task #2 - Capture Form Data
// 	A) using jQuery,
//		set up functionality to capture forms input elements on submit
//		use that data and create a new table row on the page
//
//	B) select and save references to every DOM element we will interact with to a variable (i.e, var projectFormEl = $(“#project-form”); ) so that we can use these elements later
//
//  C) attach a submit event listener to the <form> element using jQuery
//
//  D)capture the input values from the form
//      update localStorage so projects are persistent 
//      clear the form data
//
//  E) call the function to print the project data on the page
//
//  F) ensure modal closes when user submits form


//Task #3 - Print Project Data to Page
//  A) create a function that will read the saved projects from localStorage
//
//  B) create a table row (<tr>) element & save it to a variable
//
//  C) IF project is past due give row light red background
//      else if project is due today give row light yellow background
//
//  D) create a table detail (<td>) element for each of the project fields
//
//  E) append each <td> element to the <tr>
//
//  F) append each <tr> to the <tbody>
//
//  G) clear the <tbody> before adding all the rows
//
//  H) add a call to the function when the page loads
//
//  I) update the function responsible for capturing form data so it calls the function for printing the data


//Task #4 - Delete a Project From the Tabel
//  A) update table to accommodate one more column without a name
//
//  B) when generating a <tr> for a project, add a <td> that has a button to delete a project from the list
//
//  C) use jQuery event delegation to attach an event listerner to each delete button so the parent element (<tr>) is removed from page and local storage