function submitAnswers(){
    var total = 5;
    var scor = 0;
    
    //get values 
    
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    
    //valediation
    
    for(i = 1 ; i<= total ; i++){
        if(eval('q'+i) == null ||eval('q'+i) == ''){
            alert('you missed the question '+i);
            return false;    
        
    }
    }
    
    // set correct answers
    
    var answers = ["b", "a", "d","b" ,"d"];
    
    //check answers
    for(i=1;i<=total;i++){
    if(eval('q'+i) == answers[i-1]){
        scor++;    
    }
    
    }
    //display the results 
    var results = document.getElementById('results');
    results.innerHTML= '<h3>you scored <span> '+scor+'</span>out of <span>' + total+'</span></h3>';
    alert('you scored '+ scor + 'out of'+ total);
    
    return false;
}