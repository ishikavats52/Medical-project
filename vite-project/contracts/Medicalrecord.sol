//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;
contract MedicalRecord{
    uint public recordId;
    mapping (uint => Record) records ;
    mapping(uint => bool) public isDeleted;
    struct Record {
        uint recordId;
        uint timestamps;
        string name;
        uint age;
        string gendre;
        string bloodtype;
        string allergies;
        string diagnosis;
        string treatment;

    }

event MedicalRecord_AddRecord(
    uint recordId,uint256 timestamps ,string name,
        uint age,
        string gendre,
        string bloodtype,
        string allergies,
        string diagnosis,
        string treatment
        );
event MedicalRecord_deleterecord(
    uint recordId,uint256 timestamps ,string name,
        uint age,
        string gendre,
        string bloodtype,
        string allergies,
        string diagnosis,
        string treatment
        );
     function addrecord(
    string memory _name,
    uint _age,
    string memory _gendre,
    string memory _bloodtype,
    string memory _allergies,
    string memory _diagnosis,
    string memory _treatment
) public {
    recordId++;
    records[recordId] = Record(
        recordId,
        block.timestamp,
        _name,
        _age,
        _gendre,
        _bloodtype,
        _allergies,
        _diagnosis,
        _treatment
    );

    emit MedicalRecord_AddRecord(
        recordId,
        block.timestamp,
        _name,
        _age,
        _gendre,
        _bloodtype,
        _allergies,
        _diagnosis,
        _treatment
    );
}
function deleterecord(uint256 _recordId) public {
    require(!isDeleted[_recordId],"The record is already deleted");
    Record storage record =records[_recordId];
    emit MedicalRecord_deleterecord(record.recordId,block.timestamp,record.name,record.age,record.bloodtype,record.allergies,record.allergies,record.treatment,record.diagnosis);
    isDeleted[_recordId]=true;
}
// Getter functions
function getrecordId() public view returns (uint){
    return recordId; 
}
function gettimestamps(uint _recordId) public view returns (uint) {
    return records[_recordId].timestamps;
}
function getName(uint _recordId) public view returns (string memory){
     return records[_recordId].name;
}
function getAge(uint _recordId) public view returns (uint){
     return records[_recordId].age;
}

function getGender(uint _recordId) public view returns (string memory){
     return records[_recordId].gendre;
}
function getdiagnosis(uint _recordId) public view returns (string memory){
     return records[_recordId].diagnosis;
}
function gettreatment(uint _recordId) public view returns (string memory){
     return records[_recordId].treatment;
}
function getbloodtype
(uint _recordId) public view returns (string memory){
     return records[_recordId].bloodtype;
}
function getdeleted
(uint _recordId) public view returns (bool){
     return isDeleted[_recordId];
}
}