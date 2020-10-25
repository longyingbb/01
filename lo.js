//作业1
const tipCalculator = function(a,b,c) {  
    if (a  < 50){
        a1 = a *0.2
        a2 = a *1.2
        
    }else if(50<= a <=200 ){
        a1 = a *0.15
        a2 = a *1.15
    }else{
        a1 = a *0.1
        a2 = a *1.1
    }
     
    if (b < 50){
        b1 = b *0.2
        b2 = b *1.2
        
    }else if(50<= b <=200 ){
        b1 = b *0.15
        b2 = b *1.15
    }else{
        b1 = b *0.1
        b2 = b *1.1
    }
     
    if (c < 50){
        c1 = c *0.2
        c2 = c *1.2
        
    }else if(50<= b <=200 ){
        c1 = c *0.15
        c2 = c *1.15
    }else{
        c1 = c *0.1
        c2 = c *1.1
    }
    list1 =[a1,b1,c1]
    list2 =[a2,b2,c2]
    console.log('小费账单'+list1)
    console.log('最终账单'+list2)
};
console.log(tipCalculator(124,48,268))









//作业2
//1）
function mean1(){
    var sum=0,len=arguments.length;
    for(var i=0;i<len;i++){
    sum=sum+arguments[i];}
    return sum/len;
    }
    var A=mean1(2, 9, 3, 3, 5);
    console.log(A);
//2)
function mean2(nums) {
    return nums.reduce((a, b) => a + b) / nums.length;
}
console.log(mean2([1, 3, 5, 7, 8]))
//3)
const asd = []; 
const mean2 = () => {
    let l = asd.length;
    let Avg = asd.reduce((asd, sum) => asd + sum) / l;
    console.log(Avg)
}
const mean3 = (arr1, callback) => {
    const arr2 = arr1.map((sum) => {
        if (sum % 2 == 0) {
            return sum
        }
    }) 
    arr2.forEach(
        item => {
            if (item) {
                asd.push(item)
            }
        }
    ) 
    if (typeof (callback) === "function") {
        callback()
    } 
}
mean3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mean2)
