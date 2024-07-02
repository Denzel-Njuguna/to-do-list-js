import readline from 'readline';
import http from 'http';
const notification = readline.createInterface({
 input:process.stdin,
 output:process.stdout
});
notification.question('Event ',(event)=>{
 notification.question('sethour ',(sethour)=>{
    notification.question('setminutes ',(setminute)=>{
        notification.question('am/pm ',(meridiem)=>{

        meridiem = meridiem;
            sethour = parseInt(sethour)
        setminute = parseInt(setminute)

        let currenttime= new Date();
        let currenthour = currenttime.getHours();
        let currentminute = currenttime.getMinutes();

        if(meridiem === 'am' && sethour ===12){
            sethour += 0;
        }
        if(meridiem === 'pm' && sethour < 12){
            sethour +=12;
        }
        let temphour,tempminute;
        if(sethour>=currenthour || currenthour == sethour || (setminute >= currentminute)){
            temphour = sethour - currenthour;
            tempminute = setminute - currentminute
        } else  {
            temphour = (24 -  currenthour) + sethour;
            tempminute = (60 - currentminute) + setminute;
        }

        
        if(tempminute>60){
            temphour -1;
            tempminute = 0;
        }
        console.log(event,temphour+":"+tempminute)
        notification.close();
        

    })
})
 })
})


