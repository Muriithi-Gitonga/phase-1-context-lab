/* Your Code Here */

const createEmployeeRecord = (employee) => {
    const Object ={
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour : employee[3],
        timeInEvents : [],
        timeOutEvents :[],
    }
    return Object;
}

function createEmployeeRecords (array) {
    let objectArray = array.map(arr => createEmployeeRecord(arr))
    console.log(objectArray)
    return objectArray;
}

function createTimeInEvent (dateStamp) {
    const timeYear = dateStamp.split(" ")
    const timeInEvent = {
        type: "TimeIn",
        hour: parseInt(timeYear[1]),
        date: timeYear[0]
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent (dateStamp) {
    const timeYear = dateStamp.split(" ")
    const timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(timeYear[1]),
        date: timeYear[0]
    }
    this.timeOutEvents.push(timeOutEvent)
    return this
}

function hoursWorkedOnDate (dateStamp) {
    let timeIn = this.timeInEvents.find(element => element.date === dateStamp)
    let timeOut = this.timeOutEvents.find(element => element.date === dateStamp)
    return (timeOut.hour - timeIn.hour) /100
}

function wagesEarnedOnDate (dateStamp) {
    let pay = this.payPerHour
    return hoursWorkedOnDate.call(this,dateStamp) * pay
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName (array, firstName) {
    return array.find(name => name.firstName === firstName)
}

function calculatePayroll (employeeArray) {
    let records = employeeArray.reduce((allInfo, datesRecords)=>{
        return allInfo + allWagesFor.apply(datesRecords);
    }, 0)
    return parseInt(records);
}   
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */