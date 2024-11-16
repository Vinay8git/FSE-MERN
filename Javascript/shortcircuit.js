const getStatus = isActive => isActive? 'Active' : 'Inactive';
console.log(getStatus(true));
console.log(getStatus(false));