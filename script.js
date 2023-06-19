function threeSum(arr, target) {
let ans=0;
arr.sort(function(a,b){return a-b})
for(let i=0;i<arr.length;i++){
	let a= arr[i]
	let left=i+1
	let right=arr.length-1
	while(left<right){
		if(Math.abs(target-ans)>Math.abs((a+arr[left]+arr[right])-target) ){
			ans=a+arr[left]+arr[right]
			left++
			right--
		}
		if(a+arr[left]+arr[right]>target){
			right--
		}
		if(a+arr[left]+arr[right]<target)){
			left++
		}
	}
}
	return ans
}

module.exports = threeSum;
