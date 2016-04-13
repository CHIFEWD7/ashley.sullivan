function copyrightDate(){
	var d = new Date();
	var curr_year = d.getFullYear();
	var dateString = "&copy;" + " " + curr_year + " ";
	//return dateString
	document.write(dateString);
}