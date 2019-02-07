

// 1. English Section:
$(".englishButton").click(function(){
    var englishInput = $(".english").val();
        
    if (englishInput==="Mon") {
    $(".englishMessage").text("Correct!"); }
    
    else {
    $(".englishMessage").text("Wrong! Try again.");} 
});


// 2. Social Studies section
$(".ssButton").click(function(){
    var ssInput = $(".socialStudies").val();

    if (ssInput === "Albany") {
        $(".ssMessage").text("Correct!"); }
    
    else {
    $(".ssMessage").text("Wrong! Try again.");} 
});


// 3. Math section
$(".mathButton").click(function(){
    var mathInput = $(".math").val();
    
    mathInput = parseInt(mathInput);
if (mathInput === 30) {
    $(".mathMessage").text("Correct!"); }
    
    else {
    $(".mathMessage").text("Wrong! Try again.");} 
});



// 4. Science section

$(".scienceButton").click(function(){
    var scienceInput = $(".science").val();
    
    if (scienceInput === "solid") {
        $(".scienceMessage").text("Correct!"); }
    
    else {
    $(".scienceMessage").text("Wrong! Try again.");} 
});

