export class Address {
    private _street: string;
    private _city: string;
    private _number: number;
    private _zip: string;

    constructor(street: string, city: string, number: number, zip: string) {
        this._street = street;
        this._city = city;
        this._number = number;
        this._zip = zip;
        this.validate();
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error('Street is required');
        }
        if (this._city.length === 0) {
            throw new Error('City is required');
        }
        if (this._zip.length === 0) {
            throw new Error('Zip is required');
        }
    }

    toString() {
        return `${this._street} ${this._number}, ${this._zip} ${this._city}`;
    }


    get street(): string {
        return this._street;
    }

    get city(): string {
        return this._city;
    }

    get number(): number {
        return this._number;
    }

    get zip(): string {
        return this._zip;
    }
}
