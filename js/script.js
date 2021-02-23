function clearFields(){
    document.getElementById("annual-gross-salary").innerHTML = "0.0"
    document.getElementById("annual-taxable-income").innerHTML = "0.0"
    document.getElementById("annual-payable-tax").innerHTML = "0.0"
    document.getElementById("monthly-payable-tax").innerHTML = "0.0"
}

function calculateTax(){
    var maritalStatus = document.getElementById("marital-status").value
    var monthlySalary = document.getElementById("monthly-gross-salary").value
    var annualGrossSalary = (monthlySalary * 12).toFixed(2)
    
    if(monthlySalary <= 0){
        alert("Get a job!")
    } else if (maritalStatus === "married" && (annualGrossSalary > 0 && annualGrossSalary <= 450000)){
        document.getElementById("annual-gross-salary").innerHTML = annualGrossSalary
        document.getElementById("annual-taxable-income").innerHTML = annualGrossSalary
        document.getElementById("annual-payable-tax").innerHTML = (0.01 * annualGrossSalary).toFixed(2)
        document.getElementById("monthly-payable-tax").innerHTML = ((0.01 * annualGrossSalary) / 12).toFixed(2)
    } else if (maritalStatus === "unmarried" && (annualGrossSalary > 0 && annualGrossSalary <= 400000)){
        document.getElementById("annual-gross-salary").innerHTML = annualGrossSalary
        document.getElementById("annual-taxable-income").innerHTML = annualGrossSalary
        document.getElementById("annual-payable-tax").innerHTML = (0.01 * annualGrossSalary).toFixed(2)
        document.getElementById("monthly-payable-tax").innerHTML = ((0.01 * annualGrossSalary) / 12).toFixed(2)
    } else if (maritalStatus === "married" && (annualGrossSalary > 450000 && annualGrossSalary <= 550000)){
        document.getElementById("annual-gross-salary").innerHTML = annualGrossSalary
        document.getElementById("annual-taxable-income").innerHTML = annualGrossSalary
        document.getElementById("annual-payable-tax").innerHTML = ((0.01 * 450000) + (0.1 * (annualGrossSalary - 450000))).toFixed(2)
        document.getElementById("monthly-payable-tax").innerHTML = (((0.01 * 450000) + (0.1 * (annualGrossSalary - 450000))) / 12).toFixed(2)
    } else if (maritalStatus === "unmarried" && (annualGrossSalary > 400000 && annualGrossSalary <= 500000)){
        document.getElementById("annual-gross-salary").innerHTML = annualGrossSalary
        document.getElementById("annual-taxable-income").innerHTML = annualGrossSalary
        document.getElementById("annual-payable-tax").innerHTML = ((0.01 * 400000) + (0.1 * (annualGrossSalary - 400000))).toFixed(2)
        document.getElementById("monthly-payable-tax").innerHTML = (((0.01 * 400000) + (0.1 * (annualGrossSalary - 400000))) / 12).toFixed(2)
    } else if (maritalStatus === "married" && (annualGrossSalary > 550000 && annualGrossSalary <= 750000)){
        document.getElementById("annual-gross-salary").innerHTML = annualGrossSalary
        document.getElementById("annual-taxable-income").innerHTML = annualGrossSalary
        document.getElementById("annual-payable-tax").innerHTML = ((0.01 * 450000) + (0.1 * 100000) + (0.2 * (annualGrossSalary - 550000))).toFixed(2)
        document.getElementById("monthly-payable-tax").innerHTML = (((0.01 * 450000) + (0.1 * 100000) + (0.2 * (annualGrossSalary - 550000))) / 12).toFixed(2)
    } else if (maritalStatus === "unmarried" && (annualGrossSalary > 500000 && annualGrossSalary <= 700000)){
        document.getElementById("annual-gross-salary").innerHTML = annualGrossSalary
        document.getElementById("annual-taxable-income").innerHTML = annualGrossSalary
        document.getElementById("annual-payable-tax").innerHTML = ((0.01 * 400000) + (0.1 * 100000) + (0.2 * (annualGrossSalary - 500000))).toFixed(2)
        document.getElementById("monthly-payable-tax").innerHTML = (((0.01 * 400000) + (0.1 * 100000) + (0.2 * (annualGrossSalary - 500000))) / 12).toFixed(2)
    } else if (maritalStatus === "married" && (annualGrossSalary > 750000 && annualGrossSalary <= 2000000)){
        document.getElementById("annual-gross-salary").innerHTML = annualGrossSalary
        document.getElementById("annual-taxable-income").innerHTML = annualGrossSalary
        document.getElementById("annual-payable-tax").innerHTML = ((0.01 * 450000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * (annualGrossSalary - 750000))).toFixed(2)
        document.getElementById("monthly-payable-tax").innerHTML = (((0.01 * 450000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * (annualGrossSalary - 750000))) / 12).toFixed(2)
    } else if (maritalStatus === "unmarried" && (annualGrossSalary > 700000 && annualGrossSalary <= 2000000)){
        document.getElementById("annual-gross-salary").innerHTML = annualGrossSalary
        document.getElementById("annual-taxable-income").innerHTML = annualGrossSalary
        document.getElementById("annual-payable-tax").innerHTML = ((0.01 * 400000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * (annualGrossSalary - 700000))).toFixed(2)
        document.getElementById("monthly-payable-tax").innerHTML = (((0.01 * 400000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * (annualGrossSalary - 700000))) / 12).toFixed(2)
    } else if (maritalStatus === "married" && (annualGrossSalary > 2000000 && annualGrossSalary <= 4000000)){
        document.getElementById("annual-gross-salary").innerHTML = annualGrossSalary
        document.getElementById("annual-taxable-income").innerHTML = annualGrossSalary
        document.getElementById("annual-payable-tax").innerHTML = ((0.01 * 450000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * 1250000) + (0.36 * (annualGrossSalary - 2000000))).toFixed(2)
        document.getElementById("monthly-payable-tax").innerHTML = (((0.01 * 450000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * 1250000) + (0.36 * (annualGrossSalary - 2000000))) / 12).toFixed(2)
    } else if (maritalStatus === "unmarried" && (annualGrossSalary > 2000000 && annualGrossSalary <= 4000000)){
        document.getElementById("annual-gross-salary").innerHTML = annualGrossSalary
        document.getElementById("annual-taxable-income").innerHTML = annualGrossSalary
        document.getElementById("annual-payable-tax").innerHTML = ((0.01 * 400000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * 1300000) + (0.36 * (annualGrossSalary - 2000000))).toFixed(2)
        document.getElementById("monthly-payable-tax").innerHTML = (((0.01 * 400000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * 1300000) + (0.36 * (annualGrossSalary - 2000000))) / 12).toFixed(2)
    }
}