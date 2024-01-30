// Entity - Aggregate Root - Quanto menor melhor
export default class Wallet {

    constructor(
        readonly transactionId: String,
        readonly transactionDate: EpochTimeStamp,
        readonly transactionSource: String,
        readonly description: String,
        readonly value: Number
    ) {

    }
}