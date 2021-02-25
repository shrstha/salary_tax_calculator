//Function to reset all the input & tax results fields
function clearFields(){
    document.getElementById("annual-gross-salary").innerHTML = "0.00"
    document.getElementById("monthly-gross-salary").innerHTML = "0.00"
    document.getElementById("annual-payable-tax").innerHTML = "0.00"
    document.getElementById("monthly-payable-tax").innerHTML = "0.00"
    document.getElementById("annual-cash-in-hand").innerHTML = "0.00"
    document.getElementById("monthly-cash-in-hand").innerHTML = "0.00"
    document.getElementById("tax-slab").innerHTML = "0%"
}

//Function to validate the salary field. Takes only number from 0-9
function checkDec(el){
    var ex = /^\d*[0-9]?\d*$/
    if(ex.test(el.value) == false){
        el.value = el.value.substring(0, el.value.length - 1)
    }
}

//Function to calucate the tax
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

    //tax slab dictionary
    let slabs = {
        "slab1" : "1%",
        "slab2" : "10%",
        "slab3" : "20%",
        "slab4" : "30%",
        "slab5" : "36%"
    }

    
    if (monthlySalary <= 0) {
        alert("Get a job!")
        document.getElementById("monthly-gross-salary").innerHTML = "0.00"
    } else if (maritalStatus === "married") {
        //tax calculation logic for married people
        let slices = {
            "fs": (0.01 * annualGrossSalary),
            "ss": (0.01 * 450000) + (0.1 * (annualGrossSalary - 450000)),
            "ts": (0.01 * 450000) + (0.1 * 100000) + (0.2 * (annualGrossSalary - 550000)),
            "fos": (0.01 * 450000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * (annualGrossSalary - 750000)),
            "fis": (0.01 * 450000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * 1250000) + (0.36 * (annualGrossSalary - 2000000))
        }
        annualGrossSalaryId.innerHTML = annualGrossSalary

        if (annualGrossSalary > 0 && annualGrossSalary <= 450000) {
            annualPayableTaxId.innerHTML = slices['fs'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fs'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['fs'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['fs'] / 12).toFixed(2)
            taxSlabId.innerHTML = slabs['slab1']
        } else if (annualGrossSalary > 450000 && annualGrossSalary <= 550000) {
            annualPayableTaxId.innerHTML = slices['ss'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['ss'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['ss'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['ss'] / 12).toFixed(2)
            taxSlabId.innerHTML = slabs['slab2']
        } else if (annualGrossSalary > 550000 && annualGrossSalary <= 750000){
            annualPayableTaxId.innerHTML = slices['ts'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['ts'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['ts'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['ts'] / 12).toFixed(2)
            taxSlabId.innerHTML = slabs['slab3']
        } else if (annualGrossSalary > 750000 && annualGrossSalary <= 2000000){
            annualPayableTaxId.innerHTML = slices['fos'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fos'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['fos'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['fos'] / 12).toFixed(2)
            taxSlabId.innerHTML = slabs['slab4']
        } else if (annualGrossSalary > 2000000){
            annualPayableTaxId.innerHTML = slices['fis'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fis'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['fis'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['fis'] / 12).toFixed(2)
            taxSlabId.innerHTML = slabs['slab5']
        }
    } else if (maritalStatus === "unmarried") {
        //tax calculation logic for unmarried people
        let slices = {
            "fs": (0.01 * annualGrossSalary),
            "ss": (0.01 * 400000) + (0.1 * (annualGrossSalary - 400000)),
            "ts": (0.01 * 400000) + (0.1 * 100000) + (0.2 * (annualGrossSalary - 500000)),
            "fos": (0.01 * 400000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * (annualGrossSalary - 700000)),
            "fis": (0.01 * 400000) + (0.1 * 100000) + (0.2 * 200000) + (0.3 * 1300000) + (0.36 * (annualGrossSalary - 2000000))
        }
        annualGrossSalaryId.innerHTML = annualGrossSalary

        if (annualGrossSalary > 0 && annualGrossSalary <= 400000){
            annualPayableTaxId.innerHTML = slices['fs'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fs'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['fs'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['fs'] / 12).toFixed(2)
            taxSlabId.innerHTML = slabs['slab1']
        }  else if (annualGrossSalary > 400000 && annualGrossSalary <= 500000) {
            annualPayableTaxId.innerHTML = slices['ss'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['ss'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['ss'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['ss'] / 12).toFixed(2)
            taxSlabId.innerHTML = slabs['slab2']
        }  else if (annualGrossSalary > 500000 && annualGrossSalary <= 700000) {
            annualPayableTaxId.innerHTML = slices['ts'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['ts'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['ts'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['ts'] / 12).toFixed(2)
            taxSlabId.innerHTML = slabs['slab3']
        }  else if (annualGrossSalary > 700000 && annualGrossSalary <= 2000000) {
            annualPayableTaxId.innerHTML = slices['fos'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fos'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - slices['fos'].toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - (slices['fos'] / 12).toFixed(2)
            taxSlabId.innerHTML = slabs['slab4']
        }  else if (annualGrossSalary > 2000000) {
            annualPayableTaxId.innerHTML = slices['fis'].toFixed(2)
            monthlyPayableTaxId.innerHTML = (slices['fis'] / 12).toFixed(2)
            annualCashInHandId.innerHTML = annualGrossSalary - (slices['fis']).toFixed(2)
            monthlyCashInHandId.innerHTML = monthlySalary - ((slices['fis']) / 12).toFixed(2)
            taxSlabId.innerHTML = slabs['slab5']
        }
    }   
}
