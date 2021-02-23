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
    let maritalStatus = document.getElementById("marital-status").value
    let monthlySalary = document.getElementById("mnthly-gross-salary").value
    let annualGrossSalary = (monthlySalary * 12).toFixed(2)
    document.getElementById("monthly-gross-salary").innerHTML = monthlySalary

    let annualGrossSalaryId = document.getElementById("annual-gross-salary")
    let annualPayableTaxId = document.getElementById("annual-payable-tax")
    let monthlyPayableTaxId = document.getElementById("monthly-payable-tax")
    let annualCashInHandId = document.getElementById("annual-cash-in-hand")
    let monthlyCashInHandId = document.getElementById("monthly-cash-in-hand")
    let taxSlabId = document.getElementById("tax-slab")
    
    if (monthlySalary <= 0) {
        alert("Get a job!")
    } else if (maritalStatus === "married") {
        let slices = {
            "fs": (0.01 * annualGrossSalary), "taxSlab1": "1%",
            "ss": (0.01 * 450000) + (0.1 * (annualGrossSalary - 450000)), "taxSlab2": "10%",
            "ts": (0.01 * 450000) + (0.1 * 100000) + (0.2 * (annualGrossSalary - 550000)), "taxSlab3": "20%",
            "fos": (0.01 * 450000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * (annualGrossSalary - 750000)), "taxSlab4": "30%",
            "fis": (0.01 * 450000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * 1250000) + (0.36 * (annualGrossSalary - 2000000)), "taxSlab5": "36%"
        }
        annualGrossSalaryId.innerHTML = annualGrossSalary

        if (annualGrossSalary > 0 && annualGrossSalary <= 450000) {
            annualPayableTaxId.innerHTML = slices['fs'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fs'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['fs'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['fs'] / 12).toFixed(2)
            taxSlabId.innerHTML = slices['taxSlab1']
        } else if (annualGrossSalary > 450000 && annualGrossSalary <= 550000) {
            annualPayableTaxId.innerHTML = slices['ss'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['ss'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['ss'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['ss'] / 12).toFixed(2)
            taxSlabId.innerHTML = slices['taxSlab2']
        } else if (annualGrossSalary > 550000 && annualGrossSalary <= 750000){
            annualPayableTaxId.innerHTML = slices['ts'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['ts'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['ts'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['ts'] / 12).toFixed(2)
            taxSlabId.innerHTML = slices['taxSlab3']
        } else if (annualGrossSalary > 750000 && annualGrossSalary <= 2000000){
            annualPayableTaxId.innerHTML = slices['fos'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fos'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['fos'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['fos'] / 12).toFixed(2)
            taxSlabId.innerHTML = slices['taxSlab4']
        } else if (annualGrossSalary > 2000000){
            annualPayableTaxId.innerHTML = slices['fis'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fis'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['fis'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['fis'] / 12).toFixed(2)
            taxSlabId.innerHTML = slices['taxSlab5']
        }
    } else if (maritalStatus === "unmarried") {
        let slices = {
            "fs": (0.01 * annualGrossSalary), "taxSlab1": "1%",
            "ss": (0.01 * 400000) + (0.1 * (annualGrossSalary - 400000)), "taxSlab2": "10%",
            "ts": (0.01 * 400000) + (0.1 * 100000) + (0.2 * (annualGrossSalary - 500000)), "taxSlab3": "20%",
            "fos": (0.01 * 400000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * (annualGrossSalary - 700000)), "taxSlab4": "30%",
            "fis": (0.01 * 400000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * 1300000) + (0.36 * (annualGrossSalary - 2000000)), "taxSlab5": "36%"
        }
        annualGrossSalaryId.innerHTML = annualGrossSalary

        if (annualGrossSalary > 0 && annualGrossSalary <= 400000){
            annualPayableTaxId.innerHTML = slices['fs'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fs'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['fs'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['fs'] / 12).toFixed(2)
            taxSlabId.innerHTML = slices['taxSlab1']
        }  else if (annualGrossSalary > 400000 && annualGrossSalary <= 500000) {
            annualPayableTaxId.innerHTML = slices['ss'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['ss'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['ss'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['ss'] / 12).toFixed(2)
            taxSlabId.innerHTML = slices['taxSlab2']
        }  else if (annualGrossSalary > 500000 && annualGrossSalary <= 700000) {
            annualPayableTaxId.innerHTML = slices['ts'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['ts'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['ts'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['ts'] / 12).toFixed(2)
            taxSlabId.innerHTML = slices['taxSlab3']
        }  else if (annualGrossSalary > 700000 && annualGrossSalary <= 2000000) {
            annualPayableTaxId.innerHTML = slices['fos'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fos'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['fos'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['fos'] / 12).toFixed(2)
            taxSlabId.innerHTML = slices['taxSlab4']
        }  else if (annualGrossSalary > 2000000) {
            annualPayableTaxId.innerHTML = slices['fis'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fis'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - (slices['fis']).toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - ((slices['fis']) / 12).toFixed(2)
            taxSlabId.innerHTML = slices['taxSlab5']
        }
    }   
}