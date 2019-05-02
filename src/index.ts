import moment from 'moment';
export class BlockNumberDateConverter {
    constructor() { }
    static getPastBlockNumber(currentBlock, date) {
        const BLOCK_PERIOD = 10;
        const now = moment();
        const query = moment(date);
        const seconds = now.diff(query, 'seconds');
        const blocks = Math.round(seconds / BLOCK_PERIOD);
        const findBlock = currentBlock - blocks;
        return findBlock;
    }
}