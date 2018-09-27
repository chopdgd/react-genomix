import moment from"moment";var getTurnAroundTimeDetails=function(a,b,c){var d,e,f=moment(Date.now()),g=moment(b),h=moment(b).add(a,"days"),i="yellow";// If it has a signout date, we can use this to subtract against
if(c){var j=moment(c);d=j.diff(g,"days"),e=-1*h.diff(j,"days"),i=d>a?"red":"green"}else{d=f.diff(g,"days"),e=-1*h.diff(f,"days");var k=d/a;// Label is the time to signout date
// If the target signout date is 12/19/1987 and today is 12/18/1987, we would display -1
// We count negative towards the expected date, and incrementally up past signout
.5>k?i="green":.9<k&&(i="red")}return{label:e,color:i,value:c?a:d}};export default getTurnAroundTimeDetails;