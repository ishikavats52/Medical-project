const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("MedicalRecord", () => {
  let medical, transactionResponse, transactionReceipt;

  beforeEach(async () => {
    const Medical = await ethers.getContractFactory("MedicalRecord"); 
    medical = await Medical.deploy(); 
    await medical.deployed(); 
  });

  describe("Add Record", () => {
    beforeEach(async () => {
      transactionResponse = await medical.addRecord("aayush", 20, "Male", "A+", "Fever", "Fever", "Fever");
      transactionReceipt = await transactionResponse.wait(); 
    });

    it("Emits an add record event", async () => {
      const event = transactionReceipt.events[0];
      expect(event.event).to.equal("MedicalRecord_AddRecord");
      const args = event.args;
      expect(args.name).to.equal("aayush");
      expect(args.age).to.equal(20);
      expect(args.bloodType).to.equal("A+");
      expect(args.diagnosis).to.equal("Fever"); 
      expect(args.treatment).to.equal("Fever");
      expect(args.allergies).to.equal("Fever");
      expect(args.gender).to.equal("Male");
    });
  });
});
