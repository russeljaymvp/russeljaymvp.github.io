$(document).ready(function(){

    function category1(council){
        return `
Job can be done under the GLOBAL!


LAC CAT 1 Tag applied:
Non-Excavation works required. No B4UDIG Plans required.
Job will fall under ${council} Non-Excavation Global WAP.
        
        
        
Retro Form should be submitted via Snapsupport upon work completion.
Updated copy of Global WAPs are available on the Snapsupport Library.`
    }

    function category2(council, trenching=""){
      if (trenching && trenching != "l2") {
        return `
Job can be done under the GLOBAL!



LAC CAT 2 Tag applied:
Excavation works required.
B4UDIG Plans required for ${trenching} digging works.
Job will fall under ${council} Excavation Global WAP.



Retro Form should be submitted via Snapsupport upon work completion.
Updated copy of Global WAPs are available on the Snapsupport Library.
`
      }
      else if(trenching ="internal") {
`Job can be done under the GLOBAL!



LAC CAT 2 Tag applied:
Internal excavation B4UDIG Plans required.
Job will fall under ${council} Non-Excavation Global WAP.



Retro Form should be submitted via Snapsupport upon work completion.
Updated copy of Global WAPs are available on the Snapsupport Library.`

      }
    }

    function category3(trenching) {
switch(trenching) {
  case 'CBD':
    return `
LAC CAT 3 Tag applied:
RCA CAR submission is required for the WAP to be issued.
    
Auckland CBD`
    break;

  case 'internal CBD':
    return `LAC CAT 3 Tag applied:
Excavation works required.
B4UDIG Plans required for ISB digging works.
RCA CAR submission is required for the WAP to be issued.


Auckland CBD`
    break;

    case 'OSB':
    return `LAC CAT 3 Tag applied:
Excavation works required.
B4UDIG Plans required for OSB digging works.
RCA CAR submission is required for the WAP to be issued.`
    break;

    case 'ISB + OSB':
      return `LAC CAT 3 Tag applied:
Excavation works required.
B4UDIG Plans required for OSB + ISB digging works.
RCA CAR submission is required for the WAP to be issued.`
  default:
    // code block
}

    }

  l2 = `
Job can be done under the GLOBAL!
  
  
  
LAC CAT 2 Tag applied:
Job will fall under Auckland Transport Non-Excavation Global WAP.
  
  
  
Retro Form should be submitted via Snapsupport upon work completion.
Updated copy of Global WAPs are available on the Snapsupport Library.
  
Level 2 Road affected
  `
// for cat1
    $("#cat1").click(function(){
        navigator.clipboard.writeText(category1($("#councilList").val())).then(function() {
            console.log('Async: Copying to clipboard was successful!');
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
    });
// for cat2
    $("#level2").click(function () {
      navigator.clipboard.writeText(l2);
    });

    $("#c2isb").click(function () {
      navigator.clipboard.writeText(category2($("#councilList").val(), "internal"));
    });

    $("#c2osb").click(function () {
      navigator.clipboard.writeText(category2($("#councilList").val(), 'OSB'));
    });

    $("#c2isbosb").click(function () {
      navigator.clipboard.writeText(category2($("#councilList").val(), 'ISB + OSB'));
    });

    $("#c2isbosb").click(function () {
      navigator.clipboard.writeText(category2($("#councilList").val(), 'ISB + OSB'));
    });
// category 3
    $("#c3cablingCBD").click(function () {
      navigator.clipboard.writeText(category3('CBD'));
    });

    $("#c3isbCBD").click(function () {
      navigator.clipboard.writeText(category3('internal CBD'));
    });

    $("#c3Osb").click(function () {
      navigator.clipboard.writeText(category3('OSB'));
    });

    $("#c3IsbOsb").click(function () {
      navigator.clipboard.writeText(category3('ISB + OSB'));
    });


});
