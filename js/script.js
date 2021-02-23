function clearFields(){
    document.getElementById("annual-gross-salary").innerHTML = "0.0"
    document.getElementById("monthly-gross-salary").innerHTML = "0.0"
    document.getElementById("annual-payable-tax").innerHTML = "0.0"
    document.getElementById("monthly-payable-tax").innerHTML = "0.0"
    document.getElementById("annual-cash-in-hand").innerHTML = "0.0"
    document.getElementById("monthly-cash-in-hand").innerHTML = "0.0"
    document.getElementById("tax-slab").innerHTML = "0.0%"
}

function calculateTax(){
    var maritalStatus = document.getElementById("marital-status").value
    var monthlySalary = document.getElementById("mnthly-gross-salary").value
    var annualGrossSalary = (monthlySalary * 12).toFixed(2)
    document.getElementById("monthly-gross-salary").innerHTML = monthlySalary

    var annualGrossSalaryId = document.getElementById("annual-gross-salary")
    var annualPayableTaxId = document.getElementById("annual-payable-tax")
    var monthlyPayableTaxId = document.getElementById("monthly-payable-tax")
    var annualCashInHandId = document.getElementById("annual-cash-in-hand")
    var monthlyCashInHandId = document.getElementById("monthly-cash-in-hand")
    
    if (monthlySalary <= 0) {
        alert("Get a job!")
    } else if (maritalStatus === "married") {
        let slices = {
            "ss": (0.01 * 450000) + (0.1 * (annualGrossSalary - 450000)),
            "ts": (0.01 * 450000) + (0.1 * 100000) + (0.2 * (annualGrossSalary - 550000)),
            "fos": (0.01 * 450000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * (annualGrossSalary - 750000)),
            "fis": (0.01 * 450000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * 1250000) + (0.36 * (annualGrossSalary - 2000000))
        }
        annualGrossSalaryId.innerHTML = annualGrossSalary

        if (annualGrossSalary > 0 && annualGrossSalary <= 450000) {
            annualPayableTaxId.innerHTML = (0.01 * annualGrossSalary).toFixed(2)
            monthlyPayableTaxId.innerHTML = ((0.01 * annualGrossSalary) / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - (0.01 * annualGrossSalary).toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - ((0.01 * annualGrossSalary) / 12).toFixed(2)
        } else if (annualGrossSalary > 450000 && annualGrossSalary <= 550000) {
            annualPayableTaxId.innerHTML = (slices['ss']).toFixed(2)
            monthlyPayableTaxId.innerHTML = ((slices['ss']) / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - (slices['ss']).toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - ((slices['ss']) / 12).toFixed(2)
        } else if (annualGrossSalary > 550000 && annualGrossSalary <= 750000){
            annualPayableTaxId.innerHTML = (slices['ts']).toFixed(2)
            monthlyPayableTaxId.innerHTML = ((slices['ts']) / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - (slices['ts']).toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - ((slices['ts']) / 12).toFixed(2)
        } else if (annualGrossSalary > 750000 && annualGrossSalary <= 2000000){
            annualPayableTaxId.innerHTML = (slices['fos']).toFixed(2)
            monthlyPayableTaxId.innerHTML = ((slices['fos']) / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - (slices['fos']).toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - ((slices['fos']) / 12).toFixed(2)
        } else if (annualGrossSalary > 2000000 && annualGrossSalary <= 4000000){
            annualPayableTaxId.innerHTML = (slices['fis']).toFixed(2)
            monthlyPayableTaxId.innerHTML = ((slices['fis']) / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - (slices['fis']).toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - ((slices['fis']) / 12).toFixed(2)
        }
    } else if (maritalStatus === "unmarried") {
        let slices = {
            "fs": (0.01 * 400000),
            "ss": (0.01 * 400000) + (0.1 * 100000),
            "ts": (0.01 * 400000) + (0.1 * 100000) + (0.2 * 200000),
            "fos": (0.01 * 400000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * 1300000)
        }
        if (annualGrossSalary > 0 && annualGrossSalary <= 400000){
            annualGrossSalaryId.innerHTML = annualGrossSalary
            annualPayableTaxId.innerHTML = (0.01 * annualGrossSalary).toFixed(2)
            monthlyPayableTaxId.innerHTML = ((0.01 * annualGrossSalary) / 12).toFixed(2)
        }  else if (annualGrossSalary > 400000 && annualGrossSalary <= 500000) {
            annualGrossSalaryId.innerHTML = annualGrossSalary
            annualPayableTaxId.innerHTML = (slices['fs'] + (0.1 * (annualGrossSalary - 400000))).toFixed(2)
            monthlyPayableTaxId.innerHTML = ((slices['fs'] + (0.1 * (annualGrossSalary - 400000))) / 12).toFixed(2)
        }  else if (annualGrossSalary > 500000 && annualGrossSalary <= 700000) {
            annualGrossSalaryId.innerHTML = annualGrossSalary
            annualPayableTaxId.innerHTML = (slices['ss'] + (0.2 * (annualGrossSalary - 500000))).toFixed(2)
            monthlyPayableTaxId.innerHTML = ((slices['ss'] + (0.2 * (annualGrossSalary - 500000))) / 12).toFixed(2)
        }  else if (annualGrossSalary > 700000 && annualGrossSalary <= 2000000) {
            annualGrossSalaryId.innerHTML = annualGrossSalary
            annualPayableTaxId.innerHTML = (slices['ts'] + (0.3 * (annualGrossSalary - 700000))).toFixed(2)
            monthlyPayableTaxId.innerHTML = ((slices['ts'] + (0.3 * (annualGrossSalary - 700000))) / 12).toFixed(2)
        }  else if (annualGrossSalary > 2000000 && annualGrossSalary <= 4000000) {
            annualGrossSalaryId.innerHTML = annualGrossSalary
            annualPayableTaxId.innerHTML = (slices['fos'] + (0.36 * (annualGrossSalary - 2000000))).toFixed(2)
            monthlyPayableTaxId.innerHTML = ((slices['fos'] + (0.36 * (annualGrossSalary - 2000000))) / 12).toFixed(2)
        }
    }   
}