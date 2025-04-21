var maxProfit = function(pr) {
   
    let maxprofit = 0
    let minpr = pr[0]
     for(let i=0; i<pr.length; i++){
        if(minpr >pr[i]){
           minpr = pr[i]
        }
      let isProfit = pr[i] - minpr
        if(0< isProfit){
            console.log(`${pr[i]} - ${minpr} = ${pr[i] - minpr}`)
            maxprofit += isProfit
        }
     }
     return maxprofit 
 
};