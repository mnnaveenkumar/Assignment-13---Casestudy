window.onload = function(){

    // This render function will populate the data read from the given parameter object
    function render(DataObj){

        var NewhighlightsTitle = document.querySelector("#highlightsTitle");
        var NewPoints = document.querySelector("#PersonalityHighlights");
        
        document.querySelector('#Name').innerHTML                   =   DataObj.Name;
        document.querySelector("#Pic").style.backgroundImage        =   "url("+DataObj.Pic+")";
        
        // Populate the Highlights bullets
        NewhighlightsTitle.innerHTML = "Personality Highlights";
        for(var i=0; i<DataObj.Highlights.length; i++){
            NewPoints.innerHTML += "<li class='bullets'>" + DataObj.Highlights[i].point + "</li>" ;
        }

        document.querySelector('.basic-info-panel-head').innerHTML  =   "Basic Information";
        document.querySelector('.edu-info-panel-head').innerHTML    =   "Education";
        document.querySelector('.exp-info-panel-head').innerHTML    =   "Professional Experience";
        document.querySelector('.Contact').innerHTML                =   "Contact Details";
        document.querySelector('#Address').innerHTML                =   DataObj.Address + ',';
        document.querySelector('#City').innerHTML                   =   DataObj.City +'. '+ DataObj.Country + '.';
        document.querySelector('#Phone').innerHTML                  =   DataObj.Phone;
        document.querySelector('#Email').innerHTML                  =   DataObj.Email;
        document.querySelector('#BasicInfo').innerHTML              =   DataObj.Basic;
        document.querySelector('#EducationInfo').innerHTML          =   DataObj.Education;
        document.querySelector('#ExperienceInfo').innerHTML         =   DataObj.Experience;
    }

    // This LoadJSON function will open the 'data.json' File
    /**
    * AJAX CAll
    */
    var LoadJSONData = function(){
        var MyData = new XMLHttpRequest();

        MyData.onreadystatechange = function(){
            if(MyData.readyState === 4){
                render( JSON.parse(MyData.responseText) );
            }
        };
        MyData.open("GET", "./json/data.json", true);
        MyData.send();		
    };
    
    //LoadJSONData();

    /**
    * fetch() - A Promise based Asynchronous Call to the server
    * ex: fetch(url).then().catch();
    */
    var LoadJSONData_fetch = function(){
        var url = './json/data.json';
        fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(tasksJson) {
            render(tasksJson);
        })
        .catch(function(err) {
            console.log(err);
        });   
    }
    
    LoadJSONData_fetch();
}

