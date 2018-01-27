It is possible to sort string as integer in `aggregate`.
Or you can simply pass a callback function in `find`.

## Scenario
you received a database with following data:
```
[{
  _id: <id-1>,
  staffNumber: 'Staff-1' 
},
{
  _id: <id-2>,
  staffNumber: 'Staff-2' 
},
{
  _id: <id-3>,
  staffNumber: 'Staff-3' 
}
...
{
  _id: id-1,
  staffNumber: 'Staff-100' 
}
...]
```
and you need to sort all staff by `staffNumber`
since sorting string in mongodb uses string compare, `Staff-10` will come before `Staff-2`,
and when modifying existing system is not allowed/feasible, sorting string as number in query might be needed

## Prerequisites
1. A running mongodb instance/replica set and read/write privileges of the database

## Setup
1. git clone
1. set mongodb connection as `MONGODB_URL` in running environment
1. yarn
1. yarn start
1. access `http://localhost:8080/list` to get staff list, if `sortByStaffNumber` present in query string, the list will be sorted
1. access `http://localhost:8080/init` to re-init the database