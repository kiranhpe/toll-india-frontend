export interface ITollDetails {
    _id ? :             string;
    tollName ? :        string;
    tollId ? :          number;
    effectiveFrom ? :   string;
    tollableLength ? :  string;
    __v ? :             number;
    isDataAvailable ? : boolean;
    tollFees ? :        TollFee[];
}

export interface TollFee {
    vehicleType:                  string;
    single:                       number;
    return:                       number;
    monthly:                      number;
    commercialVehiclesWithinDist: number;
    _id:                          string;
}