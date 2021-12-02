function userCard (balance, transactionLimit,historyLogs,key){
let card = {balance, transactionLimit, historyLogs,key};
return{
    getCardOption:()=>console.log(card),
    putCredits:(sum)=> card.balance += sum,
    setTransactionLimit:(limit)=>card.transactionLimit = limit,
    takeCredits:(credit)=>{
        let sum = card.transactionLimit + card.balance
        if (sum>credit){
            card.balance = sum - credit;
        } else {
            console.log('неможливо здійснити операцію')
        }
    },


}
};
let card1 = userCard(100,100,[1,2,3], 1);
card1.getCardOption();
card1.putCredits(150);
card1.takeCredits(100);
card1.setTransactionLimit(5000)
