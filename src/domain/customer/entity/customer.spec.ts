import { Address } from "../value-object/address";
import Customer from "./customer";

describe('Customer unit tests', () => {
    it("should throw error then id is empty", () => {
        expect(() => new Customer("", "John")).toThrowError("ID is required");
    })

    it("should throw error then name is empty", () => {
        expect(() => new Customer("123", "")).toThrowError("Name is required");
    })

    it("should change name", () => {
        const customer = new Customer("123", "John");
        customer.changeName("Jane");
        expect(customer.name).toBe("Jane");
    })

    it("should activate customer", () => {
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", "City 1", 12345, "Country 1");
        customer.address = address;
        customer.activate();

        expect(customer.isActive()).toBe(true);
    })

    it("should throw error when address is undefined", () => {
        const customer = new Customer("1", "Customer 1");
        expect(() => customer.activate()).toThrowError("Address is required");
    })

    it("should deactivate customer", () => {
        const customer = new Customer("1", "Customer 1");
        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    })

    it('should add reward points', () => {
        const customer = new Customer('1', 'Customer 1');
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    })
})
